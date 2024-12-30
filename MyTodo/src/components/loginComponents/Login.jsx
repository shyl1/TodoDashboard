// for styling 
import { useState } from 'react';
import styles from '../loginStyling/login.module.css';
import Email from './Email';
//import {useNavigate} from 'react-router-dom';
export default function Login() {


  const [password , setPassword] = useState('');


  // handled
  function handleSubmit(e){
    e.preventDefault();
  }




  //const navigate = useNavigate();

  

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          
        <div className={styles.emailConatiner}>
          <Email />
        </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="password" className={styles.password}>Password</label>
            <input type="password" placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.passwordInput}/>
          </div>
          <button type='submit'>login</button>
        </form>
      </div>
    </div>
  )
}
