// for styling 
import styles from '../loginStyling/login.module.css';

//importing hooks
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

//importing AuthContext that has shared validation logic
import { AuthContext } from '../../AuthenticationContext';

//importing form login components
import Email from '../../sharedComponents/Email';
import Password from '../../sharedComponents/Password';
import ButtonLogin from './ButtonLogin';
import LoginWithGoogle from './LoginWithGoogle';
import LoginIcon from '@mui/icons-material/Login';


export default function Login() {
  const {validateEmail , validatePassword , login }= useContext(AuthContext);

  const navigate = useNavigate();
  //handling email validation 
  // take the email value fron the input by state
  const [email , setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password , setPassword] = useState('');
  const [isPasswordValid ,setIsPasswordValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setIsEmailValid(isValidEmail);
    setIsPasswordValid(isValidPassword);

    if (isValidEmail && isValidPassword) {
      console.log("Setting isAuthenticated to true");
      login(); // Set authentication state
      navigate("/dashboard");
    }
  }
  
  function handleClick(){
    navigate("/dashboard");
  }
  
  function handleClickToSign(){
    navigate("/signup");
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
          <ButtonLogin type="submit" onClick={handleClick}/>
        </div>
        <div className={styles.OR}>
          OR
        </div>
        <div className={styles.btnContainer}>
          <LoginWithGoogle />
        </div>
        <div className={styles.signUpOption}>
          Don&apos;t have an account? <strong className={styles.SginUp} onClick={handleClickToSign}>Sign up here</strong>
        </div>
        </form>
      </div>
    </div>
  )
}
