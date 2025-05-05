import Image from "next/image";

import EventCard from "@/components/events/event_card";
import SpecialsCarousel from "@/components/specials/specials_carousel";

import { events, specialsFood, specialsDrink } from "@/data/synthetic_data";
import { rubikFont } from "@/lib/fonts";

import TornEdge from "@/public/assets/patterns/torn_paper_border.svg";
import Logo from "@/public/assets/wh_logo.svg";
import styles from "./page.module.css";

const todaysDate = "2025-05-01T00:00:00Z"

// function to return the closest event to today's date
const getNextEvent = (events, todaysDate) => {
  const today = new Date(todaysDate);

  const futureEvents = events
    .map(event => ({ ...event, date: new Date(event.start) }))
    .filter(event => event.date >= today)
    .sort((a, b) => a.date - b.date);

  return futureEvents.length > 0 ? futureEvents[0] : null;
}

export default function Home() {
  const event = getNextEvent(events, todaysDate);

  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.section_hero}`}>
          <div className={styles.hero_image}>
            <Logo className={styles.hero_logo}></Logo>
          </div>
        </section>
        <section className={`${styles.section} ${styles.section_about}`}>
          <TornEdge className={styles.border_top}></TornEdge>
          <div className={styles.section_about_content}>
              <div className={styles.vid_grid}>
                <div className={styles.vid_background}></div>
                <div className={styles.vid_container}>
                  <video autoPlay loop playsInline>
                    <source src="/assets/video/ww_about_vid.mp4" />
                  </video>
                </div>
              </div>
              <div className={styles.section_about_text}>
                <h1 className={`${styles.section_title} ${styles.about_title} ${rubikFont.className}`}>Eat, Drink, Play!</h1>
                <p>Chalk up and chill out at The Westville Warehouse — where 
                  craft beers flow, cocktails come on tap, and the pool tables 
                  are ready.</p>
                <p>Whether you're here to shoot your shot, 
                  catch a talented band, or just unwind with your crew, 
                  we’ve got the perfect combo of laid-back vibes and high-energy 
                  fun. Weeknights, weekends — we keep the good times rolling.</p>
              </div>
          </div>
        <TornEdge className={styles.border_bottom}></TornEdge>
        </section>
        <section className={`${styles.section} ${styles.section_event}`}>
          <div className={styles.section_wrapper}>
            <h1 className={`${styles.section_title} ${styles.section_title_event} ${rubikFont.className}`}>Coming Up ...</h1>
            <EventCard props={event}/>
          </div>
        </section>
        <section className={`${styles.section} ${styles.section_specials}`}>
        <TornEdge className={styles.border_top}></TornEdge>
          <div className={styles.section_wrapper}>
            <h1 className={`${styles.section_title} ${styles.specials_title} ${rubikFont.className}`}>Our Specials ...</h1>
              <div className={styles.specials_container}>
                <SpecialsCarousel title='Food' specials={specialsFood}></SpecialsCarousel>
                <SpecialsCarousel title='Drinks' specials={specialsDrink}></SpecialsCarousel>
              </div>
            </div>
          <TornEdge className={styles.border_bottom}></TornEdge>
        </section>
    </main>
    </>
  );
}   