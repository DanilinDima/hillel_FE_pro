let todoList = document.querySelector('#todo-list');
let todoInput = document.querySelector('#todo-input');
let todoAddButton = document.querySelector('#add-todo-btn');
let alertMessage = document.querySelector('#add-alert-msg');

todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let todoItem = event.target.closest('li');
        if (todoItem) {
            todoItem.remove();
        }
    }
}
);

todoAddButton.addEventListener('click', function () {
    let todoText = todoInput.value.trim();
    if (todoText) {
        let todoItem = document.createElement('li');

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('li-content');

        let span = document.createElement('span');
        span.textContent = todoText;

        let button = document.createElement('button');
        button.textContent = 'Delete';

        contentDiv.appendChild(span);
        contentDiv.appendChild(button);
        todoItem.appendChild(contentDiv);
        todoList.appendChild(todoItem);

        todoInput.value = '';
        alertMessage.style = 'display: none';
    } else {
        alertMessage.style = 'display: block';
    }
})