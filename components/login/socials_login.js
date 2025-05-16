
import styles from './socials_login.module.css';
import GoogleIcon from '@/components/assets/icons/googleSVG';
import FBookIcon from '@/components/assets/icons/facebookSVG';

export default function SocialsLogin({ formName }) {

  const handleSocialLogin = (providerName) => {
    
    const provider = providerName === "google" ? "google" : "facebook";
    console.log(provider)
  }

  return (
    <div className={styles.container}>
      <button onClick={() => handleSocialLogin("google")}>
        <GoogleIcon className={styles.icon} width={30} height={30}>
          <linearGradient id="Gradient1" x2="0" y2="1">
            <stop className={styles.stop1} offset="0%" />
            <stop className={styles.stop2} offset="50%" />
            <stop className={styles.stop3} offset="100%" />
          </linearGradient>
        </GoogleIcon>
        <p>{formName} with Google</p>
      </button>
      <button 
        className={styles.facebook} 
        onClick={() => handleSocialLogin("facebook")}>
        <FBookIcon className={styles.icon} width={30} height={30}>
          <linearGradient id="Gradient1" x2="0" y2="1">
              <stop className={styles.stop1} offset="0%" />
              <stop className={styles.stop2} offset="50%" />
              <stop className={styles.stop3} offset="100%" />
          </linearGradient>
        </FBookIcon>
        <p>{formName} with Facebook</p>
      </button>
      
    </div>
  )
}
