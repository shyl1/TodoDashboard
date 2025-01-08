import SideBar from "./SideBar";
import styles from '../dashboardStyling/dashboard.module.css';
import TodoSide from "./TodoSide";

export default function DashBoard() {

  return (
    <>
    <div className={styles.body}>
      <SideBar />
      <TodoSide />
    </div>
      
    </>
  )
}
