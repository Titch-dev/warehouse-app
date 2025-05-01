import styles from './chevron.module.css';

const directionToRotation = {
    right: '0deg',
    left: '180deg',
    up: '-90deg',
    down: '90deg',
};

export default function Chevron({ direction = 'right' }) {
  const rotation = directionToRotation[direction] || '0deg';

  return (
    <>
        <svg 
          className={styles.chevron}
          style={{ '--rotation': rotation}} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 320 512">
            <defs>
                <linearGradient id="Gradient1" x2="0" y2="1">
                    <stop className={styles.stop1} offset="0%" />
                    <stop className={styles.stop2} offset="50%" />
                    <stop className={styles.stop3} offset="100%" />
                </linearGradient>
            </defs>
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>
    </>
  )
}
