let dropdown = document.getElementById('dropdown');
let deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', function() {
    let selectedOption = dropdown.options[dropdown.selectedIndex];
    if (selectedOption) {
        dropdown.removeChild(selectedOption);
    }
});
