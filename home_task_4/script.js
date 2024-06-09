// Subtask #1

function calcRectangleArea(width, height) {
    try {
        let w = parseFloat(width);
        let h = parseFloat(height);
        
        if (isNaN(w) || isNaN(h)) {
            throw "Non-numeric parameters passed to the function";
        }
        let a = w * h;
        return a;
    } catch (error) {
        throw error;
    }
}

var width_input = prompt("Enter the width of the rectangle:");
var height_input = prompt("Enter the height of the rectangle:");
var area = calcRectangleArea(width_input, height_input);
alert(`The area of the rectangle is: ${area}`);



// Subtask #2

function checkAge() {
    try {
        var ageInput = prompt("Please enter your age:");
        if (ageInput === null) {
            throw new Error("The field is empty! Please enter your age.");
        }
        var age = parseInt(ageInput);
        if (isNaN(age)) {
            throw new Error("Please enter a valid numeric age.");
        }
        if (age < 14) {
            throw new Error("Sorry, you must be at least 14 years old to watch the movie.");
        }
        alert("Access granted! Enjoy watching the movie.");
    } catch (error) {
        alert(`Error massage: ${error.message}`);
    }
}

checkAge();



// Subtask #3

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }

    return months[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}



// Subtask #4

function showUser(id) {
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
    }
    return { id: id };
}

function showUsers(ids) {
    let result = [];
    for (var i = 0; i < ids.length; i++) {
        try {
            result.push(showUser(ids[i]));
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
    return result;
}

var users = showUsers([7, -12, 44, 22]);
console.log(users);

