import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }: any) => {

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="d-flex" href="/">
                        <img alt="Biocloud" src="media/biocloudNavbarLogo.png" /></Link></div>
                        <div className="perfect-scroll">

                            <div className="mobile-menu-wrap mobile-header-border">
                                <Tabs
                                    defaultActiveKey="menu"
                                    id="fill-tab-example"
                                    className="nav nav-tabs nav-tabs-mobile mt-25"
                                    fill
                                >
                                    <Tab eventKey="menu" title="Menu">
                                        <div className="tab-pane">
                                            <nav className="mt-15">
                                                <ul className="mobile-menu font-heading">
                                                  <li className="">
                                                    <Link href="#software">Sobre el software</Link>
                                                  </li>
                                                  <li className="">
                                                    <Link href="#app">Mobile App</Link>
                                                  </li>
                                                  <li className="">
                                                    <Link href="#tablet">Tablet</Link>
                                                  </li>
                                                  <li className="">
                                                    <Link href="#biometricos">Biométricos</Link>
                                                  </li>
                                                  <li className="">
                                                    <Link href="#planes">Planes</Link>
                                                  </li>
                                                  <li className="">
                                                    <Link href="#testimonios">Testimonios</Link>
                                                  </li>
                                                  <li><Link href="#contacto">Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;