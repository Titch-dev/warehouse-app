'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLogout } from "@/hooks/useLogout";
import { useAuthContext } from "@/hooks/useAuthContext";

import Modal from "../ui/modal";
import Contact from "../contact/contact";

import styles from "./navbar.module.css";
import LogoSVG from "@/components/assets/logo/whLogoSVG";
import UserRegularSVG from '@/components/assets/icons/user_regularSVG';

export default function Navbar() {
    const { user, authIsReady } = useAuthContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();
    const { logout } = useLogout();

    const handleNavMenu = () => {
        setBurgerOpen(prev => !prev);
        setNavOpen(prev => !prev);
    }

    const handleNavClose = () => {
        setBurgerOpen(false);
        setNavOpen(false);
    }



    return(
        <>
            <header className={styles.wrapper}>
                <div className={`${styles.container}`}>
                    <div onClick={handleNavClose}>
                        <Link href='/'>
                            <LogoSVG className={styles.logo}>
                                <linearGradient id="Gradient1" x2="0" y2="1">
                                    <stop className={styles.stop1} offset="0%" />
                                    <stop className={styles.stop2} offset="50%" />
                                    <stop className={styles.stop3} offset="100%" />
                                </linearGradient>
                            </LogoSVG>
                        </Link> 
                    </div>  
                    <button 
                        className={`${styles.burger} ${burgerOpen ? styles.open : ''}`}
                        onClick={handleNavMenu}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                    </button>
                    <nav className={`${styles.navbar} ${navOpen ? styles.show : ''}`}>
                        <div className={styles.nav_links}>
                            <div onClick={handleNavClose}>
                                <Link 
                                    href='/events' 
                                    className={`
                                        ${styles.nav_item} 
                                        ${pathname === '/events' && !isModalOpen
                                        ? styles.active : ''}`}>
                                    <p>Events</p>
                                </Link>
                            </div>
                            <div onClick={handleNavClose}>
                                <Link 
                                    href='/menu' 
                                    className={`
                                        ${styles.nav_item} 
                                        ${pathname === '/menu' && !isModalOpen
                                        ? styles.active : ''}`}>
                                    <p>Menus</p>
                                </Link>
                            </div>
                            <div onClick={handleNavClose}>
                                <Link 
                                    href='/gallery' 
                                    className={`
                                        ${styles.nav_item} 
                                        ${pathname === '/gallery' && !isModalOpen
                                        ? styles.active : ''}`}>
                                    <p>Gallery</p>
                                </Link>
                            </div>
                            <div onClick={handleNavClose}>
                                <button 
                                    className={`
                                        ${styles.nav_item} 
                                        ${isModalOpen ? styles.active : ''}`}
                                    onClick={() => setIsModalOpen(true)}>
                                    <p>Contact Us</p>
                                </button>
                            </div>
                        </div>
                        <div className={styles.login} onClick={handleNavClose}>
                            {authIsReady && !user && <Link 
                                href='/auth' 
                                className={`
                                    ${styles.login_item} 
                                    ${pathname === '/auth' && !isModalOpen
                                    ? styles.active : ''}`}>
                                <UserRegularSVG className={styles.login_svg}>
                                    <linearGradient id="Gradient1" x2="0" y2="1">
                                        <stop className={styles.stop1} offset="0%" />
                                        <stop className={styles.stop2} offset="50%" />
                                        <stop className={styles.stop3} offset="100%" />
                                    </linearGradient>   
                                </UserRegularSVG>
                                <p>Login</p>
                            </Link>}
                            {authIsReady && user && 
                        <button onClick={logout}>Logout</button>}
                        </div>
                    </nav>
                </div>
            </header>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
                <Contact/>
            </Modal>
        </>
        
    );    
}