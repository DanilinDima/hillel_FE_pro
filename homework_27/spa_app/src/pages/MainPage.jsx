import { useEffect, useState } from "react";
import "./css/MainPage.css"; 

export default function Main() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todoItems")) || [];
  });
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setShowAlert(true);
      return;
    }

    const newTodo = { id: Date.now(), text: trimmed, status: "undone" };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setShowAlert(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "done" ? "undone" : "done",
            }
          : todo
      )
    );
  };

  return (
    <div id="todo-container">
      <h1 className="todo-title">TO-DO LIST</h1>
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="li-content">
              <span className={todo.status === "done" ? "strike" : ""}>
                {todo.text}
              </span>
              <span>
                <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
                  Delete
                </button>
                <span>
                  <input
                    type="checkbox"
                    checked={todo.status === "done"}
                    onChange={() => toggleStatus(todo.id)}
                  />
                  <span className={`task-status ${todo.status === "undone" ? "undone" : ""}`}>
                    Done
                  </span>
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div id="todo-add-container">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
          />
          {showAlert && <p id="add-alert-msg">please enter new task</p>}
        </div>
        <button id="add-todo-btn" onClick={handleAddTodo}>
          Add To-Do
        </button>
      </div>
    </div>
  );
}
