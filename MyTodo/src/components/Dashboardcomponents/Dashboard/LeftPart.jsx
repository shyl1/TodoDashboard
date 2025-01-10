import { CiSearch } from "react-icons/ci";
import styles from'../dashboardStyling/leftpart.module.css';

export default function LeftPart() {
  
  return (
    <>
      <h1 className={styles.text}>My Todo</h1>
      <div className={styles.seacrh}>
      <input type="text" placeholder="search" className={styles.seacrhBox}/>
      <CiSearch className={styles.seacrhIcon}/>
      </div>
      
    </>
  )
}
