"use client"

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Chevron from '@/components/navigation/chevron';

import styles from "./specials_carousel.module.css";

const specials = [
    {id: 1, img:"/assets/specials/monday.png"},
    {id: 2, img:"/assets/specials/tuesday.png"},
    {id: 3, img:"/assets/specials/wednesday.png"},
    {id: 4, img:"/assets/specials/thursday.png"},
    {id: 5, img:"/assets/specials/friday.png"},
    {id: 6, img:"/assets/specials/saturday.png"},
    {id: 7, img:"/assets/specials/sunday.png"},
]

export default function SpecialsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()  
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {    
        if (emblaApi) emblaApi.scrollNext()  
    }, [emblaApi]);

  return (
    <div className={styles.embla} >
        <button className={styles.embla__prev} onClick={scrollPrev}>
            <Chevron direction="left"/>
        </button>
        <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
                {/* Todo
                    - on hover all slides to scale
                    - include tracking dots
                    - glitch on loop when cycling to start of slide or to end
                */}
                {specials.map((special) => (
                    <Image
                        key={special.id}
                        src={special.img}
                        className={styles.embla__slide}
                        width={300}
                        height={200} />
                ))}
            </div>
        </div>
        <button className={styles.embla__next} onClick={scrollNext}>
            <Chevron direction="right" />
        </button>
        </div>
  )
}
