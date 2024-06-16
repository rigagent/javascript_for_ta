let imgElement = document.querySelector("img.image");
if (imgElement) {
    setTimeout(function() {
        imgElement.src = "pics/cat.jpg";
    }, 5000);
} else {
    console.error("Element with class 'image' not found.");
}
  