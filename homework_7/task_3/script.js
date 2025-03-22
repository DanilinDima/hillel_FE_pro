function getNumberAbove100() {
    let userInput
    for (let i = 0; i < 10; i++) {
        userInput = prompt('Enter a number > 100').trim();
        if (Number(userInput) <= 100 && userInput !== null) {
            alert('Please enter a number greater than 100');
            continue;
        } else {
            break;
        }
    }
    if (userInput === null) {
        console.log('User cancelled the prompt');
        return;
    } else {
        console.log('User entered: ', userInput);
        return;
    }
}

getNumberAbove100();