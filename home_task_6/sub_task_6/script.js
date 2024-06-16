let message1 = prompt("Enter the first message:");
let message2 = prompt("Enter the second message:");

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

input1.value = message1;
input2.value = message2;

let temp = input1.value;
input1.value = input2.value;
input2.value = temp;
