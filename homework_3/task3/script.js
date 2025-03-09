let number;

do {
    number = prompt("Enter a five-digit number:");

    if (!/^\d{5}$/.test(number)) {
        alert("Please enter a valid five-digit number.");
    }
} while (!/^\d{5}$/.test(number));

console.log(number.split("").join(" "));