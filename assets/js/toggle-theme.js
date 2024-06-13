window.addEventListener('DOMContentLoaded', () => {
  const configTheme = document.documentElement.getAttribute('data-config-theme') || 'dark'; // Default to 'dark' if no configTheme
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme || configTheme;
  const button = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    button.setAttribute('aria-checked', theme === 'dark' ? 'false' : 'true');
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    button.classList.toggle('moon', theme === 'dark');
    button.classList.toggle('sun', theme === 'light');
    localStorage.setItem('theme', theme);
  }

  // Apply initial theme
  setTheme(initialTheme);

  // Add event listener for theme toggle
  button.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    transition();
    setTheme(newTheme);
  });

  // Function to handle theme transition
  function transition() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  }
});