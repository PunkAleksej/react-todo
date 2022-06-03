import React from 'react';
import Task from './Task';
import Add from './Add'
import TaskCreate from './TaskCreate';
//import TaskDataList from './TaskDataList';

function List(props) {
  const { value } = props;

  return (
    <div>
      {value.map((todo) => {
        return <Task key={todo.id} value={todo} />
      })
      }
    </div>

  )
}


export default List;