//styling
import { useContext } from 'react';
import styles from '../SignUpStyling/signup.module.css';

import UserName from "./UserName";
import { AuthContext } from '../../AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function SignUp() {
  const {validateEmail , validatePassword , setIsAuthenticated}= useContext(AuthContext);

  const navigate = useNavigate();
  //handling email validation 
  // take the email value fron the input by state
  const [email , setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password , setPassword] = useState('');
  const [isPasswordValid ,setIsPasswordValid] = useState(true);




  function handleSubmit(e){
    e.preventDefault();
    const isValidEmail =validateEmail(email);
    const isValidPassword = validatePassword(password);

    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isValidPassword);

    if(isValidEmail && isValidPassword ){
      setIsAuthenticated(true); //update global auth store
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.text}>
          <h1>SignUp</h1>
        </div>
        {/* <div className={styles.nameContainer}>
          <UserName />
        </div>
        <div className={styles.emailConatiner}>
          <Email email={email} setEmail={setEmail} isEmailValid={isEmailValid}/>
        </div>
        <div className={styles.passwordContainer}>
          <Password password={password} setPassword={setPassword} isPasswordValid={isPasswordValid}/>
        </div> */}
        {/* <div>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the terms & conditions</label>
        </div>
        <div className={styles.btnContainer}>
          <ButtonSignUp type="submit" onClick={handleClick}/>
        </div>
        <div className={styles.OR}>
          OR
        </div>
        <div className={styles.btnContainer}>
          <LoginWithGoogle />
        </div>
        <div className={styles.signUpOption}>
          Already have an account? <strong className={styles.SginUp} onClick={handleClickToSign}>Log in</strong>
        </div>  */}
        </form>
      </div>
    </div>
  )
}
