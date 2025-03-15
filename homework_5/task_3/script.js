let N = +prompt("Enter an integer N:");

if (!Number.isInteger(N) || N < 1) {
    alert("Please enter a valid positive integer.");
} else {
    let result = [];
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            result.push(i);
        } else {
            break; 
        }
    }
    alert(`Numbers: ${result.join(", ")}`);
}