'use client'

import { useState } from "react";

import styles from '@/components/styles/form.module.css';

//       backend - forgot password link

export default function ForgotPasswordForm({onSwitchView}) {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
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
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />
        </div>

        <div className={styles.form_actions}>
            <button 
                type='button' 
                onClick={ () => onSwitchView('login') }
                className={styles.btn_flat}
                style={{'margin-right': '60px'}}>
                    Return to Login...
            </button>
            <button type='submit' className={styles.btn}>Reset</button>
        </div>
    </form>
  )
}
