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
		document.body.style.overflow = ''; // Enable scroll
	  }
	});
  });
  