import React from 'react';
import Task from './Task';
import Add from './Add'
import TaskCreate from './TaskCreate';
import TaskDataList from './TaskDataList';












function List (todos) {
    todos = todos.value;
   
    let itemList = todos.map((todo) => <Task key={todo.id} value={todo} />);




    return (
        <div>
            {itemList}
        </div>

    )
}


/*
 {
        console.log(todos)

        const listItems = todos.map((todo) =>
          <Task value={todo} />
        );





            <Task value={TaskDataList[0]} />
            <Task value={TaskDataList[1]} />
            <Task value={TaskDataList[2]} />
            <Task value={TaskDataList[3]} />


        <div>
         {todos.map((todo) => 
            <Task 
                key={todo.id}
                value={todo.value}
                active={todo.active} 
            />
         )}

        </div>





key={todo.id}
value={todo.value}
active={todo.active}
*/
export default List;