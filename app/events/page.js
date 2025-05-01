import EventCard from '@/components/events/event_card';
import styles from './page.module.css';



export default function EventsPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.next_event_wrapper}>
        <EventCard />
      </section>
      <section className={styles.calendar_wrapper}>

      </section>
      <section className={styles.event_list_wrapper}>
        <div className={styles.event_item}>
          <h1 className={styles.title}>Title</h1>

        </div>
      </section>
    </div>
  )
}
