const API_URL = "http://localhost:3000/api/todos";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-title");
  const list = document.getElementById("todo-list");

  
  fetch(API_URL)
    .then(res => res.json())
    .then(todos => {
      todos.forEach(addTodoToDOM);
    });

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTodo = {
      userId: 1,
      title: input.value,
      completed: false
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(todo => {
        addTodoToDOM(todo);
        input.value = "";
      });
  });

  function addTodoToDOM(todo) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.title}</span>
      <span>
        <input type="checkbox" ${todo.completed ? "checked" : ""} />
        <button class="delete">Delete</button>
      </span>
    `;

  
    li.querySelector("input").addEventListener("change", function () {
      fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...todo, completed: this.checked })
      });
    });

    
    li.querySelector(".delete").addEventListener("click", () => {
      fetch(`${API_URL}/${todo.id}`, {
        method: "DELETE"
      }).then(() => {
        li.remove();
      });
    });

    list.appendChild(li);
  }
});
