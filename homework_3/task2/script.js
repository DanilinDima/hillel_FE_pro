let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
let str3 = prompt("Enter third string:");

let randomString = [str1, str2, str3].sort(() => Math.random() - 0.5);

console.log(`Strings in random order: ${randomString.join(", ")}`); 
alert(`Strings in random order: ${randomString.join(", ")}`);