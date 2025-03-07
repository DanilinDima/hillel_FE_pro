let str1 = "First string";
let str2 = "Second string";
let str3 = "Third string";

let randomString = [str1, str2, str3].sort(() => Math.random() - 0.5);

console.log(`Strings in random order: ${randomString.join(", ")}`); 