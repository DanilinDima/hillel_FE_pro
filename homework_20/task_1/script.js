$(function () {
    let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

    function renderTodoList() {
        $("#todo-list").empty();
        todoItems.forEach(item => {
            addTodoItem(item);
        });
    }

    function addTodoItem({ id, title, description, status }) {
        const li = $(`
            <li data-id="${id}">
                <div class="li-content">
                    <span class="todo-title-text">${title}</span>
                    <span>
                        <button class="delete-btn btn btn-sm btn-outline-danger">Delete</button>
                        <span>
                            <input type="checkbox" ${status === "done" ? "checked" : ""} />
                            <span class="task-status ${status === "undone" ? "undone" : ""}">Done</span>
                        </span>
                    </span>
                </div>
            </li>
        `);

        if (status === "done") {
            li.find(".todo-title-text").addClass("strike");
        }

        li.find("input[type='checkbox']").on("change", function () {
            const index = todoItems.findIndex(i => i.id === id);
            todoItems[index].status = this.checked ? "done" : "undone";
            saveTodos();
            renderTodoList();
        });

        li.find(".delete-btn").on("click", function (e) {
            e.stopPropagation();
            todoItems = todoItems.filter(i => i.id !== id);
            saveTodos();
            renderTodoList();
        });

        li.find(".todo-title-text").on("click", function () {
            $("#modalTitle").text(title);
            $("#modalDescription").text(description);
            const modal = new bootstrap.Modal($("#todoModal"));
            modal.show();
        });

        $("#todo-list").append(li);
    }

    function saveTodos() {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }

    $("#add-todo-btn").on("click", function () {
        const title = $("#todo-title-input").val().trim();
        const description = $("#todo-description-input").val().trim();

        if (!title) {
            $("#add-alert-msg").show();
            return;
        }

        $("#add-alert-msg").hide();

        const newItem = {
            id: Date.now(),
            title,
            description,
            status: "undone"
        };

        todoItems.push(newItem);
        saveTodos();
        renderTodoList();

        $("#todo-title-input").val("");
        $("#todo-description-input").val("");
    });

    renderTodoList();
});
