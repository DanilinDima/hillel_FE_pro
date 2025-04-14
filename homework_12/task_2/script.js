let buttonContainer = document.getElementById('container');
function showButtonClick(button) {
    let buttonText = button.textContent;
    alert(`You have clicked the button: ${buttonText}`);
};

buttonContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        showButtonClick(event.target);
    }
});