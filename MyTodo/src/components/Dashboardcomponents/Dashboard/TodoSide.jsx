import styles from '../dashboardStyling/todoSide.module.css';
import { FcTodoList } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import ToStart from './tasks/ToStart';
import InProgress from './tasks/InProgress';
import Completed from './tasks/Completed';
import { useState } from 'react';

export default function TodoSide() {
   //set a list of tasks
  const [tasks, setTasks] = useState([]);
   // set up a form for adding new tasks
  const [showForm , setShowForm] = useState(false);



  // add new task or update
  function addOrUpdateTask(taskId, title , description){
    //create newTask object that contains the info of the task
    if(title && description){
      if(taskId){
        //update existing  task
        setTasks((preTasks)=> preTasks.map((task)=> task.id === taskId ? {...task , title , description} : task));
      } else {
        //add new task
        const newTask = {
          id: Date.now() , 
          title,
          description,
          status:"To Start", // default status
          createdAt: new Date().toISOString(), //store the creation Date
        };
        //append the  new task to tasks list
        setTasks([...tasks , newTask]);
      }
      setShowForm(false); // hide the form after adding task
    }
  }

  //update task status when dragged to a new column
  function updateTaskStatus(taskId , newStatus){
    setTasks((prevTasks)=> prevTasks.map((task) => task.id === taskId ? {...task , status : newStatus} : task));
  }

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
          key={`toStart-${tasks.filter((task)=> task.status === "To Start").length}`} 
          tasks={tasks} 
          showForm={showForm} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          />

          <InProgress
          key={`inProgress-${tasks.filter((task)=> task.status === "in Progress").length}`} 
          tasks={tasks} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          />
          <Completed 
          key={`completed-${tasks.filter((task)=> task.status === "Completed").length}`} 
          tasks={tasks} 
          addOrUpdateTask={addOrUpdateTask} 
          setShowForm={setShowForm} 
          updateTaskStatus={updateTaskStatus}
          />
        </div>
      </div>

    </>
  )
}
