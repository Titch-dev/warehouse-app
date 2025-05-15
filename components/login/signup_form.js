import React, { useState } from 'react'

import SocialsLogin from './socials_login';

import EyeOpen from "@/public/assets/icons/eye-regular.svg";
import EyeClosed from "@/public/assets/icons/eye-slash-regular.svg";
import styles from "@/components/styles/form.module.css";

export default function SignupForm({ onSwitchView }) {
    const [inputValues, setInputValues] = useState({
        fName: '',
        sName: '',
        email: '',
        password: '',
        passswordConfirm: ''
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
        <div className={styles.field_row}>
            <div className={styles.control}>
                <label htmlFor="f_name">First Name:</label>
                <input
                    name='f_name'
                    type='text'
                    onChange={(event) => handleChange('fName', event.target.value)}
                    value={inputValues.fName}/>
            </div>
            <div className={styles.control}>
                <label htmlFor="s_name">Surame:</label>
                <input
                    name='s_name'
                    type='text'
                    onChange={(event) => handleChange('sName', event.target.value)}
                    value={inputValues.sName}/>
            </div>
        </div>
        <div className={`${styles.control} ${styles.align}`}>
            <label htmlFor="email">Email:</label>
            <input
                name='email'
                type='email'
                onChange={(event) => handleChange('email', event.target.value)}
                value={inputValues.email}/>
        </div>
        <div className={styles.field_row}>
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
            <div className={`${styles.control} ${styles.control_icon}`}>
                <label htmlFor='password_confirm'>Re-type Password:</label>
                <input
                    name='password_confirm'
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => handleChange('passwordConfirm', event.target.value)}
                    value={inputValues.password}/>
                <button 
                    className={styles.btn_icon} 
                    onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <EyeOpen/> : <EyeClosed/>}
                </button>
            </div>
        </div>
        <SocialsLogin formName={"Signup"}/>
        

        <div className={styles.form_actions}>
            <button 
                type='button' 
                onClick={ () => onSwitchView('login') }
                className={styles.btn_flat}
                style={{'margin-right': '60px'}}>
                    Return to Login...
            </button>
            <button type='submit' className={styles.btn}>Signup</button>
        </div>
    </form>
  )
}
