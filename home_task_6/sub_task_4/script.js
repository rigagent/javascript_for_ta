// Method 1

function showModal() {
  let list = document.getElementById('list').getElementsByTagName('li');
  let result = [];
  result.push(list[0].textContent);
  result.push(list[list.length - 1].textContent);
  result.push(list[1].textContent);
  result.push(list[3].textContent);
  result.push(list[2].textContent);
  let modal = document.getElementById('modal');
  let resultText = document.getElementById('result');
  resultText.textContent = result.join(', ');
  modal.style.display = 'block';
}


// // Method 2

// function showModal() {
//   let list = document.getElementById('list').getElementsByTagName('li');
//   let indices = [0, list.length - 1, 1, 3, 2];
//   let result = indices.map(index => list[index].textContent);
//   let resultText = document.getElementById('result');
//   resultText.textContent = result.join(', ');
// }
