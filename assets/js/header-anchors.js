document.addEventListener('DOMContentLoaded', () => {
  const toc = document.getElementById('toc');
  if (!toc) return console.warn('TOC element not found.');

  const headings = document.querySelectorAll('.page-content h2, .page-content h3, .page-content h4, .page-content h5, .page-content h6');

  headings.forEach(h => {
    if (!h.querySelector('.anchor-marker')) {
      const a = document.createElement('a');
      a.href = '#toc';
      a.textContent = '→';
      a.className = 'anchor-marker';
      h.prepend(a);

      a.addEventListener('click', e => {
        e.preventDefault();
        const offset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 5rem
        const top = toc.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'auto' });
      });
    }
  });

  const updateAnchorPosition = () => {
    const mobile = window.innerWidth <= 800;
    headings.forEach(h => {
      const a = h.querySelector('.anchor-marker');
      if (!a) return;
      a.style.order = mobile ? '1' : '-1';
    });
  };

  updateAnchorPosition();
  window.addEventListener('resize', updateAnchorPosition, { passive: true });
});
