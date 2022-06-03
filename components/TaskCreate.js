import React from 'react';
//import TaskDataList from './TaskDataList';
import Task from './Task';










function TaskCreate(TaskDataList, setTaskDataList) {
  console.log(TaskDataList)  

  const input = document.querySelector('input').value;

  if (!input) {
    return 
  }
  
  let newTask = new class {
    constructor(text) {
        this.text = input;
    };

    active = true;
    id = TaskDataList.length + 1;
  }
  TaskDataList.push(newTask)
  TaskDataList = new Array(...TaskDataList)
  setTaskDataList(TaskDataList);
  //TaskDataList.push(newTask)
  console.log(TaskDataList)
  return TaskDataList
}





export default TaskCreate;