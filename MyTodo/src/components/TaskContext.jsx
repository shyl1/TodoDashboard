import { createContext  , useState} from "react";

const TaskContext = createContext();

function TaskProvider({children}){
  //set a list of tasks
    const [tasks, setTasks] = useState([]);

     // set up a form for adding new tasks
    const [showForm , setShowForm] = useState(false); // controls new task form
  
    // tark the task that is being edited
    const [editingTask , setEditingTask] = useState(null); // controls editing form

    const [formColumn, setFormColumn] = useState(null); // Track which column should show the form

    //add search term for global puropesses
    const [searchTerm , setSearchTerm] = useState("");

    // search by date range
    const [fromDate , setFromDate] = useState('');
    const [toDate , setToDate] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    
  // add new task or update
    function addOrUpdateTask(taskId, title , description , currentStatus){
        //create newTask object that contains the info of the task
        if(title && description){
          if(taskId){
            //update existing  task
            setTasks((preTasks)=> preTasks.map((task)=> task.id === taskId ? {...task , title , description , status : currentStatus} : task));
          } else {
            //add new task
            const newTask = {
              id: Date.now() , 
              title,
              description,
              status: currentStatus || "To Start", // default status
              createdAt: new Date().toISOString(), //store the creation Date
            };
            //append the  new task to tasks list
            setTasks([...tasks , newTask]);
          }
          setShowForm(false); // hide the form after adding task
          setEditingTask(null);
          setFormColumn(null); // Reset form column after submission
        }
      }

  //update task status when dragged to a new column
  function updateTaskStatus(taskId , newStatus){
    setTasks((prevTasks)=> prevTasks.map((task) => task.id === taskId ? {...task , status : newStatus} : task));
  }

  // Delete task
  function deleteTask(taskId){
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }


  return(
    <TaskContext.Provider 
      value={{
        tasks,
        setTasks,
        editingTask,
        setEditingTask,
        showForm,
        setShowForm,
        addOrUpdateTask,
        updateTaskStatus,
        title,
        setTitle,
        description,
        setDescription,
        formColumn,
        setFormColumn,
        deleteTask,
        searchTerm,
        setSearchTerm,
        fromDate,
        setFromDate,
        toDate,
        setToDate
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskProvider };
export default TaskContext; // Default export