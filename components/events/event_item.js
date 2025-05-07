import Image from 'next/image';

import styles from './event_item.module.css';
import EventIcons from './event_icons';
import { rubikFont } from '@/lib/fonts';


import TornBackground from '@/public/assets/patterns/torn_background.svg';


export default function EventItem({ props, isReversed }) {
    const { id, title, description, start, end, price, img, alt} = props;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const eventDate = new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        timeZone: "UTC",
    }).format(startDate);
    
    const options = {
        hour: "numeric",
        hour12: true,
        timeZone: "UTC"
    }

    const startTime = startDate.toLocaleTimeString("en-GB", options).toLowerCase();
    const endTime = endDate.toLocaleTimeString("en-GB", options).toLowerCase();

    const eventMeta = { date: eventDate, price: price, start: startTime, end: endTime};

  return (
    <div className={`${styles.container} ${isReversed ? styles.reversed : ""}`}>
        <TornBackground className={styles.event_bg}/>
        <div className={styles.content}>
          <h1 className={`${rubikFont.className} ${styles.event_title}`}>{title}</h1>
          <Image src={img} className={styles.image} width={300} height={450} alt={alt}></Image>
          <EventIcons {...eventMeta} />
          <p className={styles.description}>{description}</p>
        </div>
    </div>
  )
}
