// import Image from 'next/image';

import mapDetails from '@/.env/gmap.js';
import styles from './static_map.module.css';

export default function StaticMap() {
    const lat = mapDetails['lat'];
    const lng = mapDetails['lng'];
    const apiKey = mapDetails['APIKEY'];

    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=16&size=600x375&maptype=roadmap&markers=color:red%7Clabel:W%7C${lat},${lng}&key=${apiKey}`

  return (
    <div className={styles.map_window}>
        <img src={mapUrl} className={styles.map}></img>
    </div>
  )
}
