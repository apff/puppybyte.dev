document.addEventListener('DOMContentLoaded', () => {
  // Carousel
  const carousel = document.querySelector('.carousel-wrapper');
  const dots = document.querySelectorAll('.progress-dot');

  const updateProgress = () => {
    const scrollPercentage = carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
    const activeIndex = Math.round(scrollPercentage);
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  };

  carousel.addEventListener('scroll', updateProgress);
  updateProgress(); // Initial state

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
  const contactBtn = document.getElementById('contactBtn');
  const contactPopup = document.getElementById('contactPopup');
  const closePopup = document.getElementById('closePopup');
  const contactLink = document.querySelector('.contact-link');

  [contactBtn, contactLink].forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.style.display = 'flex';
      });
    }
  });

  closePopup.addEventListener('click', () => {
    contactPopup.style.display = 'none';
  });

  contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
      contactPopup.style.display = 'none';
    }
  });

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