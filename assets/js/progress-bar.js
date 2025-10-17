document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');
  const postEnd = document.querySelector('.post-end');
  if (!progressBar || !postEnd) return;

  const postEndPosition = postEnd.getBoundingClientRect().top + window.scrollY;
  const viewportHeight = window.innerHeight;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const maxScroll = postEndPosition - viewportHeight;
    const percent = Math.min((scrollTop / maxScroll) * 100, 100);

    progressBar.style.setProperty('--scrollAmount', `${percent}%`);
    progressBar.style.opacity = percent >= 100 ? '0' : '1';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', () => {
    const newPostEnd = postEnd.getBoundingClientRect().top + window.scrollY;
    updateProgress(newPostEnd);
  });

  updateProgress();
});
