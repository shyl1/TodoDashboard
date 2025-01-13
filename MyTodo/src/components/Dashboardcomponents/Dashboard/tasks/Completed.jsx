//import PropTypes from 'prop-types';
import styles from '../../dashboardStyling/tasksStyling/completed.module.css';
import { FaCircle } from "react-icons/fa";
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';
import { useContext } from 'react';
import TaskContext from '../../../TaskContext';

export default function Completed() {
  const {tasks , showForm , formColumn , editingTask , addOrUpdateTask , updateTaskStatus} = useContext(TaskContext);


    
     // filter tasks with status "To Start"
    const completedTasks = tasks? tasks.filter((task)=> task.status === "Completed") : [];
  
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
      <div className={styles.completedConatiner}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>Completed</h3>

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "Completed")} onDragOver={handleDragOver}>

          {
              showForm &&  formColumn=== "Completed" && (
                <ShowForm
                  onSubmit={(title, description) =>
                    addOrUpdateTask(
                      editingTask?.id, // Pass the task ID if editing, otherwise null
                      title,
                      description,
                      "Completed" // Preserve the status as "Completed"
                    )
                  }
                  initialTitle={editingTask ? editingTask.title : ""}
                  initialDescription={editingTask ? editingTask.description : ""}
                />
              )
            }

          {
            completedTasks.map((task) => <DisplayCard key={task.id} task={task}/>)
          }
          </div>
      </div>
    </>
  )
}

