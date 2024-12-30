// for styling 
import styles from '../loginStyling/login.module.css';

//importing form login components
import Email from './Email';
import Password from './Password';
import ButtonLogin from './ButtonLogin';
import LoginWithGoogle from './LoginWithGoogle';
import LoginIcon from '@mui/icons-material/Login';


//import {useNavigate} from 'react-router-dom';
export default function Login() {
 // handled
  function handleSubmit(e){
    e.preventDefault();
  }

  //const navigate = useNavigate();

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.text}>
          <LoginIcon className={styles.loginIcon} sx={{fontSize:50}}/>
          <h1>Login</h1>
        </div>
        <div className={styles.emailConatiner}>
          <Email />
        </div>
        <div className={styles.passwordContainer}>
          <Password />
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
