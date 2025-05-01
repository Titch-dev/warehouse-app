import Image from 'next/image';
import Link from "next/link";

import eventImg from '@/public/assets/events/karaoke.png';
import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import OpenDoorIcon from '@/public/assets/icons/door-open-solid.svg';
import ClockIcon from '@/public/assets/icons/clock-icon.svg';
import styles from './event_card.module.css';

import { rubikFont } from "@/lib/fonts";

export default function EventCard() {
    return (
        <div className={styles.event_card}>
            <div className={styles.event_content}>
            <h1 className={`${rubikFont.className} ${styles.event_title}`}>
                Karaoke!
            </h1>
            <p className={styles.event_description}>Get ready to hit the stage and belt out your favorite 
                tunes at our Karaoke Night! Whether you're a shower singer 
                or a rockstar in the making, this is your chance to shine. 
                Grab a mic, enjoy awesome drinks, and vibe with a crowd that 
                loves a good time. No judgment—just pure fun!</p>
            <div className={styles.event_details}>
                <div className={styles.event_icon_container}>
                    <CalendarIcon className={styles.icon}></CalendarIcon>
                    <p className={styles.event_icon_text}>Thursday 03 Apr</p>
                </div>
                <div className={styles.event_icon_container}>
                    <ClockIcon className={styles.icon}></ClockIcon>
                    <p className={styles.event_icon_text}>7pm - 11pm</p>
                </div>
                <div className={styles.event_icon_container}>
                    <OpenDoorIcon className={styles.icon}></OpenDoorIcon>
                    <p className={styles.event_icon_text}>R 10</p>
                </div>
            </div>
            </div>
            <Link href="/events" className={styles.event_link}>
                <Image src={eventImg} className={styles.event_image}></Image>
            </Link>
        </div>
  )
}
