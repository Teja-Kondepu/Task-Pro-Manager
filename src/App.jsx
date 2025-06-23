import React from "react";
import TodoApp from "./components/TodoApp";

const App = () => (
  <div className="container">
    <div className="header">
      <i className="fas fa-tasks task-icon"></i>
      <h1>TaskMaster Pro</h1>
      <p className="subtitle">
        Your Personal Task Management Solution <i className="fas fa-star"></i>
      </p>
    </div>
    <TodoApp />
  </div>
);

export default App;