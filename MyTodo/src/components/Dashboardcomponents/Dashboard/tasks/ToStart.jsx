import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { FaCircle } from "react-icons/fa";
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';

export default function ToStart({tasks = [] , addOrUpdateTask , setShowForm , updateTaskStatus ,showForm}) {
  // settin info of task
  const [title , setTitle] = useState("");
  const [description, setDescription] = useState("");
  //track the task being edited
  const [editingTask , setEditingTask] = useState(null);


   // filter tasks with status "To Start"
  const toStartTasks = tasks? tasks.filter((task)=> task.status === "To Start") : [];

  

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
      <div className={styles.toStartContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>To Start</h3>

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "To Start")} onDragOver={handleDragOver}>
          {/* Display the form if showForm is true */}
            <ShowForm 
            title={title} 
            description={description} 
            addOrUpdateTask={addOrUpdateTask} 
            setTitle={setTitle} 
            setDescription={setDescription} 
            setEditingTask={setEditingTask} 
            editingTask={editingTask} 
            showForm={showForm} 
            onSubmit={handleFormSubmit}/>

          {/* Display the task cards */}
            {toStartTasks.map((task)=>{
              return( <DisplayCard  key={task.id} task={task}  setEditingTask={setEditingTask} setTitle={setTitle} setDescription={setDescription} setShowForm={setShowForm}/>);
            })}
        </div>
      </div>
    </>
  )
}

// Add prop type validation 
ToStart.propTypes = {
  tasks : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status : PropTypes.string.isRequired,
    })
  ).isRequired,
  showForm: PropTypes.bool.isRequired,
  addOrUpdateTask : PropTypes.func.isRequired,
  setShowForm :PropTypes.func.isRequired,
};
