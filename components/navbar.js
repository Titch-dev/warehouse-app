import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/wh_logo_dark.png";

export default function Navbar() {
    return(
        <nav className="flex flex-row px-6">
            <Link href="/">
                <Image src={LogoImg} alt="Text logo for dark backgrounds" priority />
            </Link>
            <ul className="flex flex-row">
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/menu">Menus</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <Link href="/login">Login</Link>
        </nav>
    );    
}