import EventItem from '@/components/events/event_item';

import styles from './page.module.css';
import { rubikFont } from '@/lib/fonts';

import { events } from '@/data/synthetic_data';
import { getSortedFutureEvents } from '@/lib/events';


const todaysDate = "2025-04-29T00:00:00Z";

export default function EventsPage() {

  const eventsList = getSortedFutureEvents(events, todaysDate);

  return (
    <div className={styles.wrapper}>
      <h1 className={`${rubikFont.className} ${styles.page_title}`}>Our Events</h1>
      <section className={styles.event_list_wrapper}>
          {eventsList.map((event, index) => (
            <>
              <div className={styles.event_wrapper}>
                <EventItem key={event.id} props={event} isReversed={index % 2 === 1}/>
              </div>
            </>
          ))}
      </section>
    </div>
  )
}
