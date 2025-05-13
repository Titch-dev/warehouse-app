import InstagramSVG from './instagramSVG';
import FacebookSVG from './facebookSVG';

import styles from './socials.module.css';
import Link from 'next/link';

export default function Socials({ size }) {
  return (
    <div className={styles.container}>
        {/* TODO: - add links to icons */}
        <InstagramSVG className={styles.icon} width={size} height={size}>
            <linearGradient id="Gradient1" x2="0" y2="1">
                <stop className={styles.stop1} offset="0%" />
                <stop className={styles.stop2} offset="50%" />
                <stop className={styles.stop3} offset="100%" />
            </linearGradient>
        </InstagramSVG>
        <FacebookSVG className={styles.icon} width={size} height={size}>
            <linearGradient id="Gradient1" x2="0" y2="1">
                <stop className={styles.stop1} offset="0%" />
                <stop className={styles.stop2} offset="50%" />
                <stop className={styles.stop3} offset="100%" />
            </linearGradient>
        </FacebookSVG>
    </div>
  )
}
