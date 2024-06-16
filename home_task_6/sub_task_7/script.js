// Create the elements
let body = document.body;
let main = document.createElement('main');
let div = document.createElement('div');
let p = document.createElement('p');

// Set attributes
main.className = 'mainClass check item';
div.id = 'myDiv';
p.textContent = 'First paragraph';

// Construct the structure
div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
