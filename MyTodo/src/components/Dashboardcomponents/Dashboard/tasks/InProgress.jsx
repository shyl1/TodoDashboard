import styles from '../../dashboardStyling/tasksStyling/inprogress.module.css';
import { FaCircle } from "react-icons/fa";
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';
import { useContext } from 'react';
import TaskContext from '../../../TaskContext';



export default function InProgress() {
  const {tasks , showForm , formColumn , editingTask , addOrUpdateTask , updateTaskStatus} = useContext(TaskContext);

  
   // filter tasks with status "To Start"
  const inPogressTasks = tasks? tasks.filter((task)=> task.status === "in Progress") : [];

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
      <div className={styles.inProgressContainer}>
        <h3 className={styles.text}>
          <FaCircle className={styles.circleIcon}/>
          in Progress
        </h3>

        <div className={styles.innerContainer} 
        onDrop={(e)=> handleDrop(e , "in Progress")} 
        onDragOver={handleDragOver}
        >

          {
            showForm && formColumn === "in Progress" &&(
              <ShowForm
                onSubmit={(title, description) =>
                  addOrUpdateTask(
                    editingTask?.id, // Pass the task ID if editing, otherwise null
                    title,
                    description,
                    "in Progress" // Preserve the status as "In Progress"
                  )
                }
                initialTitle={editingTask ? editingTask.title : ""}
                initialDescription={editingTask ? editingTask.description : ""}
              />
            )
          }
            
            {
              inPogressTasks.map((task) => <DisplayCard key={task.id} task={task}/>)
            }
        </div>
      </div>
    </>
  )
}

