import styles from '../dashboardStyling/rightpart.module.css';
import { CiCirclePlus } from "react-icons/ci";


export default function RightPart({setShowForm}) {

 // function to handle clicking on the newtask button
    function handleClick(e){
      e.preventDefault();
      setShowForm(true); // show the form when the button is clicked
    }
  
  return (
    <>
    <div className={styles.topContainer}>
      <button type='submit' className={styles.btn} onClick={handleClick}><CiCirclePlus />New Task</button>
      <div className={styles.profile}></div>
    </div>
    <div className={styles.bottomContainer}>
    <div className={styles.dateTo}>
      <input type="date" className={styles.to}/>
    </div>
    <div className={styles.dateFrom}>
      <input type="date" className={styles.from}/>
    </div>
    </div>

    </>
  )
}
