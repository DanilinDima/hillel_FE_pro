function sumNumbers() {
    let sumResult = 0;
    function innerSum(num) {
        if (typeof num !== 'number') {
            return 'Please provide a number';
        }
        sumResult += num;
        return sumResult;
    }
    return innerSum;
}

let sum = sumNumbers();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));


