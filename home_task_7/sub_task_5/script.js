let pressButton = document.getElementById('pressButton');
let messageElement = document.getElementById('message');

pressButton.addEventListener('click', function() {
    messageElement.textContent = "I was pressed!";
});

pressButton.addEventListener('mouseover', function() {
    messageElement.textContent = "Mouse is on me!";
});

pressButton.addEventListener('mouseout', function() {
    messageElement.textContent = "Mouse is not on me!";
});
