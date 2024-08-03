let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 } // Loop back to the first slide
    if (n < 1) { slideIndex = slides.length } // Go to the last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Function to change slides
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Initialize event listeners for navigation arrows
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-
