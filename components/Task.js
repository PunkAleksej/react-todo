import React from 'react';





function Task(value) {

  value = value.value
  console.log(value)
  if (!value) {
    return
  }
  if (value.active) {
     return (
      <div className="list__task">
        <button className="list_task_completed"></button>
        <div className="list__task__text">{value.id} {value.text}</div>
        <button className="list__task__delete"></button>
      </div>
    )
  }

  return (
    <div className="list__task">
      <button className="list_task_completed"></button>
      <div className="list__task__text finish">{value.id}  {value.text}</div>
      <button className="list__task__delete"></button>
    </div>
  )
  
 
}



export default Task;