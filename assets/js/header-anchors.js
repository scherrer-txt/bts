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
    anchor.innerHTML = ' \uFFEA';
    anchor.style.fontFamily = 'inherit';
    anchor.style.fontSize = 'inherit';
    anchor.style.marginLeft = 'inherit';
    anchor.style.textAlign = 'inherit';
    anchor.style.verticalAlign = 'text-top';
    anchor.style.cursor = 'pointer';
    heading.appendChild(anchor);

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
});