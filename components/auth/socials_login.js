'use client'

import { useEffect, useState } from 'react';
import { warehouseAuth } from '@/lib/firebaseClient';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthContext } from '@/hooks/useAuthContext';


import styles from './socials_login.module.css';
import GoogleIcon from '@/components/assets/icons/googleSVG';
import FBookIcon from '@/components/assets/icons/facebookSVG';

export default function SocialsLogin() {
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);


  const signInWithGoogle = async () => {

    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(warehouseAuth, googleProvider);
      console.log('Google user:', res.user);
      dispatch({ type: 'LOGIN', payload: res.user })


      return res.user;
    } catch (error) {
      if (!isCancelled){
        console.error('Google sign-in error:', error.message);
        throw error;
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, [])

  return (
    <div className={styles.container}>
      <button type='button' onClick={signInWithGoogle}>
        <GoogleIcon className={styles.icon} width={30} height={30}>
          <linearGradient id="Gradient1" x2="0" y2="1">
            <stop className={styles.stop1} offset="0%" />
            <stop className={styles.stop2} offset="50%" />
            <stop className={styles.stop3} offset="100%" />
          </linearGradient>
        </GoogleIcon>
        <p> Continue with Google</p>
      </button>
      {/* <button 
        className={styles.facebook} 
        onClick={() => handleSocialLogin("facebook")}>
        <FBookIcon className={styles.icon} width={30} height={30}>
          <linearGradient id="Gradient1" x2="0" y2="1">
              <stop className={styles.stop1} offset="0%" />
              <stop className={styles.stop2} offset="50%" />
              <stop className={styles.stop3} offset="100%" />
          </linearGradient>
        </FBookIcon>
        <p>Continue with Facebook</p>
      </button> */}
      
    </div>
  )
}
