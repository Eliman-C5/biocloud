'use client'

import React, { ReactNode, useState } from 'react';
import {Footer} from './Footer';
// import Header from './Header';
import PageHead from './PageHead';
// import Sidebar from './Sidebar';
import BackToTop from '@/components/BackToTop';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type children = {
  children: ReactNode
}

const Layout = ({ children }: children) => {
    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <PageHead />
            <div className="body-overlay-1" onClick={handleRemove} />
            <Navbar handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} addClass="header-home7" />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default Layout;