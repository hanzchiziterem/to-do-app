import TodoList from "./TodoList";
const TodoLists = ({ todoLists, setTodoLists, onDelete }) => {
  return (
    <div>
      {todoLists.map((todos) => (
        <TodoList key={todos.id} todos={todos} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoLists;
