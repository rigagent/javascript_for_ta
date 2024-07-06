function getCircleLength(radius) {
    return parseFloat((2 * Math.PI * radius).toFixed(1));
}

function getCircleArea(radius) {
    return parseFloat((Math.PI * radius ** 2).toFixed(2));
}

module.exports = { getCircleLength, getCircleArea };
