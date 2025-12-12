document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fanout-card');

    // Only run on mobile
    if (window.innerWidth > 768) return;

    const observerOptions = {
        root: null,
        // Shrink the detection area to the center 20% of the screen
        // format: margin-top margin-right margin-bottom margin-left
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mobile-active');
            } else {
                entry.target.classList.remove('mobile-active');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
