import styles from '../dashboardStyling/todoSide.module.css';
import { FcTodoList } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import ToStart from './tasks/ToStart';
import InProgress from './tasks/InProgress';
import Completed from './tasks/Completed';

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
            {/* <RightPart setShowForm={setShowForm}/> */}
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


// key="toStart" 
// tasks={tasks} 
// showForm={showForm} 
// addOrUpdateTask={addOrUpdateTask} 
// setShowForm={setShowForm} 
// updateTaskStatus={updateTaskStatus}
// setTasks={setTasks}
// editingTask={editingTask}
// setEditingTask={setEditingTask}
// setTitle={setTitle}
// setDescription={setDescription}
// title={title}
// description={description}