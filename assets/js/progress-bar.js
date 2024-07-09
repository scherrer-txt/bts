let processScroll = () => {
  let docElem = document.documentElement,
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      postEnd = document.querySelector('.post-end'),
      postEndPosition = postEnd.getBoundingClientRect().top + window.scrollY,
      scrollPercent;

  // Calculate the scroll percentage relative to the post-end element
  if (scrollTop + window.innerHeight >= postEndPosition) {
      scrollPercent = '100%';
  } else {
      scrollPercent = (scrollTop / (postEndPosition - window.innerHeight)) * 100 + '%';
  }

  // Update progress bar width
  document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);

  // Toggle visibility of progress bar
  if (scrollTop + window.innerHeight >= postEndPosition) {
      document.getElementById("progress-bar").style.opacity = '0';
  } else {
      document.getElementById("progress-bar").style.opacity = '1';
  }
};

document.addEventListener('scroll', processScroll);
