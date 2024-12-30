// for styling 

import styles from '../loginStyling/login.module.css';
import Email from './Email';
import Password from './Password';
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
          <button type='submit'>login</button>
        </form>
      </div>
    </div>
  )
}
