'use client'

import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery';

import TornBorder from '../assets/patterns/torn_border';

import DownloadIcon from '@/public/assets/icons/file-arrow-down-solid.svg';
import ViewIcon from '@/public/assets/icons/eye-regular.svg'
import { rubikFont } from '@/lib/fonts';
import styles from './menu_card.module.css';

export default function MenuCard({ title, description, download, view, tornColor, className }) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <section className={`${styles.menu_container} ${styles[className]}`}>
          {isMobile && <TornBorder top={true} color={tornColor}/>}
          <div className={styles.menu_content}>
            <h2 className={`${styles.menu_title} ${rubikFont.className}`}>{title}</h2>
            <p className={styles.menu_description}>{description}</p>
            <div className={styles.icon_container}>
              <Link
                href={download}
                download
                className={styles.icon_content}>
                  <DownloadIcon className={styles.download_icon}/>
                  <p>Download</p>
              </Link>
              <Link 
                href={view}
                className={styles.icon_content}>
                  <ViewIcon className={styles.view_icon}/>
                  <p>View</p>
              </Link>
            </div>
          </div>
        </section>
  )
}
