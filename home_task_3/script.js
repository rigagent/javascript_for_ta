// Subtask #1

let array = [2, 3, 4, 5];
let product1 = 1;

for (let i = 0; i < array.length; i++) {
    product1 *= array[i];
}

console.log(`Product using 'for' loop: ${product1}`);

let product2 = 1;
let i = 0;

while (i < array.length) {
    product2 *= array[i];
    i++;
}

console.log(`Product using 'while' loop: ${product2}`);



// Subtask #2

for (let n = 0; n <= 15; n++) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
}



// Subtask #3

function genRandomArray(k) {
    let randomArray = [];
    for (let i = 0; i < k; i++) {
        randomArray.push(Math.floor(Math.random() * 500) + 1);
    }
    return randomArray;
}

console.log(genRandomArray(5));



// Subtask #4

function raiseToDegree(a, b) {
    return Math.pow(a, b);
}

let a = parseInt(prompt("Enter 'a':"));
let b = parseInt(prompt("Enter 'b':"));

console.log(`Result: ${raiseToDegree(a, b)}`);



// Subtask #5

function findMin() {
    let minValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        }
    }
    return minValue;
}

console.log(findMin(12, 14, 4, -4, 0.2));



// Subtask #6

function findUnique(givenArray) {
    let uniqueSet = new Set(givenArray);
    return uniqueSet.size === givenArray.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));



// Subtask #7

function lastElem(array, n=1) {
    if (n >= array.length) {
        return array;
    } else {
        return array.slice(-n);
    }
}

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));



// Subtask #8
function capitalizeFirstLetter(text) {
    let wordsList = text.split(" ");
    for (let word = 0; word < wordsList.length; word++) {
        wordsList[word] = wordsList[word].charAt(0).toUpperCase() + wordsList[word].slice(1);
    }
    return wordsList.join(" ");
}

let inputString = 'i love java script';
console.log(capitalizeFirstLetter(inputString));
