let dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function getEvenNumbers(arr) {
    if (Array.isArray(arr)) {
        let result = arr.filter(nun => nun % 2 === 0);
        return result;
    }
    else {
        console.log("Please provide an array");
        return;
    }
}

console.log(getEvenNumbers(dataArr));

