'use client'

import Link from 'next/link';
import { useState } from 'react';

import Modal from '../ui/modal';
import Contact from '../contact/contact';

import styles from './footbar.module.css';
import { colors } from '@/lib/colors';

import WHLogo from '@/components/assets/logo/whLogoSVG';
import MapIconSVG from '../assets/icons/mapIconSVG';
import EnvelopeIcon from '../assets/icons/envelope_IconSVG';
import TornBorder from '../assets/patterns/torn_border';
import Socials from '../assets/icons/socials';

export default function Footbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=The+Westville+Warehouse`


  return (
    <div className={styles.wrapper}>
      <TornBorder top={true} color={colors.greydark4} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo_container}>
            <WHLogo className={styles.logo}/>
            <Socials size={30}/>
          </div>
          <div className={styles.nav_container}>
            <h2>Navigation</h2>
            <div className={styles.nav_grid}>
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/menu">Menus</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/auth">Login</Link>
            </div>
          </div>
          <div className={styles.list}>
            <button 
              className={styles.item_row}
              onClick={() => setIsModalOpen(true)}>
              <EnvelopeIcon>
                <linearGradient id="Gradient1" x2="0" y2="1">
                    <stop className={styles.stop1} offset="0%" />
                    <stop className={styles.stop2} offset="50%" />
                    <stop className={styles.stop3} offset="100%" />
                </linearGradient>
              </EnvelopeIcon>
              <p style={{alignSelf: 'center'}}>Contact us...</p>
            </button>
            <Link className={styles.item_row} href={mapUrl} target='_blank'>
              <MapIconSVG >
                <linearGradient id="Gradient1" x2="0" y2="1">
                    <stop className={styles.stop1} offset="0%" />
                    <stop className={styles.stop2} offset="50%" />
                    <stop className={styles.stop3} offset="100%" />
                </linearGradient>
              </MapIconSVG>
              <p>48a Buckingham Terrace,<br/>Westville,<br/>Durban,<br/>
              4001,<br/>South Africa</p>
            </Link>
          </div>
        </div>
        <div className={`${styles.content} ${styles.content_border}`}>
          <p className={styles.copy_right}>&copy; 2025 The Westville Warehouse</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Contact/>
      </Modal>
    </div>
  );
}
