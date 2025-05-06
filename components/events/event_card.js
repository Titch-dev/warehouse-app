import Image from 'next/image';
import Link from "next/link";

import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import OpenDoorIcon from '@/public/assets/icons/door-open-solid.svg';
import ClockIcon from '@/public/assets/icons/clock-icon.svg';
import styles from './event_card.module.css';

import { rubikFont } from "@/lib/fonts";

export default function EventCard({props}) {
    const { id, title, description, start, end, price, img, alt } = props;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const eventDate = new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        timeZone: "UTC", // optional, depending on how you want to treat the input
    }).format(startDate);
    
    const options = {
        hour: "numeric",
        hour12: true,
        timeZone: "UTC"
    }

    const startTime = startDate.toLocaleTimeString("en-GB", options).toLowerCase();
    const endTime = endDate.toLocaleTimeString("en-GB", options).toLowerCase();

    return (
        <div key={id} className={styles.event_card}>
            <div className={styles.event_text}>
                <h1 className={`${styles.title} ${rubikFont.className}`}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles.icons}>
                    <div className={styles.icon_container}>
                        <CalendarIcon className={styles.icon}></CalendarIcon>
                        <p>{eventDate}</p>
                    </div>
                    <div className={styles.icon_container}>
                        <OpenDoorIcon className={styles.icon}></OpenDoorIcon>
                        <p>{price === 0 ? "Free" : `R ${price} pp`}</p>
                    </div>
                    <div className={styles.icon_container}>
                        <ClockIcon className={styles.icon}></ClockIcon>
                        <p>{`${startTime} - ${endTime} `}</p>
                    </div>
                </div>
            </div>
            <Link href="/events" className={styles.link}>
                <Image src={img} alt={alt} width={300} height={450} className={styles.image} />
            </Link>
        </div>
  )
}
