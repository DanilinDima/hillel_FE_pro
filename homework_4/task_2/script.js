function numberChecker() {
    const num = prompt('Enter a 3 digits number');
    if (num && /^\d{3}$/.test(num)) {
        let [a, b, c] = num.split("");
        if (a === b && b === c) {
            alert("All digits are the same.");
        } else if (a === b || b === c || a === c) {
            alert("At least two digits are the same.");
        } else {
            alert("All digits are different.");
        }
    } else {
        alert('Please enter a valid 3 digits number');
    }
    return;
}

numberChecker();

