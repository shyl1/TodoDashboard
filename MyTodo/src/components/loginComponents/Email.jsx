import { useState } from "react";
import styles from '../loginStyling/emailStying.module.css';

export default function Email() {
    // take the email value fron the input by state
    const [email , setEmail] = useState('');
  return (
    <>
        <label htmlFor='email' className={styles.email}>E-mail</label>

        <input type="text" className={styles.emailInput} placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} id='email' required/>
    </>
  )
}
