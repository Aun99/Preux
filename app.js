 // DOM Elements
        const themeToggle = document.getElementById('themeToggle');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.querySelector('.sidebar');
        const body = document.body;
        const navLinks = document.querySelectorAll('.nav-link');
        const serviceCards = document.querySelectorAll('.service-card');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Sidebar Toggle
        sidebarToggle.addEventListener('click', () => {
            body.classList.toggle('sidebar-open');
            
            // Change icon based on state
            if (body.classList.contains('sidebar-open')) {
                sidebarToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Theme Toggle
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? 
                '<i class="fas fa-moon"></i><span class="theme-text">Dark Mode</span>' : 
                '<i class="fas fa-sun"></i><span class="theme-text">Light Mode</span>';
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            themeToggle.innerHTML = savedTheme === 'light' ? 
                '<i class="fas fa-moon"></i><span class="theme-text">Dark Mode</span>' : 
                '<i class="fas fa-sun"></i><span class="theme-text">Light Mode</span>';
        }

        // Navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active link
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');
                
                // Close sidebar on mobile
                if (window.innerWidth < 1200) {
                    body.classList.remove('sidebar-open');
                    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Scroll to section
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Portfolio filtering
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(button => button.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter items
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Service card animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        serviceCards.forEach(card => {
            observer.observe(card);
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Initialize animations on page load
        window.addEventListener('DOMContentLoaded', () => {
            // Set active nav link based on scroll position
            const sections = document.querySelectorAll('section');
            
            window.addEventListener('scroll', () => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1200 && 
                !sidebar.contains(e.target) && 
                e.target !== sidebarToggle) {
                body.classList.remove('sidebar-open');
                sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
















        // ===========================

        // After 4s (10 rotations), show text beside logo
    setTimeout(() => {
        document.getElementById('preuxText').style.opacity = '1';
    }, 4000);
    
    // After total 10s (4s rotation + 6s pause), remove intro screen
    setTimeout(() => {
      document.getElementById('logoIntro').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
    }, 10000);



    setTimeout(() => {
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.opacity = '1';
      letter.style.transform = 'translateY(0)';
    }, index * 170); // 150ms delay between letters
  });
}, 4000); // After logo finishes spinning 