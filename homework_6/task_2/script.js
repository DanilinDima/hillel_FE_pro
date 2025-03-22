let inputData = [1, 2, "x", 3, "JS", true, 4];

function meanOfNumbers(arr) {
    let sum = 0;
    let count = 0;
  
    for (let i of arr) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

console.log(meanOfNumbers(inputData));


function func(a, b) {
    return a + b;
}

let res = func (b=1, a=2);
console.log(res);