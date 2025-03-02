import { FaTimes } from "react-icons/fa";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className={`todo ${todos.reminder ? 'reminder': ''}`} onDoubleClick={()=> onToggle(todos.id)}>
      <h3>
        {todos.todo}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(todos.id)}
        />
      </h3>
      <p>{todos.date}</p>
    </div>
  );
};

export default TodoList;
