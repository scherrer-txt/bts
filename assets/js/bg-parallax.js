document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const parallax = document.querySelector('.post-meta-background');
    const maxScale = 1.15; // Set the maximum scale limit
    let scaleValue;
    const maxGrayscale = 1; // Maximum grayscale value (100%)
    const grayscaleValue = Math.min(scrollTop / 400, maxGrayscale); // Adjust the divisor to change the speed of grayscale
    const postEnd = document.querySelector('.post-end');

    // Check if the post-end element is in the viewport
    const postEndRect = postEnd.getBoundingClientRect();
    const isInViewport = (
        postEndRect.top >= 0 &&
        postEndRect.left >= 0 &&
        postEndRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        postEndRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    if (window.innerWidth <= 800) {
        // For small screens, only apply grayscale effect
        parallax.style.filter = `grayscale(${grayscaleValue})`;
        return;
    }

    if (scrollTop <= 0) {
        scaleValue = 1; // Reset scale value to 1 if at or above the top of the page
    } else {
        scaleValue = Math.min(1 + (scrollTop / 5000), maxScale); // Calculate scale value within range
    }

    // Apply scaling and grayscale transformations based on scroll position
    if (scrollTop <= postEnd.offsetTop && !isInViewport) {
        parallax.style.transform = `scale(${scaleValue})`;
        parallax.style.filter = `grayscale(${grayscaleValue})`;
        parallax.style.transformOrigin = 'down center'; // Set the transform origin to top center
    } else {
        // Reverse the effect
        const reverseScaleValue = Math.max(1, 1.08 - ((scrollTop - postEnd.offsetTop) / 9000));
        parallax.style.transform = `scale(${reverseScaleValue})`;
        parallax.style.filter = 'grayscale(1)';
    }
});

// Apply smooth transition when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    const parallax = document.querySelector('.post-meta-background');
    parallax.style.transition = 'transform 0.3s ease, filter 0.6s ease'; // Smooth transition for both transform and filter
});
