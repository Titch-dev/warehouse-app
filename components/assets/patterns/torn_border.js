import TornBorderMobSVG from "./torn_border_mob_SVG";
import TornBorderSVG from "./torn_border_SVG";
import styles from "./torn_border.module.css";

export default function TornBorder({top, color}) {

    
  return (
    <>
        <TornBorderMobSVG 
            className={
                `${styles.border} 
                ${styles.mobile} 
                ${top===false ? styles.bottom : styles.top}`
            }
            color={color}
        />
        <TornBorderSVG 
            className={
                `${styles.border}
                 ${styles.desktop}
                 ${top===false ? styles.bottom : styles.top}`
            }
            color={color}
        />
    </>
  )
}
