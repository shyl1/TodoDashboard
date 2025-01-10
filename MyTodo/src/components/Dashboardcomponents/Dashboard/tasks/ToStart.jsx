import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { FaCircle } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";

export default function ToStart({tasks = [] , showForm , addOrUpdateTask , setShowForm , updateTaskStatus}) {
  // settin info of task
  const [title , setTitle] = useState("");
  const [description, setDescription] = useState("");
  //track the task being edited
  const [editingTask , setEditingTask] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    addOrUpdateTask(editingTask?.id,title,description);
    setTitle("");
    setDescription("");
    setEditingTask(null); // Reset editing state
  }

  function handleEdit(task){
    setEditingTask(task); //set the task that is being edited
    setTitle(task.title); // set the new title
    setDescription(task.description); // new or edited desc
    setShowForm(true);
  }

   // filter tasks with status "To Start"
  const toStartTasks = tasks? tasks.filter((task)=> task.status === "To Start") : [];

  //Handle drag start
  function handleDragStart(e , taskId){
    e.dataTransfer.setData("taskId" ,taskId);
  }

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

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "To Start")} onDragOver={handleDragOver}>
          {/* Display the form if showForm is true */}
          {showForm && (
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputField}/>
                <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} className={styles.textareaField}></textarea>
                <button type='submit' className={styles.addButton}>{editingTask ? "Update" : "add Task"}</button>
              </form>
            </div>
          )}

          {/* Display the task cards */}
          <div className={styles.innerContainer}>
            {toStartTasks.map((task)=>{
              //console.log("Rendering Task:", task); // Debugging: Log each task
              return(<div className={styles.card} key={task.id} draggable onDragStart={(e)=> handleDragStart(e, task.id)}>
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{task.title}</h2>
                  <div className={styles.iconContainer}>
                  <RiEditLine className={styles.editingIcon} onClick={()=> handleEdit(task)}/>
                  </div>
                </div>
                <div className={styles.content}>
                  <p>{task.description}</p>
                </div>
                <div className={styles.taskDate}>
                  {/* Display the creation date */}
                  <p>Created on: {new Date(task.createdAt).toLocaleDateString()}</p>
                </div>
              </div>);
            })}
            </div>
          </div>


        
        {/* 
          <div className={styles.card}>
            <div className={styles.textContainer}>
              <h2 className={styles.title}></h2>
              <div className={styles.iconContainer}>
                <RiEditLine className={styles.editingIcon}/>
                {/* <div className={styles.edit}>
                  <button className={styles.btn}>Edit</button>
                  <button className={styles.btn}>Delete</button>
                </div> */}
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