document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const parallax = document.querySelector('.post-meta-background');
    const maxScale = 1.1; // Set the maximum scale limit
    const scaleValue = 1 + (scrollTop / 5000); // Adjust the divisor to change the speed of scaling
    const maxGrayscale = 1; // Maximum grayscale value (100%)
    const grayscaleValue = Math.min(scrollTop / 250, maxGrayscale); // Adjust the divisor to change the speed of grayscale

    if (scaleValue <= maxScale) {
        parallax.style.transform = `scale(${scaleValue})`;
    } else {
        parallax.style.transform = `scale(${maxScale})`;
    }

    parallax.style.filter = `grayscale(${grayscaleValue})`;
    parallax.style.transformOrigin = 'top center'; // Set the transform origin to top center
});

// Apply smooth transition when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    const parallax = document.querySelector('.post-meta-background');
    parallax.style.transition = 'transform 0.3s ease-in-out, filter 0.3s ease-in-out'; // Smooth transition for both transform and filter
});
