'use client'

import { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';

import SocialsLogin from '../auth/socials_login';

import styles from './form.module.css';
import EyeOpen from '@/public/assets/icons/eye-regular.svg';
import EyeClosed from '@/public/assets/icons/eye-slash-regular.svg';

    // TODO: Hookup to backend
    //       login with facebook

export default function LoginForm({ onSwitchView }) {
    const { login, error, isPending } = useLogin();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const [showPassword, setShowPassword] = useState(false);

    const emailIsInvalid = didEdit.email && !inputValues.email.includes('@');
    const passwordIsEmpty = didEdit.password && inputValues.password === '';

    const handleSubmit = (event) => {
        event.preventDefault();
        login(inputValues.email, inputValues.password);
        
    }

    function handleChange(identifier, value) {
        setInputValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }));

        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false
        }))
    }

    function handleBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true
        }))
    }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field_row}>
            <div className={styles.control}>
                <label htmlFor="email">Email:</label>
                <input
                    name='email'
                    type='email'
                    onBlur={() => handleBlur('email')}
                    onChange={(event) => handleChange('email', event.target.value)}
                    value={inputValues.email}/>
                <div className={styles.control_error}>
                    {emailIsInvalid && <p>Please enter a valid email address</p>}
                </div>
            </div>
            <div className={`${styles.control} ${styles.control_icon}`}>
                <label htmlFor='password'>Password:</label>
                <input
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    onBlur={() => handleBlur('password')}
                    onChange={(event) => handleChange('password', event.target.value)}
                    value={inputValues.password}/>
                <button
                    type='button'
                    className={styles.btn_icon} 
                    onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <EyeOpen/> : <EyeClosed/>}
                </button>
                <div className={styles.control_error}>
                    {passwordIsEmpty && <p>Please enter your password</p> }
                </div>
            </div>
        </div>
        
        <button 
            type='button' 
            className={styles.btn_flat}
        
            onClick={ () => onSwitchView('forgot')}>
                Forgot password?
        </button>
        <SocialsLogin />
        
        <button 
            type='button' 
            className={styles.btn_flat}
            onClick={() => onSwitchView('signup')}>
                Don't have an account?
        </button>


        <div className={styles.form_actions}>
            {!isPending && <button type='submit' className={styles.btn}>Login</button>}
            {isPending && <button className={styles.btn} disabled>Loading</button>}
            
        </div>
        {error && <p>{error}</p>}
    </form>
  )
}
