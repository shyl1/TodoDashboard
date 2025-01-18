import styles from './todoSide.module.css';
import { FcTodoList } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import LeftPart from '../LeftPart/LeftPart.jsx';
import RightPart from '../RightPart/RightPart.jsx';
import ToStart from '../Dashboard/tasks/ToStart.jsx';
import InProgress from '../Dashboard/tasks/InProgress.jsx';
import Completed from '../Dashboard/tasks/Completed.jsx';

export default function TodoSide() {
  return (
    <>
      <div className={styles.todoContainer}>
        <div className={styles.Overview}>
          <FcTodoList className={styles.iconTodo}/> 
          <MdKeyboardArrowRight className={styles.iconMargin}/>
          <div>
            <h3>Dashboard</h3>
          </div>
          <MdKeyboardArrowRight className={styles.iconMargin} />
          <div className={styles.textOverview}>
            <h3>Overview</h3>
          </div>
        </div>
        <div className={styles.parts}>
          <div>
            <LeftPart />
          </div>
          <div>
            <RightPart/>
          </div>
        </div>

        <div className={styles.tasks}>
          <ToStart />
          <InProgress />
          <Completed />
        </div>
      </div>
    </>
  )
}
