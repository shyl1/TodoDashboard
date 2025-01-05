import { FaBorderAll } from "react-icons/fa";
import styles from '../dashboardStyling/sideBar.module.css';

export default function SideBar() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>TODO</h1>
      </div>
      <div className={styles.pages}>
      <FaBorderAll size={30}/><h1>Dashboard</h1>  
      </div>
    </div>
    </>
  )
}
