let header = document.querySelector('h1');
header.style.backgroundColor = 'green';

let firstParagraph = document.querySelector('#myDiv p:first-of-type');
firstParagraph.style.fontWeight = 'bold';

let secondParagraph = document.querySelector('#myDiv p:nth-of-type(2)');
secondParagraph.style.color = 'red';

let thirdParagraph = document.querySelector('#myDiv p:nth-of-type(3)');
thirdParagraph.style.textDecoration = 'underline';

let fourthParagraph = document.querySelector('#myDiv p:last-of-type');
fourthParagraph.style.fontStyle = 'italic';

let listItems = document.querySelectorAll('#myList li');
let horizontalText = '';
listItems.forEach(function(li) {
  horizontalText += li.textContent.trim();
});
listItems[0].parentNode.innerHTML = horizontalText;

let invisibleSpan = document.querySelector('span');
invisibleSpan.style.visibility = 'hidden';
