function sum(numberA) {
    return function (numberB) {
        if (typeof numberA !== 'number' || typeof numberB !== 'number') {
            return 'Error! Please provide a number';
        }
        return numberA * numberB;
    }
}

let res = sum(2)(3);
console.log(res);