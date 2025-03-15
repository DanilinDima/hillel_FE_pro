let num = +prompt("Enter an integer:");

if (!Number.isInteger(num) || num < 2) {
    alert("Please enter an integer greater than 1.");
} else {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    alert(isPrime ? "The number is prime." : "The number is not prime.");
}