import styles from './event_item.module.css';


const event_info = {
    title: "karaoke",
    description: `Get ready to hit the stage and belt out your favorite 
                tunes at our Karaoke Night! Whether you're a shower singer 
                or a rockstar in the making, this is your chance to shine. 
                Grab a mic, enjoy awesome drinks, and vibe with a crowd that 
                loves a good time. No judgment—just pure fun!`,
    date: "Thursday 03 April",
    timeStart: "7pm",
    timeEnd: "11pm",
    price: "R 10"
}

export default function EventItem() {
  return (
    <div className={styles.container}>
        <h1 className={styles.date}>{event_info['date']}</h1>

    </div>
  )
}
