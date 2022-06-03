import React from 'react';
import Task from './Task';



function List(props) {
  const { value, deleteTodo, completeTodo }  = props;

  return (
    <div>
      {value.map((todo) => {
        return <Task key={todo.id} 
        value={todo} 
        deleteTodo={deleteTodo} 
        completeTodo={completeTodo}/>
      })
      }
    </div>

  )
}


export default List;