import SideBar from "../SideBar/SideBar";
import styles from '../dashboardStyling/dashboard.module.css';
import TodoSide from "../TodoSide/TodoSide";
import { TaskProvider } from "../../TaskContext";

export default function DashBoard() {

  return (
    <>
    <div className={styles.body}>
      <SideBar />
      <TaskProvider>
      <TodoSide />
      </TaskProvider>
    </div>
      
    </>
  )
}
