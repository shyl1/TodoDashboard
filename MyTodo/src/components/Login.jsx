// for styling 
import styles from './loginStyling/login.module.css';
//import {useNavigate} from 'react-router-dom';
export default function Login() {

  //const navigate = useNavigate();

  

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <form>
          <div>
            <label>E-mail</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password"/>
          </div>
          <button type='submit'>login</button>
        </form>
      </div>
    </div>
  )
}
