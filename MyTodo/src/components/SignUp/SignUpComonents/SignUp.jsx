// //styling
// import { useContext } from 'react';
// import styles from '../SignUpStyling/signup.module.css';


// //import { AuthContext } from '../../AuthenticationContext';
// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";

// //improting components
// import UserName from "./UserName";
// import Email from '../../sharedComponents/Email';
// import Password from '../../sharedComponents/Password';
// import ButtonSignUp from './ButtonSignUp';
// import SignUpWithGoogle from './SignUpWithGoogle.jsx';
// import Checkbox from './Checkbox.jsx';


// export default function SignUp() {
//   //const {validateEmail , validatePassword , setIsAuthenticated}= useContext(AuthContext);

//   const navigate = useNavigate();
//   //handling email validation 
//   // take the email value fron the input by state
//   const [email , setEmail] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(true);

//   const [password , setPassword] = useState('');
//   const [isPasswordValid ,setIsPasswordValid] = useState(true);

//   const [username , setUserName] =useState('');
//   //checkbox
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState('');

//   // function handleSubmit(e){
//   //   e.preventDefault();
//   //   const isValidEmail =validateEmail(email);
//   //   const isValidPassword = validatePassword(password);

//   //   setIsEmailValid(isEmailValid);
//   //   setIsPasswordValid(isValidPassword);
//   //   if(!isChecked){
//   //     setError('Please check the checkbox to proceed.'); // Set error message
//   //     console.log('Form submission prevented: Checkbox is unchecked'); // Debuggings
//   //     return; // Stop form submission
//   //   } else {
//   //     setError(''); // Clear error message
//   //     console.log('Form submitted!');
//   //   }

//   //   if(isValidEmail && isValidPassword){
//   //     setIsAuthenticated(true); //update global auth store
//   //     navigate("/dashboard");
//   //   }
//   // };

//   //validating email 
// function validateEmail(email){
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function validatePassword(password){
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   return passwordRegex.test(password);
// }
  

//   function handleSubmit(e){
//     e.preventDefault();
//     const isValidEmail =validateEmail(email);
//     const isValidPassword = validatePassword(password);
  
//     if(isValidEmail && isValidPassword ){
//       setIsEmailValid(true);
//       setIsPasswordValid(true);
//     } else {
//       setIsEmailValid(false);
//       setIsPasswordValid(false);
//       setError('error');
//     }
//   }
  

//   function handleClick(){
//     navigate("/dashboard");
//   }
//   function handleClickToLogin(){
//     navigate('/');

//   }

//   return (
//     <div className={styles.Container}>
//       <div className={styles.LoginContainer}>
//         <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.text}>
//           <h1>SignUp</h1>
//         </div>
//         <div className={styles.nameContainer}>
//           <UserName username={username} setUserName={setUserName}/>
//         </div>
//         <div className={styles.emailConatiner}>
//           <Email email={email} setEmail={setEmail} isEmailValid={isEmailValid}/>
//         </div>
//         <div className={styles.passwordContainer}>
//           <Password password={password} setPassword={setPassword} isPasswordValid={isPasswordValid}/>
//         </div>
//         <div className={styles.checkContainer}>
//           <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} error={error} />
//         </div>
//         <div className={styles.btnContainer}>
//           <ButtonSignUp type="submit" onClick={handleClick}/>
//         </div>
//         <div className={styles.OR}>
//           OR
//         </div>
//         <div className={styles.btnContainer}>
//           <SignUpWithGoogle/>
//         </div>
//         <div className={styles.loginOption}>
//           Already have an account? <strong className={styles.login} onClick={handleClickToLogin}>Log in</strong>
//         </div>
//         </form>
//       </div>
//     </div>
//   )
// }
