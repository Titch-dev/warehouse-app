'use client'

import Link from "next/link";
import { useState, useEffect } from 'react';

import NavItem from "./navitem";

import styles from "./navbar.module.css";

import LogoImg from "@/public/assets/wh_logo.svg";

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false); // Start hidden if at the top
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false); // Track if user has scrolled

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true); // Allow normal behavior after first scroll
            }

            if (hasScrolled) {
                if (window.scrollY > lastScrollY) {
                    setIsHidden(true); // Hide on scroll down
                } else {
                    setIsHidden(false); // Show on scroll up
                }
            }     

        setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasScrolled]);



    return(
        <div className={`${styles.container} ${isHidden ? `${styles.hidden_navbar}` : ""}`}>
            <nav className={styles.navbar}>
                <Link href="/">
                    <LogoImg className={styles.navbar_logo}>
                        <linearGradient id="Gradient1" x2="0" y2="1">
                            <stop className={styles.stop1} offset="0%" />
                            <stop className={styles.stop2} offset="50%" />
                            <stop className={styles.stop3} offset="100%" />
                        </linearGradient>
                    </LogoImg>
                </Link>
                <div className={styles.navbar_links}>
                    <NavItem href="/events">Events</NavItem>
                    <NavItem href="/menu">Menus</NavItem>
                    <NavItem href="/gallery">Gallery</NavItem>
                    <NavItem href="/contact">Contact Us</NavItem>
                </div>
                <div className={styles.login_button}>
                    <Link href="/login" className={styles.login_button__label}>
                        <svg className={styles.login_button__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <defs>
                                <linearGradient id="Gradient1" x2="0" y2="1">
                                    <stop className={styles.stop1} offset="0%" />
                                    <stop className={styles.stop2} offset="50%" />
                                    <stop className={styles.stop3} offset="100%" />
                                </linearGradient>
                            </defs>
                            <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
                        </svg>
                        <p>Login</p>
                    </Link>
                </div>
            </nav>
        </div>
    );    
}