// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
// Navbar scroll effect removed

// Scroll reveal animation using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe elements with .reveal-on-scroll class
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});

// Dynamically add reveal class to project cards for staggered effect
document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.classList.add('delay-' + (index * 100 + 100)); // Stagger effect
    observer.observe(el);
});
