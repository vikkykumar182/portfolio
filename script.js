// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from('.hero-title, .hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out'
});

gsap.from('.floating-img img', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    ease: 'back.out(1.7)'
});
gsap.from('.float-element', {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 0.6,
    ease: 'back.out(1.7)'
});
// Existing code (hero animations, etc...)

// ===== ADD THE EDUCATION/EXPERIENCE ANIMATIONS HERE =====
// Education and Experience animations
gsap.from('.education-section', {
    scrollTrigger: {
        trigger: '.education-section',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.experience-section', {
    scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});
// Existing code (skills animations, projects animations, etc...)
// Section animations
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    if (section.id !== 'home') {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }
});

// About section animations
gsap.from('.profile-img', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});

// Skills animation
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});

// Animate skill bars on scroll
document.querySelectorAll('.skill-progress').forEach(bar => {
    ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
            const width = bar.style.width;
            bar.style.width = '0';
            gsap.to(bar, {
                width: width,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
    });
});

// Projects filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                gsap.from(card, {
                    y: 50,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact form
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log({ name, email, subject, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});

// Add these to your existing script.js file
