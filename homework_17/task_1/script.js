class Calculator {
    constructor() {
        // this.number1 = number1;
        // this.number2 = number2;
        
    }
    add(number1, number2) {
        return number1 + number2;
    }
    subtract(number1, number2) {
        return number1 - number2;
    }
    multiply(number1, number2) {
        return number1 * number2;
    }
    divide(number1, number2) {
        if (number2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return number1 / number2;
    }   
}

const calc = new Calculator();


console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4