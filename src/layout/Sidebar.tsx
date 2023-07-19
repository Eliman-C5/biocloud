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
                                                    <li >
                                                        <Link className="active" href="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Company</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Career</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog">Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Shop</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Pages</Link>
                                                    </li>
                                                    <li><Link href="/contact">Contact</Link></li>
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