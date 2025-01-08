import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { FaCircle } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";

export default function ToStart() {
  return (
    <>
      <div className={styles.toStartContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>To Start</h3>
        <div className={styles.innerContainer}>
          <div className={styles.card}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Title of the task</h2>
              <div className={styles.iconContainer}>
                <RiEditLine className={styles.editingIcon}/>
                {/* <div className={styles.edit}>
                  <button className={styles.btn}>Edit</button>
                  <button className={styles.btn}>Delete</button>
                </div> */}
              </div>
            </div>
            <div className={styles.content}>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Class facilisis nulla felis sed; senectus sodales nam. Eu tortor sem vitae fermentum taciti ante lacus.</p>
            </div>
          <div className={styles.taskDate}>
            17/07/2025
          </div>
          
          </div>
        </div>
      </div>
    </>
  )
}
