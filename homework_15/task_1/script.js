let todoList = document.querySelector("#todo-list");
let todoInput = document.querySelector("#todo-input");
let todoAddButton = document.querySelector("#add-todo-btn");
let alertMessage = document.querySelector("#add-alert-msg");

let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

function addTodo(id, text, status) {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = id; 
    todoItem.innerHTML = `
        <div class="li-content">
            <span>${text}</span>
            <span>
                <button class="delete-btn">Delete</button>
                <span>
                    <input type="checkbox" />
                    <span class="task-status undone">Done</span>
                </span>
            </span>
        </div>`;
    todoList.appendChild(todoItem);

    const checkbox = todoItem.querySelector("input[type='checkbox']");
    const taskStatus = todoItem.querySelector(".task-status");
    const deleteButton = todoItem.querySelector(".delete-btn");
    const taskText = todoItem.querySelector("div span:first-child");

    const todoItemInStorage = todoItems.find((item) => item.id === id);

    if (status === "done") {
        checkbox.checked = true;
        taskStatus.classList.remove("undone");
        taskText.classList.add("strike");
    } else if (status === "undone") {
        checkbox.checked = false;
        taskStatus.classList.add("undone");
        taskText.classList.remove("strike");
    }

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskStatus.classList.remove("undone");
            todoItemInStorage.status = "done";
            taskText.classList.add("strike");

        } else {
            taskStatus.classList.add("undone");
            todoItemInStorage.status = "undone";
            taskText.classList.remove("strike");
        }
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    });

    deleteButton.addEventListener("click", function () {
        todoItems = todoItems.filter((item) => item.id !== id);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        todoItem.remove();
    });
}

todoAddButton.addEventListener("click", function () {
    let todoText = todoInput.value.trim();
    if (todoText) {
        const newTodo = { id: Date.now(), text: todoText, status: "undone" };
        todoItems.push(newTodo);
        addTodo(newTodo.id, newTodo.text, newTodo.status);
        alertMessage.style = "display: none";
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        todoInput.value = "";
    } else {
        alertMessage.style = "display: block";
    }
});

function renderTodoList() {
    todoItems.forEach((item) => {
        addTodo(item.id, item.text, item.status);
    });
}
renderTodoList();
