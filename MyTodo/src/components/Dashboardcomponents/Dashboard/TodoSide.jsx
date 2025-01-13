import styles from '../dashboardStyling/todoSide.module.css';
import { FcTodoList } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import ToStart from './tasks/ToStart';
import InProgress from './tasks/InProgress';
import Completed from './tasks/Completed';
import { useState } from 'react';
import ShowForm from './Card/ShowForm';

export default function TodoSide() {
  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



 

 

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
            <RightPart setShowForm={setShowForm}/>
          </div>
        </div>

        <div className={styles.tasks}>
          {/* pass tasks , showForm and addTask to the ToStart component*/}
          <ToStart 
          key="toStart" 
          tasks={tasks} 
          showForm={showForm} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          setTitle={setTitle}
          setDescription={setDescription}
          title={title}
          description={description}
          />

          <InProgress
          key="inProgress"
          tasks={tasks} 
          showForm={showForm} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          setTitle={setTitle}
          setDescription={setDescription}
          title={title}
          description={description}
          />

          <Completed 
          key="completed"
          tasks={tasks} 
          showForm={showForm} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          setTitle={setTitle}
          setDescription={setDescription}
          title={title}
          description={description}
          />

          

        </div>
      </div>

    </>
  )
}
