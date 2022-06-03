import React from 'react';
import styles from './Task.module.css';




function Task(props) {
  const { value } = props;
  console.log(value)

  if (!value) {
    return null
  }


  return (
    <div className={styles.task}>
      <button className={styles.task_completed}></button>
      <div
        className={`${styles.task_text} ${!value.active ? styles.finish : ''}`}
      >{value.id}  {value.text}
      </div>
      <button className={styles.task_delete}></button>
    </div>
  )


}



export default Task;