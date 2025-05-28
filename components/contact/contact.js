import Socials from '../assets/icons/socials';
import ContactForm from '../forms/contact_form';

import styles from './contact.module.css';
import { rubikFont } from '@/lib/fonts';
import TornBorder from '../assets/patterns/torn_border';
import { colors } from '@/lib/colors';

export default function Contact() {

  return (
    <div className={styles.container}>
        <TornBorder top={true} color={colors.greydark4}/>
        <div className={styles.content}>
            <h1 className={`${styles.title} ${rubikFont.className}`}>Contact Us</h1>
            <p>Got questions or want to book a spot? Fill out the contact form 
              and we’ll get back to you ASAP. You can also DM us 
              on Facebook or Instagram for quick replies, event updates, and 
              behind-the-scenes vibes. We’re just a message away—let’s connect!</p>
            <Socials size={40}/>
            <div className={styles.open_times}>
                <p>Opening Times...</p>
                <p>Mon - Thu: <span>11am - 11pm</span></p>
                <p>Fri - Sat: <span>11am - 2am</span></p>
                <p>Sun: <span>11am - 10pm</span></p>
            </div>
        </div>
        <div className={styles.form_container}>
          <ContactForm/>
        </div>
        <TornBorder top={false} color={colors.greydark4}/>
    </div>
  )
}