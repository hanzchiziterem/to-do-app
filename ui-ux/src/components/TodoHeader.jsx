import React from 'react'
import AddTodoButton from './AddTodoButton'

const TodoHeader = () => {
  const onClick = (e) => {
    console.log(e)
}
  return (
    
    <div className="todo-header">
      <h1>To-do List</h1>
 <AddTodoButton color="green" text="Add Todo" onClick={onClick}/>
    </div>
  )
}

export default TodoHeader