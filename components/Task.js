import React from 'react';
import styles from './Task.module.css';




function Task(props) {
  const { value, deleteTodo, completeTodo } = props;


  const onDelete = () => {
    deleteTodo(value.key)
  }
  const onComplete = () => {
    completeTodo(value.key)
  }
  
  if (!value) {
    return null
  }
  
  return (
    <div className={styles.task}>
      <button 
        className={styles.task_completed}
        onClick={onComplete}
      >
        {value.key}
      </button>
      <div
        className={`${styles.task_text} ${!value.active ? styles.finish : ''}`}
      >{value.id}  {value.text}
      </div>
      <button 
        className={styles.task_delete}
        onClick={onDelete}>
        {value.key}
      </button>
    </div>
  )


}



export default Task;