
import ContactForm from '@/components/contact/contact_form';
import TornBorderMobSVG from '@/components/assets/patterns/torn_border_mob_SVG';

import styles from './page.module.css';
import { rubikFont } from '@/lib/fonts';
import { colors } from '@/lib/colors';

export default function ContactPage() {
  

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${rubikFont.className}`}>Contact Us</h1>
      <section className={styles.contact_form}>
        <TornBorderMobSVG className={styles.top} color={colors.greydark4}/>
          <ContactForm />
        <TornBorderMobSVG color={colors.greydark4} className={styles.bottom}/>
      </section>
    </div>
  )
}
