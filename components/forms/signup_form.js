import { useState } from 'react';
import { useSignup } from '@/hooks/useSignup';

import SocialsLogin from '../auth/socials_login';

import EyeOpen from "@/public/assets/icons/eye-regular.svg";
import EyeClosed from "@/public/assets/icons/eye-slash-regular.svg";
import styles from "./form.module.css";

export default function SignupForm({ onSwitchView }) {
    const { signup, isPending, error } = useSignup();
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
    const [didEdit, setDidEdit] = useState({
        name: false,
        email: false,
        password: false,
        passwordConfirm: false
    })
    const [showPassword, setShowPassword] = useState(false);
    const nameIsInvalid = didEdit.name && inputValues.name === '';
    const emailIsInvalid = didEdit.email && !inputValues.email.includes('@');
    const passwordMatchInvalid = didEdit.passwordConfirm && inputValues.password !== inputValues.passwordConfirm;
    const passwordTooShort = didEdit.password && inputValues.password.length < 6;
    const passwordMissingNumber = didEdit.password && !/\d/.test(inputValues.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setDidEdit({
            name: true,
            email: true,
            password: true,
            passwordConfirm: true
        });

        const nameIsEmpty = inputValues.name.trim() === '';
        const emailInvalid = !inputValues.email.includes('@');
        const passwordTooShort = inputValues.password.length < 6;
        const passwordMissingNumber = !/\d/.test(inputValues.password);
        const passwordsDoNotMatch = inputValues.password !== inputValues.passwordConfirm;

    if (
        nameIsEmpty ||
        emailInvalid ||
        passwordTooShort ||
        passwordMissingNumber ||
        passwordsDoNotMatch
        ) {
            return; // Stop form submission if any validation fails
        }
        
        signup(inputValues.email, inputValues.password, inputValues.name);
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
                <label htmlFor="f_name">Name:</label>
                <input
                    name='name'
                    type='text'
                    onBlur={() => handleBlur('name')}
                    onChange={(event) => handleChange('name', event.target.value)}
                    value={inputValues.name}/>
                <div className={styles.control_error}>
                    {nameIsInvalid && <p>Please enter your name</p>}
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
                    type='button'
                    className={styles.btn_icon} 
                    onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <EyeOpen/> : <EyeClosed/>}
                </button>
                <div className={styles.control_error}>
                    {passwordTooShort && <p>Password must be at least 6 characters.</p>}
                    {passwordMissingNumber && <p>Password must include at least one number.</p>}
                </div>
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
                    type='button'
                    className={styles.btn_icon} 
                    onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? <EyeOpen/> : <EyeClosed/>}
                </button>
                <div className={styles.control_error}>
                    {passwordMatchInvalid && <p>Your password doesn't match</p>}
                </div>
            </div>
        </div>
        
        <SocialsLogin />
        

        <div className={styles.form_actions}>
            <button 
                type='button' 
                onClick={ () => onSwitchView('login') }
                className={styles.btn_flat}
                style={{marginRight: '60px'}}>
                    Return to Login...
            </button>
            {!isPending && <button type='submit' className={styles.btn}>Signup</button>}
            {isPending && <button type='submit' className={styles.btn} disabled>Loading</button>}
            {error && <p>{error}</p>}
        </div>
    </form>
  )
}
