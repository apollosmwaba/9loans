  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          navLinks.classList.remove('active');
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          
          const target = document.querySelector(this.getAttribute('href'));
          
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 70,
                  behavior: 'smooth'
              });
              
              // Update active menu item
              document.querySelectorAll('.nav-links a').forEach(link => {
                  link.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });
  
  // Contact Form Submission
  const loanForm = document.getElementById('loanForm');
  
  loanForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally send the form data to a server
      // For demo purposes, we'll just show an alert
      alert('Thank you for contacting us! We will get back to you shortly.');
      loanForm.reset();
  });
  
  // Scroll Animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });
  
  // Observe section titles
  document.querySelectorAll('.section-title').forEach(title => {
      observer.observe(title);
  });
  
  // Observe rate cards
  document.querySelectorAll('.rate-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      observer.observe(card);
  });
  
  // Observe about content, terms content, contact form and info
  observer.observe(document.querySelector('.about-content'));
  observer.observe(document.querySelector('.terms-content'));
  observer.observe(document.querySelector('.contact-form'));
  observer.observe(document.querySelector('.contact-info'));
  
  // Change active menu item on scroll
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      // Get all sections
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              document.querySelectorAll('.nav-links a').forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('data-section') === sectionId || 
                      (sectionId === 'loan-rates' && link.getAttribute('data-section') === 'home') ||
                      (sectionId === 'about' && link.getAttribute('data-section') === 'home')) {
                      link.classList.add('active');
                  }
              });
          }
      });
  });