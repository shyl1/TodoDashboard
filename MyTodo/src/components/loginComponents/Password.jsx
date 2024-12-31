import styles from '../loginStyling/passwordStyling.module.css';
import { useState } from 'react';

export default function Password({password, setPassword ,isPasswordValid}) {
  return (
    <>
    <label htmlFor="password" className={styles.password}>Password</label>

    <input type="password" placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className={`${styles.passwordInput} ${!isPasswordValid ? styles.invaildInput : ''}`}/>

    {!isPasswordValid && (
      <span className={styles.errorMsg}>Please enter a valid email</span>
    )}
    </>
  )
}
