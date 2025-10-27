import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodosPage from "./TodosPage";
import ContactPage from "./ContactPage";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Finish homework", completed: true }
  ]);

  const [filter, setFilter] = useState("all"); // "all" | "completed" | "incomplete"

  // functions to modify todos (we'll pass down as props):
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <div className="App">
        {/* NAVBAR (requirement: horizontal nav bar) */}
        <nav className="navbar">
          <Link to="/todos" className="nav-link">Todos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <Routes>
          <Route
            path="/todos"
            element={
              <TodosPage
                todos={todos}
                addTodo={addTodo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* default route redirect-ish */}
          <Route path="*" element={<TodosPage
            todos={todos}
            addTodo={addTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            filter={filter}
            setFilter={setFilter}
          />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
