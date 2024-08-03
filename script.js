let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let slideNumber = document.getElementById("slide-number");
    if (n > slides.length) { slideIndex = 1 } // Loop back to the first slide
    if (n < 1) { slideIndex = slides.length } // Go to the last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    slideNumber.textContent = slideIndex; // Update slide number display
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Initialize event listeners for navigation arrows
document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});
document.query
