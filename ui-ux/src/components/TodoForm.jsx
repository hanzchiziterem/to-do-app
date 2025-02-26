import TodoLists from "./TodoLists";

const TodoForm = ({ addTask, setAddTask }) => {
  return (
    <div className="todo-form">
      <form>
        <input
          type="text"
          value={addTask}
          placeholder="What tasks do you have in mind?"
          onChange={(e) => setAddTask(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
