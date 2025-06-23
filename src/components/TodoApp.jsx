import React, { useState, useEffect, useRef } from "react";

// Util for localStorage
const getTodos = () =>
  JSON.parse(localStorage.getItem("todos_tmpro")) || [];
const saveTodos = (todos) =>
  localStorage.setItem("todos_tmpro", JSON.stringify(todos));

const FILTERS = [
  { name: "All", value: "all", icon: "fa-list" },
  { name: "Completed", value: "completed", icon: "fa-check" },
  { name: "Pending", value: "pending", icon: "fa-clock" },
];

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  // Add todo
  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos([
      ...todos,
      { text, completed: false }
    ]);
    setInput("");
    inputRef.current && inputRef.current.focus();
  };

  // Keyboard enter support
  const handleInputKey = (e) => {
    if (e.key === "Enter") addTodo();
  };

  // Toggle complete
  const toggleTodo = (idx) => {
    setTodos(todos =>
      todos.map((todo, i) =>
        i === idx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (idx) => {
    setTodos(todos => todos.filter((_, i) => i !== idx));
  };

  // Filter button click
  const handleFilter = (value) => setFilter(value);

  return (
    <>
      <div className="input-section">
        <div className="input-wrapper">
          <i className="fas fa-pencil input-icon"></i>
          <input
            type="text"
            ref={inputRef}
            id="todoInput"
            placeholder="Enter your task"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKey}
            autoComplete="off"
          />
        </div>
        <button onClick={addTodo} className="add-btn">
          <i className="fas fa-plus"></i>
          <span>Add Task</span>
        </button>
      </div>

      <div className="filters">
        {FILTERS.map(({ name, value, icon }) => (
          <button
            key={value}
            className={`filter-btn${filter === value ? " active" : ""}`}
            data-filter={value}
            onClick={() => handleFilter(value)}
          >
            <i className={`fas ${icon}`}></i> {name}
          </button>
        ))}
      </div>

      <ul id="todoList">
        {filteredTodos.length === 0 && (
          <li style={{ textAlign: "center", color: "#888" }}>
            No tasks here!
          </li>
        )}
        {filteredTodos.map((todo, idx) => (
          <li key={idx} className={todo.completed ? "completed" : ""}>
            <div className="todo-content">
              <span className="todo-text">{todo.text}</span>
            </div>
            <div className="todo-actions">
              <button
                onClick={() => toggleTodo(todos.indexOf(todo))}
                className="action-btn complete-btn"
                title={todo.completed ? "Mark as Pending" : "Mark as Completed"}
              >
                <i className={`fas ${todo.completed ? "fa-rotate-left" : "fa-check"}`}></i>
              </button>
              <button
                onClick={() => deleteTodo(todos.indexOf(todo))}
                className="action-btn delete-btn"
                title="Delete"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;