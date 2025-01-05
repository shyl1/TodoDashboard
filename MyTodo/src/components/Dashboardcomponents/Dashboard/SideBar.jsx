import { FaBorderAll } from "react-icons/fa";
import styles from '../dashboardStyling/sideBar.module.css';

export default function SideBar() {
  return (
    <>
    <div className={styles.container}>
      <div className="text-container">
        <h1>TODO</h1>
      </div>
      <div className="pages">
      <h1><FaBorderAll />Dashboard</h1>  
      </div>
    </div>
    </>
  )
}
