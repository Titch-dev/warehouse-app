"use client"

import Image from "next/image";
import { useState } from "react";

import Chevron from "@/components/navigation/chevron";
import styles from "./page.module.css";

const imageList = [
  {id:1, src: "/assets/gallery/wh_gal_1.png"},
  {id:2, src: "/assets/gallery/wh_gal_2.png"},
  {id:3, src: "/assets/gallery/wh_gal_3.png"},
  {id:4, src: "/assets/gallery/wh_gal_4.png"},
  {id:5, src: "/assets/gallery/wh_gal_5.png"},
  {id:6, src: "/assets/gallery/wh_gal_6.png"},
  {id:7, src: "/assets/gallery/wh_gal_7.png"},
  {id:8, src: "/assets/gallery/wh_gal_8.png"},
  {id:9, src: "/assets/gallery/wh_gal_9.png"},
  {id:10, src: "/assets/gallery/wh_gal_10.png"},
  {id:11, src: "/assets/gallery/wh_gal_11.png"},
  {id:12, src: "/assets/gallery/wh_gal_12.png"},
  {id:13, src: "/assets/gallery/wh_gal_13.png"},
  {id:14, src: "/assets/gallery/wh_gal_14.png"},
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const  handleNext = () => {
    setSelectedIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  }

  return (
    <div className={styles.gallery_wrapper}>
      <section className={styles.viewing_section}>
          <button onClick={handlePrev} className={styles.nav_button}>
            <Chevron direction="left" />
          </button> 
          <img src={imageList[selectedIndex].src} className={styles.image_def}></img>
          <button onClick={handleNext} className={styles.nav_button}>
            <Chevron direction="right" />
          </button>
      </section>
      <section className={styles.gallery_section}>
        { imageList.map((image, index) => (
          <figure 
            key={image.id}
            onClick={() => handleSelect(index)} 
            className={`${styles[`img_thumbnail_${image.id}`]} ${index === selectedIndex ? styles.img_selected : ""}`}
          >
            <img src={image.src} />
          </figure>
        ))}
      </section>
    </div>
  )
}
