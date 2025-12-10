document.addEventListener('DOMContentLoaded', () => {
    const headerIcon = document.querySelector('.header-icon');
    const headerMenu = document.querySelector('.header-menu');

    if (headerIcon && headerMenu) {
        // Toggle menu on icon click
        headerIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            headerMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!headerMenu.contains(e.target) && !headerIcon.contains(e.target)) {
                headerMenu.classList.remove('show');
            }
        });

        // Close menu when clicking a link
        const menuLinks = headerMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                headerMenu.classList.remove('show');
            });
        });
    }
});
