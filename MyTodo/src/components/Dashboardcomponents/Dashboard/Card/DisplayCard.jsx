import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { RiEditLine } from "react-icons/ri";

export default function DisplayCard({task , setEditingTask , setTitle , setDescription , setShowForm }) {


  //Handle drag start
  function handleDragStart(e , taskId){
    e.dataTransfer.setData("taskId" ,taskId);
  }

  function handleEdit(task){
    setEditingTask(task); //set the task that is being edited
    setTitle(task.title); // set the new title
    setDescription(task.description); // new or edited desc
    setShowForm(true);
  }


  return (
    <>
      <div className={styles.card} key={task.id} draggable onDragStart={(e)=> handleDragStart(e, task.id)}>
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
      </div>
    </>
  )
}
