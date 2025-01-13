import { useState } from 'react';
import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { RiEditLine } from "react-icons/ri";

export default function DisplayCard({task , setEditingTask , setTitle , setDescription , setShowForm  }) {
  //drop down menu
  const [isDrodownOpen , setIsDropdownOpen] = useState(false);

  //Handle drag start
  function handleDragStart(e , taskId){
    e.dataTransfer.setData("taskId" ,taskId);
  }

  // edit functionality
  function handleEditClick(task){
    setEditingTask(task); //set the task that is being edited
    setTitle(task.title); // set the new title
    setDescription(task.description); // new or edited desc
    setShowForm(true);
    setIsDropdownOpen(false);
  }


  return (
    <>
      <div className={styles.card} key={task.id} draggable onDragStart={(e)=> handleDragStart(e, task.id)}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{task.title}</h2>
          <div className={styles.iconContainer}>
            <RiEditLine className={styles.editingIcon} onClick={() => setIsDropdownOpen(!isDrodownOpen)}/>
              {/*Dropdown Menu*/}
              {isDrodownOpen && (
                <div className={styles.edit}>
                <button className={styles.btn} onClick={()=>handleEditClick(task)}>Edit</button>
              </div>
              )}
          </div>
        </div>

        <div className={styles.content}>
          <p>{task.description}</p>
        </div>

        <div className={styles.taskDate}>
          {/* Display the creation date */}
          <p>Created on: {new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </>
  )
}
