import DownloadSVG from '@/components/assets/icons/download_IconSVG';
import ViewIcon from '@/public/assets/icons/eye-regular.svg';
import styles from './page.module.css';
import { rubikFont } from '@/lib/fonts';
import TornBorder from '@/components/assets/patterns/torn_border';
import { colors } from '@/lib/colors';

export default function MenuPage() {

  //TODO: Remove the tornborders at desktop size

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={`${styles.menu_container} ${styles.food}`}>
          <div className={styles.menu_content}>
            <h2 className={`${styles.menu_title} ${rubikFont.className}`}>Food</h2>
            <p className={styles.menu_description}>
              Check out <b>Lone Star's</b> bold and smokey flavours, 
              comfort food with a southern kick!
            </p>
            <div className={styles.icon_container}>
              <div className={styles.icon_content}>
                <DownloadSVG className={styles.download_icon}/>
                <p>Download</p>
              </div>
              <div className={styles.icon_content}>
                <ViewIcon className={styles.view_icon}/>
                <p>View</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.menu_container} ${styles.drink}`}>
          <TornBorder top={true} color={colors.greydark2}/>
          <div className={styles.menu_content}>
            <h2 className={`${styles.menu_title} ${rubikFont.className}`}>Cocktails</h2>
            <p className={styles.menu_description}>
              Fast, Fresh, and made to party! Check out <b>OTD's </b>
              cocktails on tap and shooters that pack a punch!
            </p>
            <div className={styles.icon_container}>
              <div className={styles.icon_content}>
                <DownloadSVG className={styles.download_icon}/>
                <p>Download</p>
              </div>
              <div className={styles.icon_content}>
                <ViewIcon className={styles.view_icon}/>
                <p>View</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.menu_container} ${styles.beer}`}>
          <TornBorder top={true} color={colors.greydark1}/>
          <div className={styles.menu_content}>
            <h2 className={`${styles.menu_title} ${rubikFont.className}`}>Beers</h2>
            <p className={styles.menu_description}>
              Something for every beer lover! Discover our 
              selection of <b>Craft Beers </b> from top local brewers.
            </p>
            <div className={styles.icon_container}>
              <div className={styles.icon_content}>
                <DownloadSVG className={styles.download_icon}/>
                <p>Download</p>
              </div>
              <div className={styles.icon_content}>
                <ViewIcon className={styles.view_icon}/>
                <p>View</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
    
  )
}
