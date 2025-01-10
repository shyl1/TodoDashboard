import { useState } from 'react';
import styles from '../../dashboardStyling/tasksStyling/inprogress.module.css';
import { FaCircle } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";

export default function InProgress({tasks = [] , showForm , addOrUpdateTask , setShowForm , updateTaskStatus}) {

  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');

  const [editingTask , setEditingTask] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
  }


  //filtering for inProgressTasks
  const inProgressTasks = tasks? tasks.filter((task)=> task.status === "To Start") : [];
  

  return (
    <>
      <div className={styles.inProgressContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>in Progress</h3>

        <div className={styles.innerContainer}>
          {showForm && (
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputField}/>
                <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} className={styles.textareaField}></textarea>
                <button type='submit' className={styles.addButton}>{editingTask ? "Update" : "add Task"}</button>
              </form>
            </div>
          )}
        </div>
        {/* Display the task cards */}
        <div className={styles.innerContainer}>
          {inProgressTasks.map((task)=>{
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
    </>
  )
}
