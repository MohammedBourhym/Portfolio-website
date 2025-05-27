document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      // Toggle the expanded state of the menu
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle the 'expanded' class to show or hide the menu
      navLinks.classList.toggle('expanded');
      
      // Toggle the 'active' class for the hamburger icon
      hamburger.classList.toggle('active');
    });
  }
  
  // More projects button functionality
  const moreProjectsBtn = document.querySelector('#moreProjects');
  if (moreProjectsBtn) {
    moreProjectsBtn.addEventListener('click', () => {
      const contenedor = document.querySelector('#containerProjects');
      if (contenedor) {
        contenedor.classList.remove('h-[150vh]');
        contenedor.classList.remove('h-auto');
        moreProjectsBtn.classList.add('hidden');
      }
    });
  }
});
  
  