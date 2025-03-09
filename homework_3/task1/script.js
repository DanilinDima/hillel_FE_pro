// Primitive types
let undefinedVar;               // Undefined
let nullVar = null;             // Null
let booleanVar = true;          // Boolean
let numberVar = 42;             // Number 
let floatVar = 3.14;            // Number 
let stringVar = "Hello";        // String
let symbolVar = Symbol("id");   // Symbol 
let bigIntVar = BigInt(12345678901234567890n); // BigInt 

// Object types
let objectVar = {};             // Object
let arrayVar = [];              // Array 
let functionVar = function(){}; // Function


console.log(typeof undefinedVar); // "undefined"
console.log(typeof nullVar);      // "object" 
console.log(typeof booleanVar);   // "boolean"
console.log(typeof numberVar);    // "number"
console.log(typeof floatVar);     // "number"
console.log(typeof stringVar);    // "string"
console.log(typeof symbolVar);    // "symbol"
console.log(typeof bigIntVar);    // "bigint"

console.log(typeof objectVar);    // "object"
console.log(typeof arrayVar);     // "object"
console.log(typeof functionVar);  // "function"

