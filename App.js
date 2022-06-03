import './components/App.css';
import Add from './components/Add.js';
import List from './components/List.js';
import Header from './components/Header.js';
import React, { useState } from 'react';
import { createTodoTask } from './utils/taskCreator';
import { deleteTodoTask } from './utils/taskDelete';
import { completeTodoTask } from './utils/taskComplete';
import { sortedTodoTask } from './utils/sortingTask';

function App() {
  const [headerInfo, setHeaderInfo] = useState();
  const [taskComplete, setTaskComplete] = useState();
  const [taskDataList, setTaskDataList] = useState([]);
  const [taskDelete, setTaskDelete] = useState();


  const listSort = (sortPriority) => {
    const sortedList = sortedTodoTask(taskDataList, sortPriority)

    setTaskDataList([...sortedList])
  }

  const completeTodo = (key) => {
    // const completeTarget = completeTodoTask(taskDataList, key)
    // taskDataList[completeTarget].active = false;
    const updatedTodoList = taskDataList.map((item) => {
      if (item.key !== key) {
        return item;
      }
      return {
        ...item,
        active: false
      }
    })
    setTaskComplete(updatedTodoList)
  }

  const deleteTodo = (key) => {
    // const deleteTarget = deleteTodoTask(taskDataList, key)
    // taskDataList.splice(deleteTarget, 1)
    const updatedTodoList = taskDataList.filter(i => i.key !== key)
    setTaskDelete(updatedTodoList)
  }

  const createTodo = (text) => {
    if (!(text.trim())) return;
    const newTask = createTodoTask(text)
    setTaskDataList([...taskDataList, newTask])
  }

  return (
    <div className="container">
      <Header taskDataList={taskDataList}
        listSort={listSort} />
      <Add createTodo={createTodo} />
      <List
        value={taskDataList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
