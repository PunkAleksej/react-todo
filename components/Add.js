import React from 'react';
import TaskCreate from './TaskCreate';
/*
const TaskDataList = [];


class TaskForm {
  constructor(text) {
      this.text = text;
  }
  active = true;
  number = TaskDataList.length + 1;
}




function TaskCreate() {
  const input = document.querySelector('input').value;
  if (!input) {
    return
  }
  
  let newTask = new TaskForm(input)
    
  TaskDataList.push(newTask)
    
  console.log(TaskDataList)
  
}
*/



function Add () {
  return (
    <div className="list__task">
      <input className="list__task__text new" placeholder="Write new task..." />
      <button className="list_task_completed add"  onClick={() => {TaskCreate()}}>Add Task</button>
    </div>
  )
}





export default Add;
