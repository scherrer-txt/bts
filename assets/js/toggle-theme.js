document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  const stored = localStorage.getItem('theme');
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = stored || systemPref;

  root.setAttribute('data-theme', theme);

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.classList.add('transition');
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTimeout(() => root.classList.remove('transition'), 250);
  });
});
