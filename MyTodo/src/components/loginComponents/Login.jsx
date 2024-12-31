// for styling 
import styles from '../loginStyling/login.module.css';
import { useState } from "react";

//importing form login components
import Email from './Email';
import Password from './Password';
import ButtonLogin from './ButtonLogin';
import LoginWithGoogle from './LoginWithGoogle';
import LoginIcon from '@mui/icons-material/Login';


//import {useNavigate} from 'react-router-dom';
export default function Login() {
    //const navigate = useNavigate();
 // handled
  function handleSubmit(e){
    e.preventDefault();
    const isValidEmail =validateEmail(email);
    const isValidPassword = validatePassword(password);

    if(isValidEmail && isValidPassword ){
      setIsEmailValid(true);
      setIsPasswordValid(true);
    } else {
      setIsEmailValid(false);
      setIsPasswordValid(false);
    }
  }
  //handling email validation 
  // take the email value fron the input by state
  const [email , setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password , setPassword] = useState('');
  const [isPasswordValid ,setIsPasswordValid] = useState(true);
  

  //validating email 
  function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.text}>
          <LoginIcon className={styles.loginIcon} sx={{fontSize:50}}/>
          <h1>Login</h1>
        </div>
        <div className={styles.emailConatiner}>
          <Email email={email} setEmail={setEmail} isEmailValid={isEmailValid}/>
        </div>
        <div className={styles.passwordContainer}>
          <Password password={password} setPassword={setPassword} isPasswordValid={isPasswordValid}/>
        </div>
        <div className={styles.btnContainer}>
          <ButtonLogin />
        </div>
        <div className={styles.OR}>
          OR
        </div>
        <div className={styles.btnContainer}>
          <LoginWithGoogle />
        </div>
        <div className={styles.signUpOption}>
          Don&apos;t have an account? <strong className={styles.SginUp}>Sign up here</strong>
        </div>
        </form>
      </div>
    </div>
  )
}
