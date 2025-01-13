import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { FaCircle } from "react-icons/fa";
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';
import { useContext } from 'react';
import TaskContext from '../../../TaskContext';

export default function ToStart() {

  const {tasks , showForm , formColumn , editingTask , addOrUpdateTask , updateTaskStatus , searchTerm} = useContext(TaskContext);

   // filter tasks with status "To Start"
  const toStartTasks = tasks? tasks.filter((task)=> task.status === "To Start" && task.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];



  

  //Handle Drop 
  function handleDrop(e , newStatus){
    e.preventDefault();
    const taskId = +e.dataTransfer.getData("taskId");
    updateTaskStatus(taskId, newStatus);
  }
  
  //allow Drop
  function handleDragOver(e){
    e.preventDefault();
  }

  return (
    <>
      <div className={styles.toStartContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>To Start</h3>

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "To Start")} onDragOver={handleDragOver} >

          {/* Show the form when:
              1. Creating a new task (editingTask === null), or
              2. Editing an existing task (editingTask !== null)
          */}

          {
            showForm && formColumn === "To Start" && (
              <ShowForm 
              onSubmit={(title , description) => 
                addOrUpdateTask(editingTask?.id ,
                  title ,
                  description ,
                  editingTask?.status || "To Start")}
                  initialTitle={editingTask ? editingTask.title : ""}
                  initialDescription={editingTask ? editingTask.description : ""}
                  />
            )
          }

          {
            toStartTasks.map((task) => <DisplayCard key={task.id} task={task}/>)
          }

        </div>
      </div>
    </>
  )
}
