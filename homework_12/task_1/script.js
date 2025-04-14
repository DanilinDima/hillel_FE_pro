let inputButton = document.querySelector('#input-button');
let redirectButton = document.querySelector('#redirect-button');
let redirectUrl ="";

function getUserUrl() {
    let url = prompt('Enter URL where you want to go');
    if (url === null || url.trim() === '') {
        alert('URL is required');
        return;
    };
    if (!url.startsWith('http')) {
        url = 'http://' + url;
    }
    return url.trim();
}

inputButton.addEventListener('click', function () {
    redirectUrl = getUserUrl();
});

redirectButton.addEventListener('click', function () {
    if (redirectUrl !== '' && redirectUrl !== null && redirectUrl !== undefined) {
        window.location.href = redirectUrl;
    } else {
        alert('Please enter a URL first');
    }});