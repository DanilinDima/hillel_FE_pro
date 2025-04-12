const randomNumber = Math.floor(Math.random() * 9) + 1;

const imagePath = `images/${randomNumber}.jpeg`;

document.getElementById('random-image').src = imagePath;