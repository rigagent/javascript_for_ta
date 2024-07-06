// Subtask #1

function checkFirstCharCase(str) {
    const regex = /^[A-Z]/;
    if (regex.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

checkFirstCharCase('regexp');
checkFirstCharCase('RegExp');



// Subtask #2

function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}

console.log(checkEmail("Qmail2@gmail.com"));
console.log(checkEmail("invalid-email@"));
console.log(checkEmail("not_an_email.com"));
console.log(checkEmail("  whitespace@domain.com"));
console.log(checkEmail("whitespace@domain.com  "));
console.log(checkEmail("  whitespace@domain.com  "));



// Subtask #3

function findPattern(text) {
    const regex = /d[b]+d?/gi;
    return text.match(regex) || [];
}

const result = findPattern("cdbBdbsbz");
console.log(result); // Output: ["dbBd", "bB", "d"]



// Subtask #4

function swapSubstrings(text) {
    const regex = /(\w+)\s+(\w+)/;
    const result = text.replace(regex, '$2, $1');
    return result;
}

const text = " Java Script ";
const swappedText = swapSubstrings(text);
console.log(swappedText);



// Subtask #5

function validateBankCardNumber(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
}

const cardNumber1 = '1234-5678-9012-3456';
console.log(validateBankCardNumber(cardNumber1));

const cardNumber2 = '1234567890123456';
console.log(validateBankCardNumber(cardNumber2));



// Subtask #6

function checkEmail(email) {
    const regex = /^[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\-.]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');



// Subtask #7

function checkLogin(input) {
    if (input.length < 2 || input.length > 10) {
        return false;
    }
    if (!/^[a-zA-Z][a-zA-Z0-9.]*$/.test(input)) {
        return false;
    }
    return true;
}

console.log(checkLogin('a'));
console.log(checkLogin('qwe5t2ddfg6h'));
console.log(checkLogin('qwe'));
console.log(checkLogin('1qw8e'));
console.log(checkLogin('q1w8e'));
console.log(checkLogin('q1&w8e'));
console.log(checkLogin('q1.5w8e'));
console.log(checkLogin('q1.5&w8e'));
