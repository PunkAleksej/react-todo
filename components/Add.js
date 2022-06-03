import React, { useState } from 'react';
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



const Add = (props) => {
  const {
    createTodo,
  } = props;

  const [value, setValue] = useState('');

  const onInputChange = (ev) => {
    setValue(ev.target.value)
  }

  const onSubmit = () => {
    createTodo(value)
    setValue('')
  }
  return (
    <div className="list__task">
      <input
        className="list__task__text new"
        placeholder="Write new task..."
        value={value}
        onChange={onInputChange}
      />
      <button
        className="list_task_completed add"
        onClick={onSubmit}
      >
        Add Task
      </button>
    </div>
  )
}





export default Add;
