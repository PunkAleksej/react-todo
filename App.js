import logo from './components/logo.svg';
import './components/App.css';
import Add from './components/Add.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React, { useState } from 'react';
import { createTodoTask } from './utils/taskCreator';
//import TaskDataList from './components/TaskDataList';

function App() {
/*
  const TaskDataList = [{active: true, id: 1, value: "Do anything"},
    {active: true, id: 2, value: "do anything else"},
    {active: true, id: 3, value: "one two three"},

];
*/

  const [taskDataList, setTaskDataList] = useState([]);
  
  const createTodo = (text) => {
    if (!(text.trim())) return;
    const newTask = createTodoTask(text)
    setTaskDataList([...taskDataList, newTask])
  }

  return (
    <div className="container">
      <Header />
      <Add createTodo={createTodo} />
      <List value={taskDataList} />
    </div>
  );
}

export default App;
