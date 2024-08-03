let slideIndex = 1; // Initialize slide index

// Function to show slides based on index
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Wrap around to the first slide if at the end
    if (n > slides.length) {slideIndex = 1}
    // Wrap around to the last slide if before the first
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Reset all dots to default color
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex-1].style.display = "block";  

    // Highlight the current dot
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

// Function to move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Initialize the slideshow
showSlides(slideIndex);

// Remove auto-slide interval if not needed
// setInterval(function() {
//     plusSlides(1);
// }, 5000); // Change slide every 5 seconds
