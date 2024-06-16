function updateSizeDisplay() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sizeDisplay = document.getElementById('sizeDisplay');
    sizeDisplay.textContent = `Window Size: ${width}px x ${height}px`;
}

window.addEventListener('resize', updateSizeDisplay);
