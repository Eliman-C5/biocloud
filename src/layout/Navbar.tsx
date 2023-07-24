import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { StartBtn } from './StartBtn';

type navbarType = {
 handleOpen: any,
 handleRemove: any,
 openClass: any,
 addClass: any
}

const Navbar = ({ handleOpen, handleRemove, openClass, addClass }: any) => {
    const [scroll, setScroll] = useState(0)
    const [isSearchToggled, setSearchToggled] = useState(false);
    const [isLanguageToggled, setLanguageToggled] = useState(false);
    const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
    const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            
            if (scrollCheck) {
                setScroll(window.scrollY)
            }
        })
    })
    
    return (
        <>
            <header className={`${scroll ? "header sticky-bar stick" : "header sticky-bar"} ${addClass}`} style={{background: '#E0F1F4'}}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-navbar">
                            <div className="header-logo mr-10">
                            <Link className="d-flex" href="/">
                              <img alt="Ecom" src="media/biocloudNavbarLogo.png" />
                            </Link>
                            </div>
                            <div className="d-flex">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className=""><Link href="#software">Sobre el software</Link>
                                        </li>
                                        <li className=""><Link href="#app">Mobile App</Link>
                                        </li>
                                        <li className=""><Link href="#tablet">Tablet</Link>
                                        </li>
                                        <li className=""><Link href="#biometricos">Biométricos</Link>
                                        </li>
                                        <li className=""><Link href="#planes">Planes</Link>
                                        </li>
                                        <li className=""><Link href="#testimonios">Testimonios</Link>
                                        </li>
                                        <li><Link href="#contact">Contacto</Link></li>
                                    </ul>
                                </nav>
                                <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                    onClick={() => { handleOpen(); handleRemove() }}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="d-none d-xl-flex" style={{gap: '15px', alignItems: 'center'}}>
                                <div className="d-inline-block box-search-top">
                                    <div className={isSearchToggled ? "form-search-top d-block" : " form-search-top d-none"}>
                                        <form action="#">
                                            <input className="input-search" type="text" placeholder="Search..." />
                                            <button className="btn btn-search">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                    <span className="font-lg icon-list search-post" onClick={toggleSearchTrueFalse}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg></span>
                                </div>
                                <StartBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Navbar;