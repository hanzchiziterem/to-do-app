import { useState } from 'react'
import './App.css'
function App() {
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task)
  }
  return (
    <>
     <div className="container">
      <div className="todo-header">
        <h1>To-do List</h1>
      </div>

      <div className="todo-form">
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} placeholder="What tasks do you have in mind?" onChange={(e)=>setTask(e.target.value)}/>
          <input type="submit" value="Add Task" />
        </form>
      </div>

      <div className="todo-task-container">

      </div>
     </div>
    </>
  )
}

export default App;
