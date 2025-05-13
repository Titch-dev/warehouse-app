import Image from "next/image";

import EventItem from "@/components/events/event_item";
import SpecialsCarousel from "@/components/specials/specials_carousel";

import { events, specialsFood, specialsDrink } from "@/data/synthetic_data";
import { rubikFont } from "@/lib/fonts";
import { getSortedFutureEvents } from "@/lib/events";
import { colors } from "@/lib/colors";

import TornBackgroundSVG from "@/components/assets/patterns/torn_background_SVG";
import TornBorder from "@/components/assets/patterns/torn_border";
 
import Logo from "@/public/assets/wh_logo.svg";
import styles from "./page.module.css";

const todaysDate = "2025-04-29T00:00:00Z";

export default function Home() {
  const eventList = getSortedFutureEvents(events, todaysDate);
  const nextEvent = eventList[0];

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section_hero}>
          <div className={styles.hero_image}>
            <Logo className={styles.hero_logo}></Logo>
          </div>
        </section>

        <section className={styles.about}>
          <TornBorder top={true} fill={colors.greydark1}/>
          <div className={styles.about_content}>
            <TornBackgroundSVG className={styles.content_background} />
            <div className={styles.about_text}>
              <h1 className={`${styles.about_title} ${rubikFont.className}`}>Eat, Drink, Play!</h1>
              <p>Chalk up and chill out at The Westville Warehouse — where 
                craft beers flow, cocktails come on tap, and the pool tables 
                are ready.</p>
              <p>Whether you're here to shoot your shot, 
                catch a talented band, or just unwind with your crew, 
                we’ve got the perfect combo of laid-back vibes and high-energy 
                fun. Weeknights, weekends — we keep the good times rolling.</p>
            </div>
              <div className={styles.vid_container}>
                <video autoPlay loop muted playsInline>
                  <source src="/assets/video/ww_about_vid.mp4" />
                </video>
              </div>
          </div>
          <TornBorder top={false} fill={colors.greydark1}/>
        </section>

       
        <section className={styles.event}>
            <h1 className={`${styles.event_title} ${rubikFont.className}`}>Coming Up ...</h1>
            <div className={styles.event_wrapper}>
              <EventItem props={nextEvent} />
            </div>
        </section>

        
        <section className={styles.specials}>

          <TornBorder top={true} fill={colors.greydark1}/>
          <h1 className={`${styles.specials_title} ${rubikFont.className}`}>Our Specials ...</h1>
          <div className={styles.specials_container}>
            <SpecialsCarousel title='Food' specials={specialsFood}></SpecialsCarousel>
            <SpecialsCarousel title='Drinks' specials={specialsDrink}></SpecialsCarousel>
          </div>
          <TornBorder top={false} fill={colors.greydark1}/>
        </section>
    </main>
    </>
  );
}   