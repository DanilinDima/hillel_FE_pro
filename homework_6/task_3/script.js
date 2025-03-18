function removeElement(arr, item) {
    if (!typeof item === "number" || !typeof arr === "object") {
        return "Incorrect input data";
    } else {
        let index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4); // [1, 3, 6, 2, 5, 7]

console.log(array); 