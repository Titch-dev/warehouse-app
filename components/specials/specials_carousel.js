"use client"

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SpecialsItem from "./specials_item";
import Chevron from '@/components/navigation/chevron';

import styles from "./specials_carousel.module.css";


export default function SpecialsCarousel({ specials }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()  
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {    
        if (emblaApi) emblaApi.scrollNext()  
    }, [emblaApi]);

  return (
    <div className={styles.embla} >
        <button className={styles.btn} onClick={scrollPrev}>
            <Chevron direction="left"/>
        </button>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {specials.map((special) => (
                    <div className={styles.embla__slide}>
                        <SpecialsItem  key={special.id} item={special}/>
                    </div>
                ))}
            </div>
        </div>
        <button className={styles.btn} onClick={scrollNext}>
            <Chevron direction="right" />
        </button>
        </div>
  )
}
