let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let link = document.querySelector('a');

button1.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'white';
});
