document.addEventListener('DOMContentLoaded', function() {
  const tocId = 'toc'; // The ID of your TOC element
  const tocElement = document.getElementById(tocId); // Get the TOC element
  const headings = document.querySelectorAll('.page-content h2, .page-content h3, .page-content h4, .page-content h5, .page-content h6');

  if (!tocElement) {
    console.warn(`Element with ID "${tocId}" not found.`);
    return;
  }

  headings.forEach(heading => {
    const anchor = document.createElement('a');
    anchor.href = `#${tocId}`;
    anchor.innerHTML = '\u2192'; // Upwards arrow character
    anchor.classList.add('anchor-marker');
    
    // Insert the anchor before the heading text
    heading.insertBefore(anchor, heading.firstChild);
    heading.classList.add('anchor-heading');

    anchor.addEventListener('click', function(event) {
      event.preventDefault();

      // Calculate the scroll position
      const tocRect = tocElement.getBoundingClientRect();
      const scrollToPosition = tocRect.top + window.pageYOffset - (5 * parseFloat(getComputedStyle(document.documentElement).fontSize)); //5rem

      // Scroll to the adjusted position immediately
      window.scrollTo({
        top: scrollToPosition,
        left: 0,
        behavior: 'auto'
      });
    });
  });

  // Function to update anchor position based on screen width
  function updateAnchorPosition() {
    const isMobile = window.innerWidth <= 800;
    headings.forEach(heading => {
      const anchor = heading.querySelector('.anchor-marker');
      if (isMobile) {
        // Move the anchor to the end for mobile
        heading.appendChild(anchor);
      } else {
        // Move the anchor to the beginning for desktop
        heading.insertBefore(anchor, heading.firstChild);
      }
    });
  }

  // Initial update on page load
  updateAnchorPosition();

  // Update anchor position on window resize
  window.addEventListener('resize', updateAnchorPosition);
});
