/* ================================================
   SAKSHI ARYAL - PHYSIOTHERAPIST PORTFOLIO
   Interactive JavaScript Functionality
   ================================================ */

// ================================================
// SMOOTH SCROLLING & NAVBAR BEHAVIOR
// ================================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    // Navbar background on scroll
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    // Reveal animations on scroll
    revealOnScroll();
});

// Smooth scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ================================================
// MOBILE NAVIGATION
// ================================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================================
// TYPING ANIMATION IN HERO
// ================================================

const typingText = document.querySelector('.typing-text');
const professions = [
    'Licensed Physiotherapist',
    'Movement Specialist',
    'Rehabilitation Expert',
    'Clinical Physiotherapist',
    'Musculoskeletal Expert'
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
        typingText.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentProfession.length) {
        // Pause before deleting
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation
setTimeout(typeEffect, 1000);

// ================================================
// TIMELINE TABS
// ================================================

const tabBtns = document.querySelectorAll('.tab-btn');
const timelines = document.querySelectorAll('.timeline');

tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and timelines
        tabBtns.forEach(b => b.classList.remove('active'));
        timelines.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked button and corresponding timeline
        btn.classList.add('active');
        timelines[index].classList.add('active');
    });
});

// ================================================
// SCROLL REVEAL ANIMATIONS
// ================================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .testimonial-card, .timeline-item, .about-content, .contact-content');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal styles
document.querySelectorAll('.service-card, .testimonial-card, .timeline-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

// ================================================
// CONTACT FORM VALIDATION & SUBMISSION
// ================================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    
    let isValid = true;
    
    // Validate Name
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter a valid name');
        isValid = false;
    }
    
    // Validate Email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Phone (optional but if provided, should be valid)
    const phoneInput = document.getElementById('phone');
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (phoneInput.value.trim() && !phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate Service
    const serviceInput = document.getElementById('service');
    if (!serviceInput.value) {
        showError(serviceInput, 'Please select a service');
        isValid = false;
    }
    
    // Validate Message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please enter a message (at least 10 characters)');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        submitForm();
    }
});

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
}

function submitForm() {
    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('active');
    
    // Simulate sending (in real implementation, you would send data to a server)
    console.log('Form submitted with data:', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'grid';
        formSuccess.classList.remove('active');
    }, 5000);
}

// Real-time validation feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        // Remove error state when user starts typing
        const formGroup = input.closest('.form-group');
        if (formGroup.classList.contains('error')) {
            formGroup.classList.remove('error');
        }
    });
});

function validateField(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    
    if (input.hasAttribute('required') && !input.value.trim()) {
        showError(input, 'This field is required');
        return false;
    }
    
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value.trim() && !emailRegex.test(input.value.trim())) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

// ================================================
// ANIMATED COUNTERS (Stats in Hero)
// ================================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    const hasPlus = element.textContent.includes('+');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
        }
    }, 16);
}

// Initialize counters when hero section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                animateCounter(counter, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    observer.observe(heroSection);
}

// ================================================
// PARALLAX EFFECT
// ================================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ================================================
// BOOK APPOINTMENT MODAL (Enhanced functionality)
// ================================================

// If you want to open a modal instead of scrolling to contact form,
// you can add this functionality
const bookAppointmentBtns = document.querySelectorAll('a[href="#contact"]');

bookAppointmentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Scroll to contact form
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const navHeight = navbar.offsetHeight;
        
        window.scrollTo({
            top: contactSection.offsetTop - navHeight,
            behavior: 'smooth'
        });
        
        // Focus on name input after scrolling
        setTimeout(() => {
            document.getElementById('name').focus();
        }, 800);
    });
});

// ================================================
// ACTIVE NAV LINK ON SCROLL
// ================================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ================================================
// PAGE LOAD ANIMATIONS
// ================================================

window.addEventListener('load', () => {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Trigger initial scroll reveal
    revealOnScroll();
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ================================================
// TESTIMONIALS ROTATION (Optional)
// ================================================

// You can add automatic testimonial rotation if desired
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.style.order = (index - testimonialIndex + testimonialCards.length) % testimonialCards.length;
    });
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
}

// Uncomment to enable auto-rotation every 5 seconds
// setInterval(rotateTestimonials, 5000);

// ================================================
// DOWNLOAD RESUME FUNCTIONALITY
// ================================================

const downloadResumeBtn = document.querySelector('a[download]');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        // You can track downloads or add custom behavior here
        console.log('Resume download initiated');
        
        // If the PDF doesn't exist, you might want to prevent default
        // and show a message or generate the PDF dynamically
        // e.preventDefault();
        // alert('Resume will be available soon!');
    });
}

// ================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.service-card, .testimonial-card, .about-content, .timeline-item').forEach(element => {
    fadeInObserver.observe(element);
});

// ================================================
// PREVENT CONTEXT MENU ON IMAGES (Optional Security)
// ================================================

// Uncomment if you want to prevent right-click on images
/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
*/

// ================================================
// CONSOLE MESSAGE
// ================================================

console.log('%c👋 Welcome to Sakshi Aryal\'s Portfolio! ', 'background: linear-gradient(135deg, #4A5FBF 0%, #8B5CF6 100%); color: white; font-size: 16px; padding: 10px 20px; border-radius: 8px;');
console.log('%cLooking to hire a skilled physiotherapist? Let\'s connect!', 'color: #4A5FBF; font-size: 14px; font-weight: 600;');

// ================================================
// ERROR HANDLING
// ================================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

// ================================================
// ACCESSIBILITY ENHANCEMENTS
// ================================================

// Keyboard navigation for cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// Focus visible for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ================================================
// PERFORMANCE OPTIMIZATION
// ================================================

// Debounce scroll events for better performance
let scrollTimeout;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Your scroll-dependent code here
        if (scrollTop > lastScrollTop) {
            // Scrolling down
        } else {
            // Scrolling up
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Smooth scroll utility
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop - navbar.offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Format phone numbers
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// ================================================
// INITIALIZATION
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website initialized successfully!');
    
    // Add any initialization code here
    updateActiveNavLink();
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// ================================================
// SERVICE WORKER (Optional for PWA)
// ================================================

// Uncomment to register service worker for offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/