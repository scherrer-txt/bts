document.addEventListener('DOMContentLoaded', function() {
	const galleryItems = document.querySelectorAll('.gallery-single');
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.getElementById('lightbox-img');
  
	galleryItems.forEach(item => {
	  item.addEventListener('click', function() {
		const imgSrc = item.getAttribute('data-full');
		lightboxImg.src = imgSrc;
		lightbox.classList.add('active');
		document.body.style.overflow = 'hidden'; // Disable scroll
	  });
	});
  
	lightbox.addEventListener('click', function(event) {
	  if (event.target !== lightboxImg) {
		lightbox.classList.remove('active');
		lightboxImg.classList.remove('zoomed'); // Remove zoom class
		lightboxImg.style.transform = 'scale(1)'; // Reset transform
		lightboxImg.removeEventListener('mousemove', panImage); // Remove pan event listener
		document.body.style.overflow = ''; // Enable scroll
	  }
	});
  
	lightboxImg.addEventListener('click', function(event) {
	  event.stopPropagation(); // Prevent the lightbox from closing
	  if (!lightboxImg.classList.contains('zoomed')) {
		lightboxImg.classList.add('zoomed');
		lightboxImg.addEventListener('mousemove', panImage);
		lightboxImg.style.transform = 'scale(2)';
	  } else {
		lightboxImg.classList.remove('zoomed');
		lightboxImg.removeEventListener('mousemove', panImage);
		lightboxImg.style.transform = 'scale(1)';
	  }
	});
  
	function panImage(event) {
	  const rect = lightboxImg.getBoundingClientRect();
	  const x = event.clientX - rect.left; // x position within the image
	  const y = event.clientY - rect.top; // y position within the image
  
	  const xPercent = (x / rect.width) * 100;
	  const yPercent = (y / rect.height) * 100;
  
	  lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
	}
  });
  