"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navitem.module.css";

export default function NavItem({href, children}) {
    const path = usePathname();
    const isActive = path === href;
    
    return (
      <div className={`${styles.nav_item} ${isActive ? styles.active : ""}`}>
        <Link href={href} className={styles.link}>
        <p className={styles.link_text}>
          {children}
        </p>
        </Link>
      </div>
  )
}
