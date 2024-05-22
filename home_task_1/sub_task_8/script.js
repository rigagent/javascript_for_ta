function getSecondsFromMinute() {
    return 60;
}

function getSecondsFromHour() {
    return getSecondsFromMinute() * 60;
}

function getSecondsFromDay() {
    return getSecondsFromHour() * 24;
}

function getSecondsFromMonth() {
    return getSecondsFromDay() * 30;
}

let secondsInHour = getSecondsFromHour();
let secondsInDay = getSecondsFromDay();
let secondsInMonth = getSecondsFromMonth();

document.write(`1 hour has ${secondsInHour} seconds.<br>`);
document.write(`1 day has ${secondsInDay} seconds.<br>`);
document.write(`1 month has ${secondsInMonth} seconds.<br>`);
