'use client'

import { useState } from 'react';

import SocialsLogin from './socials_login';

import styles from '@/components/styles/form.module.css';
import EyeOpen from '@/public/assets/icons/eye-regular.svg';
import EyeClosed from '@/public/assets/icons/eye-slash-regular.svg';

    // TODO: Hookup to backend
    //       login with facebook and google

export default function LoginForm({ onSwitchView }) {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
        // TODO: extend for keep checked-in
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValues);
    }

    function handleChange(identifier, value) {
        setInputValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }));
    } 


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.control}>
            <label htmlFor="email">Email:</label>
            <input
                name='email'
                type='email'
                onChange={(event) => handleChange('email', event.target.value)}
                value={inputValues.email}/>
        </div>
        <div className={`${styles.control} ${styles.control_icon}`}>
            <label htmlFor='password'>Password:</label>
            <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                onChange={(event) => handleChange('password', event.target.value)}
                value={inputValues.password}/>
            <button 
                className={styles.btn_icon} 
                onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <EyeOpen/> : <EyeClosed/>}
            </button>
        </div>
        <button 
            type='button' 
            className={styles.btn_flat}
        
            onClick={ () => onSwitchView('forgot')}>
                Forgot password?
        </button>
        <SocialsLogin formName={"Login"}/>
        
        <button 
            type='button' 
            className={styles.btn_flat}
            onClick={() => onSwitchView('signup')}>
                Don't have an account?
        </button>


        <div className={styles.form_actions}>
            <button type='submit' className={styles.btn}>Login</button>
        </div>
    </form>
  )
}
