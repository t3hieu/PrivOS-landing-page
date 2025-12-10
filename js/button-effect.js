document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons/links that have the arrow icon
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .header-cta, .scale-link, .hero-buttons button');

    buttons.forEach(btn => {
        const rightArrow = btn.querySelector('.btn-arrow-icon');

        // Prevent double injection if run multiple times
        if (rightArrow && !btn.querySelector('.arrow-left')) {
            const leftArrow = rightArrow.cloneNode(true);
            leftArrow.classList.remove('btn-arrow-icon');
            leftArrow.classList.add('arrow-left');

            // Prepend the left arrow
            btn.insertBefore(leftArrow, btn.firstChild);
        }
    });
});
