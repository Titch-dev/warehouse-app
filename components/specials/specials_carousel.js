"use client"

import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SpecialsItem from "./specials_item";
import Chevron from '@/components/navigation/chevron';

import styles from "./specials_carousel.module.css";
import { rubikFont } from "@/lib/fonts";


export default function SpecialsCarousel({ title, specials }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    let [selectedIndex, setSelectedIndex] = useState(0) 

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {    
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

  return (
    <div className={styles.wrapper}>
        <h1 className={`${styles.title} ${rubikFont.className}`}>{title}</h1>
        <div className={styles.embla} >
            <button className={styles.btn} onClick={scrollPrev}>
                <Chevron direction="left"/>
            </button>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {specials.map((special) => (
                        <div key={special.id} className={styles.embla__slide}>
                            <SpecialsItem key={special.id} item={special}/>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.btn} onClick={scrollNext}>
                <Chevron direction="right" />
            </button>
        </div>
    </div>
   
  )
}
