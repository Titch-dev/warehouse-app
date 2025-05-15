'use client'

import { useState } from 'react';

import LoginForm from '@/components/login/login_form';
import SignupForm from '@/components/login/signup_form';
import ForgotPasswordForm from '@/components/login/forgot_password_form';

import styles from './page.module.css';
import { rubikFont } from '@/lib/fonts';

export default function AuthPage() {
  const [view, setView] = useState("login");

  const renderView = () => {
    switch (view) {
      case "signup":
        return <SignupForm onSwitchView={setView}/>
      case "forgot":
        return <ForgotPasswordForm onSwitchView={setView}/>
      default:
        return <LoginForm onSwitchView={setView}/>
    }
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <h1 className={`${rubikFont.className} ${styles.title}`}>{view}</h1>
          {renderView()}
        </div>
      </div>
    </div>
  )
}
