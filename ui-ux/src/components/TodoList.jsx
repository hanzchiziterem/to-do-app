import { FaTimes } from "react-icons/fa";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo">
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
