import TodoList from "./TodoList";
const TodoLists = ({ todoLists, onDelete, onToggle }) => {
  return (
    <div>
      {todoLists.map((todos) => (
        <TodoList key={todos.id} todos={todos} onDelete={onDelete} onToggle={onToggle} />
      ))} 
    </div>
  );
};

export default TodoLists;
