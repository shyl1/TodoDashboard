// for styling 
import styles from '../loginStyling/login.module.css';

//importing form login components
import Email from './Email';
import Password from './Password';
import ButtonLogin from './ButtonLogin';

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
        <div className={styles.emailConatiner}>
          <Email />
        </div>
        <div className={styles.passwordContainer}>
          <Password />
        </div>
        <div className={styles.btnContainer}>
          <ButtonLogin />
        </div>
          
        </form>
      </div>
    </div>
  )
}
