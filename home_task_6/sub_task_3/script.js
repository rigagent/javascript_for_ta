let paragraphs = document.querySelectorAll("#text p");
paragraphs.forEach(function(paragraph, index) {
    console.log(`Selector text ${index}: ${paragraph.textContent}`);
});
