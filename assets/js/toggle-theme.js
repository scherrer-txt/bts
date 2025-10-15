document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  // Přečti uložené téma nebo výchozí dark
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  // Nastav počáteční téma
  root.setAttribute('data-theme', initial);

  // Přepínač
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.classList.add('transition');
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTimeout(() => root.classList.remove('transition'), 300);
  });
});
