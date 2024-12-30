// for styling 
import { useState } from 'react';
import styles from '../loginStyling/login.module.css';
//import {useNavigate} from 'react-router-dom';
export default function Login() {

  // take the email value fron the input by state
  const [email , setEmail] = useState('');
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
            <label htmlFor='email' className={styles.email}>E-mail</label>
            <input type="text" className={styles.emailInput} placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} id='email' required/>
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
