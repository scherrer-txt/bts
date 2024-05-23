document.addEventListener("DOMContentLoaded", function() {
    const indexContainers = document.querySelectorAll(".index-post");
  
    indexContainers.forEach(function(indexContainer) {
      const hoverBackground = indexContainer.querySelector(".index-post-background");
  
      indexContainer.addEventListener("mouseenter", function(event) {
        hoverBackground.style.transition = "transform 0.3s ease"; // Enable smooth transition
      });
  
      indexContainer.addEventListener("mousemove", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const rect = hoverBackground.getBoundingClientRect();
        const strength = 0.1; // Adjust this value to change the strength of the effect
        const offsetX = (mouseX - rect.left - rect.width / 2) * strength;
        const offsetY = (mouseY - rect.top - rect.height / 2) * strength;
        const transformValue = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
        hoverBackground.style.transformOrigin = "center";
        hoverBackground.style.transform = transformValue;
      });
  
      indexContainer.addEventListener("mouseleave", function(event) {
        hoverBackground.style.transition = "transform 0.5s ease"; // Slow transition back to original position
        hoverBackground.style.transform = ""; // Reset transformation
      });
    });
  });  