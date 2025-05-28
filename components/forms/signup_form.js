import React, { useState } from 'react'

import SocialsLogin from '../auth/socials_login';

import EyeOpen from "@/public/assets/icons/eye-regular.svg";
import EyeClosed from "@/public/assets/icons/eye-slash-regular.svg";
import styles from "./form.module.css";

export default function SignupForm({ onSwitchView }) {
    const [inputValues, setInputValues] = useState({
        fName: '',
        sName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const [didEdit, setDidEdit] = useState({
        fName: false,
        sName: false,
        email: false,
        password: false,
        passwordConfirm: false
    })

    const [showPassword, setShowPassword] = useState(false);

    const fNameIsInvalid = didEdit.fName && inputValues.fName === '';
    const sNameIsInvalid = didEdit.sName && inputValues.sName === '';
    const emailIsInvalid = didEdit.email && !inputValues.email.includes('@');
    const passwordMatchInvalid = didEdit.passwordConfirm && inputValues.password !== inputValues.passwordConfirm;

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
                <label htmlFor="f_name">First Name:</label>
                <input
                    name='f_name'
                    type='text'
                    onBlur={() => handleBlur('fName')}
                    onChange={(event) => handleChange('fName', event.target.value)}
                    value={inputValues.fName}/>
                <div className={styles.control_error}>
                    {fNameIsInvalid && <p>Please enter your first name</p>}
                </div>
            </div>
            <div className={styles.control}>
                <label htmlFor="s_name">Surame:</label>
                <input
                    name='s_name'
                    type='text'
                    onBlur={() => handleBlur('sName')}
                    onChange={(event) => handleChange('sName', event.target.value)}
                    value={inputValues.sName}/>
                <div className={styles.control_error}>
                    {sNameIsInvalid && <p>Please enter your surname</p>}
                </div>
            </div>
        </div>
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
                    onBlur={() => handleBlur('passwordConfirm')}
                    onChange={(event) => handleChange('passwordConfirm', event.target.value)}
                    value={inputValues.passwordConfirm}/>
                <button 
                    className={styles.btn_icon} 
                    onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <EyeOpen/> : <EyeClosed/>}
                </button>
                <div className={styles.control_error}>
                    {passwordMatchInvalid && <p>Your password doesn't match</p>}
                </div>
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
