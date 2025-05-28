import styles from './specials_item.module.css';

import { rubikFont } from '@/lib/fonts';

export default function SpecialsItem({ item }) {

  return (
    <div className={styles.container}>
        <h1 className={`${styles.weekday} ${rubikFont.className}`}>{item.day}</h1>
        <img className={styles.image} src={item.img}></img>
        <div className={`${styles.content} `}>
            <h1 className={`${styles.title} ${rubikFont.className}`}>{item.title}</h1>
            <div className={`${styles.offer_wrap} ${item.offers.length > 2 ? styles.sml_text : styles.lg_text }`}>
              {item.offers.map((e, index) => (
                <div key={index} className={styles.offer_line}>
                    <p>{e.offer}</p>
                    <p>{typeof e.price === 'number'
                        ? `R${e.price}`
                        : `${e.price}`}</p>
                </div>
              ))}
            </div>
              
        </div>
    </div>
  )
}
