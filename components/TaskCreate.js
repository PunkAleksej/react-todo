import React from 'react';
import TaskDataList from './TaskDataList';
import Task from './Task';



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
  
  let newTask = new class {
    constructor(text) {
        this.text = input;
    }

    active = true;
    id = TaskDataList.length + 1;
  }
  
  TaskDataList.push(newTask)
  console.log(TaskDataList)
  return TaskDataList
}





export default TaskCreate;