import styles from '../loginStyling/passwordStyling.module.css';
import { useState } from 'react';

export default function Password() {

  const [password , setPassword] = useState('');
  return (
    <>
    <label htmlFor="password" className={styles.password}>Password</label>

    <input type="password" placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.passwordInput}/>
    </>
  )
}
