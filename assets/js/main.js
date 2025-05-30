document.addEventListener('DOMContentLoaded', () => {
  // Carousel
  const carousel = document.querySelector('.carousel-wrapper');
  const dots = document.querySelectorAll('.progress-dot');

  if (carousel && dots.length > 0) {
    const updateProgress = () => {
      const scrollPercentage = carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
      const activeIndex = Math.round(scrollPercentage);
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    carousel.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial state
  }

  // Nav Link Section highlighting
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = `#${entry.target.id}`;
        navLinks.forEach(link => {
          link.classList.toggle('active-section', link.getAttribute('href') === targetId);
        });
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));

  // Scroll to section
  document.querySelectorAll('.nav-links a, .scroll-arrow').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contact Popup
  const contactPopup = document.getElementById('contactPopup');
  const closePopup = document.getElementById('closePopup');
  
  // Ensure compatibility with all pages by checking for elements first
  if (contactPopup) {
    // More robust event delegation for contact buttons
    document.body.addEventListener('click', (e) => {
      // Find the clicked element or its closest parent with relevant classes
      const target = e.target.closest('.contact-btn, .contact-link');
      
      if (target) {
        e.preventDefault();
        // Make popup visible
        contactPopup.style.display = 'flex';
        
        // Log for debugging
        console.log('Contact popup triggered');
      }
    });

    // Close popup when clicking the X
    if (closePopup) {
      closePopup.addEventListener('click', () => {
        contactPopup.style.display = 'none';
      });
    }

    // Close popup when clicking outside
    contactPopup.addEventListener('click', (e) => {
      if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
      }
    });
  } else {
    console.warn('Contact popup element not found in DOM');
  }

  // Project cards touch interaction
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Remove focus from other cards
      projectCards.forEach(c => {
        if (c !== card) c.classList.remove('is-focused');
      });
      // Toggle focus on clicked card
      card.classList.toggle('is-focused');
    });
  });

  // Remove focus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.project-card')) {
      projectCards.forEach(card => card.classList.remove('is-focused'));
    }
  });
});