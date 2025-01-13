import styles from "../Card/showform.module.css";

export default function ShowForm({
  addOrUpdateTask,
  setTitle,
  setDescription,
  title, 
  description,
  setShowForm,
  editingTask,
  showForm
  }) {
  
  function handleSubmit(e){
    e.preventDefault();
    addOrUpdateTask(editingTask?.id,title,description ,editingTask?.status );
    setTitle("");
    setDescription("");
    setShowForm(false);
  }

  return (
    <>
      {
        showForm && (
          <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>

            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputField}/>

            <textarea placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} className={styles.textareaField}></textarea>
            
            <button type='submit' className={styles.addButton}>{editingTask ? "Update" : "add Task"}</button>
          </form>
        </div>
        )
      }
        
      
    </>
  )
}
