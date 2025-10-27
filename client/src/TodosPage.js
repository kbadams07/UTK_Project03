import React, {useState} from "react";

function TodosPage({
  todos,
  addTodo,
  toggleComplete,
  deleteTodo,
  filter,
  setFilter
}) {
  const [newTodoText, setNewTodoText] = useState("");

  // handle submit of new task
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newTodoText.trim();
    if (trimmed !== "") {
      addTodo(trimmed);
      setNewTodoText("");
    }
  };

  // filter logic
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; // "all"
  });

  return (
    <div className="todos-page">
      <h1>My Tasks</h1>

      <div className="todo-layout">
        {/* Left side: Add form */}
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="todoInput">New Task:</label>
          <input
            id="todoInput"
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="e.g. Walk the dog"
          />
          <button type="submit">Add Task</button>
        </form>

        {/* Right side: Task List */}
        <div className="todo-list">
          <div className="filters">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("incomplete")}>Incomplete</button>
          </div>

          <ul>
            {filteredTodos.map(todo => (
              <li key={todo.id} className="todo-item">
                <span
                  className={todo.completed ? "todo-text completed" : "todo-text"}
                >
                  {todo.text}
                </span>
                <button onClick={() => toggleComplete(todo.id)}>
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>

          {filteredTodos.length === 0 && (
            <p>No tasks match this view.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodosPage;
