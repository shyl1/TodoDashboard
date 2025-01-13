//import PropTypes from 'prop-types';
import styles from '../../dashboardStyling/tasksStyling/tostart.module.css';
import { FaCircle } from "react-icons/fa";
import ShowForm from '../Card/ShowForm';
import DisplayCard from '../Card/DisplayCard';

export default function ToStart({tasks = [],
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

  // settin info of task
  //const [title , setTitle] = useState("");
  //const [description, setDescription] = useState("");
  //track the task being edited
  //const [editingTask , setEditingTask] = useState(null);


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

  
  return (
    <>
      <div className={styles.toStartContainer}>
        <h3 className={styles.text}><FaCircle className={styles.circleIcon}/>To Start</h3>

        <div className={styles.innerContainer} onDrop={(e)=> handleDrop(e , "To Start")} onDragOver={handleDragOver}>
          {/* Display the form if showForm is true */}
          {
            toStartTasks.map((task) => {
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
                  showForm={showForm}
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
            {/* <ShowForm 
            title={title} 
            description={description} 
            addOrUpdateTask={addOrUpdateTask} 
            setTitle={setTitle} 
            setDescription={setDescription} 
            setEditingTask={setEditingTask} 
            editingTask={editingTask} 
            showForm={showForm} 
            onSubmit={handleFormSubmit}/> */}

          {/* Display the task cards */}
            {/* {toStartTasks.map((task)=>{
              if(editingTask?.id === task.id ){
                // Show the form if this task is being edited
                return( <DisplayCard  
                  key={task.id} 
                  task={task}  
                  setEditingTask={setEditingTask} 
                  setTitle={setTitle} 
                  setDescription={setDescription} 
                  setShowForm={setShowForm} 
                  setTasks={setTasks}
                  addOrUpdateTask={addOrUpdateTask}
                  />
                );
              } else {
                // Show the card if this task is not being edited
                return( <DisplayCard  
                  key={task.id} 
                  task={task}  
                  setEditingTask={setEditingTask} 
                  setTitle={setTitle} 
                  setDescription={setDescription} 
                  setShowForm={setShowForm} 
                  setTasks={setTasks}
                  currentStatus={task.status}
                  addOrUpdateTask={addOrUpdateTask}
                  />
                );
              }
            })} */}
        </div>
      </div>
    </>
  )
}

// Add prop type validation 
// ToStart.propTypes = {
//   // tasks : PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id : PropTypes.number.isRequired,
//   //     title : PropTypes.string.isRequired,
//   //     description: PropTypes.string.isRequired,
//   //     status : PropTypes.string.isRequired,
//   //   })
//   // ).isRequired,
//   tasks:PropTypes.array.isRequired,
//   addOrUpdateTask : PropTypes.func.isRequired,
//   setShowForm :PropTypes.func.isRequired,
//   updateTaskStatus: PropTypes.func.isRequired,
//   setTasks: PropTypes.func.isRequired,
//   editingTask:PropTypes.object,
//   setEditingTask:PropTypes.func.isRequired,
// };
