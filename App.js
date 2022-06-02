import logo from './components/logo.svg';
import './components/App.css';
import Add from './components/Add.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React, { useState } from 'react';
import TaskDataList from './components/TaskDataList';


function App() {
/*
  const TaskDataList = [{active: true, id: 1, value: "Do anything"},
    {active: true, id: 2, value: "do anything else"},
    {active: true, id: 3, value: "one two three"},

];
*/

  const [todos, setTodos] = useState(TaskDataList);



  return (
    <div className="container">
      <Header />
      <Add />
      <List 
        value={todos}
      />
    </div>
  );
}

export default App;
