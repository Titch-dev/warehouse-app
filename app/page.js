import Image from "next/image";
// import { useState, useEffect } from 'react';


import EventCard from "@/components/events/event_card";
import SpecialsCarousel from "@/components/specials/specials_carousel";

import { rubikFont, latoFont } from "@/lib/fonts";

import TornEdge from "@/public/assets/patterns/torn_paper_border.svg";
import Logo from "@/public/assets/wh_logo.svg";
import styles from "./page.module.css";

export default function Home() {
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
                  <video autoPlay loop playsInline className={styles.section_about_image}>
                    <source src="/assets/video/ww_about_vid.mp4" />
                  </video>
                </div>
              </div>
              <div className={styles.section_about_text}>
                <h1 className={`${styles.section_title} ${styles.section_title_about} ${rubikFont.className}`}>Eat, Drink, Play!</h1>
                <p>Chalk up and chill out at The Westville Warehouse — where 
                  craft beers flow, cocktails come on tap, and the pool tables 
                  are ready for you.</p>
                <p>Whether you're here to shoot your shot, 
                  catch a talented band, or just unwind with your crew, 
                  we’ve got the perfect combo of laid-back vibes and high-energy 
                  fun. Weeknights, weekends — we keep the good times rolling.</p>
              </div>
          </div>
        <TornEdge className={styles.border_bottom}></TornEdge>
        </section>
        <section className={`${styles.section} ${styles.section_event}`}>
          <h1 className={`${styles.section_title} ${styles.section_title_event} ${rubikFont.className}`}>Coming Up ...</h1>
          <EventCard></EventCard>
        </section>
        <section className={`${styles.section} ${styles.section_specials}`}>
          <h1 className={`${styles.section_title} ${rubikFont.className}`}>Our Drinks Specials ...</h1>
          <TornEdge className={styles.border_top}></TornEdge>
            <SpecialsCarousel></SpecialsCarousel>
          <TornEdge className={styles.border_bottom}></TornEdge>
        </section>
    </main>
    </>
  );
}   