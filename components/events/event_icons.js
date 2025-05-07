import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import OpenDoorIcon from '@/public/assets/icons/door-open-solid.svg';
import ClockIcon from '@/public/assets/icons/clock-icon.svg';

import styles from './event_icons.module.css'

export default function EventIcons({date, price, start, end}) {


  return (
    <div className={styles.icons}>
        <div className={styles.icon_container}>
            <CalendarIcon className={styles.icon}></CalendarIcon>
            <p>{date}</p>
        </div>
        <div className={styles.icon_container}>
            <OpenDoorIcon className={styles.icon}></OpenDoorIcon>
            <p>{price === 0 ? "Free" : `R ${price} pp`}</p>
        </div>
        <div className={styles.icon_container}>
            <ClockIcon className={styles.icon}></ClockIcon>
            <p>{`${start} - ${end} `}</p>
        </div>
    </div>
  )
}
