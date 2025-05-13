import { useEffect } from 'react';
import styles from './modal.module.css';



export default function Modal({ isOpen, onClose, children }) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
