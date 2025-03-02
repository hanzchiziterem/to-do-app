import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoLists from "./components/TodoLists";
function App() {
  const [addTask, setAddTask] = useState("");
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      todo: "Clean the house",
      date: "Monday 24th, Febuaray 2025",
      reminder: true,
    },
    {
      id: 2,
      todo: "Trade and backtest",
      date: "Tuesday 25th, Febuaray 2025",
      reminder: true,
    },
    {
      id: 3,
      todo: "Program",
      date: "Wednesday 26th, Febuaray 2025",
      reminder: true,
    },
    {
      id: 4,
      todo: "Watch TV",
      date: "Thursday 28th, Febuaray 2025",
      reminder: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  const deleteTodo = (id) => {
    setTodoLists(todoLists.filter((todo) => todo.id !== id));
  };

  const toggleReminder = (id) => {
    setAddTask(
      todoLists.map((todo) =>
        todo.id === id ? { ...addTask, reminder: !todo.reminder } : addTask
      )
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoHeader />
        <TodoForm addTask={addTask} setAddTask={setAddTask} />
        <div className="todo-container">
          {todoLists.length > 0 ? (
            <TodoLists
              todoLists={todoLists}
              onDelete={deleteTodo}
              onToggle={toggleReminder}
            />
          ) : (
            "There is no Todo list."
          )}
        </div>
      </div>
    </>
  );
}

export default App;
