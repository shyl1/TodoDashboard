import SideBar from "./SideBar";
import styles from '../dashboardStyling/dashboard.module.css';

export default function DashBoard() {

  return (
    <>
    <div className={styles.body}>
      <SideBar />
    </div>
      
    </>
  )
}
