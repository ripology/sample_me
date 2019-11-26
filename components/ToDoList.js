import React from 'react'
import todos from '../reducers/todos'

const ToDoList = ({todos, onToDoCLick}) => {

 return (
  <ul>
   {todos.map((todo,index) =>(
    <ToDo key={index} {...todo} onClick={ () => onToDoClick(index)}/>
   ))}

  </ul>
 )
}

export default ToDoList