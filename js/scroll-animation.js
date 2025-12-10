document.addEventListener('DOMContentLoaded', () => {
    // Select all elements to animate
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
});
