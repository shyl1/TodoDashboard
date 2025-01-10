import styles from '../../dashboardStyling/tasksStyling/inprogress.module.css';
import { FaCircle } from "react-icons/fa";
import { useState } from 'react';
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';

export default function InProgress({tasks = [] , addOrUpdateTask , updateTaskStatus , setShowForm }) {

  // settin info of task
    const [title , setTitle] = useState("");
    const [description, setDescription] = useState("");
    //track the task being edited
    const [editingTask , setEditingTask] = useState(null);
  
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

  // Handle form submission
  function handleFormSubmit() {
    if (title && description) {
      addOrUpdateTask(editingTask?.id, title, description);
      setTitle("");
      setDescription("");
      setEditingTask(null); // Reset editing state
      setShowForm(false); // Hide the form after submission
    }
  }


  return (
    <>
      <div className={styles.inProgressContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>in Progress</h3>

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "in Progress")} onDragOver={handleDragOver}>
        {/* Display the form if showForm is true */}
        <ShowForm 
        title={title} 
        description={description} 
        addOrUpdateTask={addOrUpdateTask} 
        setTitle={setTitle} 
        setDescription={setDescription} 
        setEditingTask={setEditingTask} 
        editingTask={editingTask} 
        onSubmit={handleFormSubmit}
        />

        {/* Display the task cards */}
          {inPogressTasks.map((task)=>{
            return( <DisplayCard  key={task.id} task={task}  setEditingTask={setEditingTask} setTitle={setTitle} setDescription={setDescription} setShowForm={setShowForm}/>);
          })} 
        </div>
      </div>
    </>
  )
}
