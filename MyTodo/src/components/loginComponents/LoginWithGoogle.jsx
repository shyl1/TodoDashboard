import GoogleIcon from '@mui/icons-material/Google';
import styles from '../loginStyling/loginwithgoogle.module.css';
export default function LoginWithGoogle() {
  return (
    <>
      <button className={styles.btn}><GoogleIcon className={styles.googleIcon} />log in with Google</button>
    </>
  )
}
