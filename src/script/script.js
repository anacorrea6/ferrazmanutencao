document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // DOM Elements
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id], footer[id]');

    // Sticky Header Scroll Effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load

    // Mobile Menu Toggle
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('nav-toggle--active');
            nav.classList.toggle('nav--open');
        });
    }

    // Close Mobile Menu when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && nav) {
                navToggle.classList.remove('nav-toggle--active');
                nav.classList.remove('nav--open');
            }
        });
    });

    // Intersection Observer to highlight active navigation link based on current section
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px', // Triggers when section is in the middle of viewport
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('nav__link--active');
                    } else {
                        link.classList.remove('nav__link--active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Form submission helper / CTA smooth scroll
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});