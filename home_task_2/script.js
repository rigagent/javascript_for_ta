// Subtask #1

let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();
console.log(res1);
console.log(typeof res1);

let res2 = (x === 1) + y.toString();
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = x / "a";
console.log(res4);
console.log(typeof res4);



// Subtask #2

let number = prompt("Enter a number:");

if (number > 0 && number % 7 == 0) {
    console.log(`The number "${number}" meets the initial requirements: is a positive and a multiple of 7.`);
} else {
    console.log(`The number "${number}" doesn't meet the initial requirements.`);
}



// Subtask #3

let myArray = [];

myArray[0] = 42;
myArray[1] = "Test!!!";
myArray[2] = true;
myArray[3] = null;

console.log(`Number of array elements: ${myArray.length}`);

let userValue = prompt("Enter any value:");
myArray[4] = userValue;
console.log("The fifth array element is: " + myArray[4]);

myArray = myArray.slice(1);
console.log(`Array after deleting the first element: ${myArray}`);



// Subtask #4
let citiesList = [" Rome ", " Lviv ", " Warsaw "];
let citiesString = citiesList.join(" * ");
console.log(citiesString);



// Subtask #5
let isAdult = prompt("Please enter your age:");

if (isAdult >= 18) {
    console.log("You have reached the age of majority.");
} else {
    console.log("You are still too young.");
}



// Subtask #6
let a = parseFloat(prompt("Enter the length of side 'a' in triangle"));
let b = parseFloat(prompt("Enter the length of side 'b' in triangle"));
let c = parseFloat(prompt("Enter the length of side 'c' in triangle"));

let semiperimeter = (a + b + c) / 2;
let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
console.log(`The area of the triangle is: ${area.toFixed(3)}`);

let isRightTriangle = (a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a);
if (isRightTriangle) {
    console.log("The triangle is a right triangle.");
} else {
    console.log("The triangle is not a right triangle.");
}



// Subtask #7
let currentTime = new Date().getHours();

if (currentTime >= 23 || currentTime < 5) {
    console.log("Good night");
} else if (currentTime >= 5 && currentTime < 11) {
    console.log("Good morning");
} else if (currentTime >= 11 && currentTime < 17) {
    console.log("Good day");
} else if (currentTime >= 17 && currentTime < 23) {
    console.log("Good evening");
}

switch (true) {
    case (currentTime >= 23 || currentTime < 5):
        console.log("Good night");
        break;
    case (currentTime >= 5 && currentTime < 11):
        console.log("Good morning");
        break;
    case (currentTime >= 11 && currentTime < 17):
        console.log("Good day");
        break;
    case (currentTime >= 17 && currentTime < 23):
        console.log("Good evening");
        break;
}
