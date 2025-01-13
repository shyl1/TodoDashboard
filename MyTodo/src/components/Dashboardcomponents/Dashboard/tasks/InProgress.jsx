//import PropTypes from 'prop-types';
import styles from '../../dashboardStyling/tasksStyling/inprogress.module.css';
import { FaCircle } from "react-icons/fa";
//import { useState } from 'react';
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';

export default function InProgress({tasks = [] , 
  showForm,
  addOrUpdateTask,
  setShowForm,
  updateTaskStatus,
  setTasks,
  editingTask,
  setEditingTask,
  setTitle,
  setDescription,
  title,
  description
}) {

  
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
            inPogressTasks.map((task) => {
              if(editingTask?.id === task.id){
                return (
                  <ShowForm 
                  key={task.id}
                  addOrUpdateTask={addOrUpdateTask}
                  setTitle={setTitle}
                  setDescription={setDescription}
                  setShowForm={setShowForm}
                  title={title}
                  description={description}
                  /> 
                );
              } else {
                <DisplayCard 
                key={task.id} 
                task={task}  
                setEditingTask={setEditingTask} 
                setShowForm={setShowForm}
                addOrUpdateTask={addOrUpdateTask}
                />
              }
            })
          } 
          
        </div>
      </div>
    </>
  )
}

// InProgress.propTypes = {
//   tasks:PropTypes.array.isRequired,
//   addOrUpdateTask : PropTypes.func.isRequired,
//   setShowForm :PropTypes.func.isRequired,
//   updateTaskStatus: PropTypes.func.isRequired,
//   setTasks: PropTypes.func.isRequired,
//   editingTask:PropTypes.object,
//   setEditingTask:PropTypes.func.isRequired,
// };
