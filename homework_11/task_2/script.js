const textBlock = document.querySelector('#text-container');
const btnChangeTextColor = document.querySelector('#change-color-btn');
const btnChangeTextColorIndicator = document.querySelector('#change-color-btn span');

btnChangeTextColor.addEventListener('click', () => {
    textBlock.classList.toggle("active");
    btnChangeTextColorIndicator.classList.toggle("btn-indicator-color-active");

});