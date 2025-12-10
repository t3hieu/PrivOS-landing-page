document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            title: "Bank-Grade Security",
            desc: "Leveraging Google Cloud's advanced encryption standards for data at rest and in transit.",
            icon: "img/Enterprise-grade Security.svg"
        },
        {
            title: "Advanced Threat Detection",
            desc: "AI-powered monitoring to identify and neutralize threats in real-time before they affect your data.",
            icon: "img/Intuitively Collaborative.svg"
        },
        {
            title: "Compliance Ready",
            desc: "SOC 2, GDPR, and ISO 27001 compliant infrastructure ensuring global standard adherence from day one.",
            icon: "img/Feature Highlight.svg"
        }
    ];

    let currentIndex = 0;

    const titleEl = document.getElementById('security-card-title');
    const descEl = document.getElementById('security-card-desc');
    const iconEl = document.getElementById('security-card-icon');

    // Select arrows specifically within the security section stack-nav
    const upBtn = document.querySelector('.stack-nav .nav-arrow.up');
    const downBtn = document.querySelector('.stack-nav .nav-arrow.down');

    // Main card container for animation effect
    const mainCard = document.querySelector('.stack-card-main');

    function updateSlide(index) {
        // Simple transition effect
        mainCard.style.transition = 'all 0.2s ease';
        mainCard.style.opacity = '0.8';
        mainCard.style.transform = 'translateY(-5px)'; // Lift slightly while changing

        setTimeout(() => {
            titleEl.textContent = slides[index].title;
            // Add a fade-in animation class if strictly needed, but simple opacity toggle works well
            descEl.textContent = slides[index].desc;
            iconEl.src = slides[index].icon;

            // Restore state
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'translateY(0)';
        }, 200);
    }

    if (upBtn && downBtn) {
        upBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide(currentIndex);
        });

        downBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide(currentIndex);
        });
    } else {
        console.error("Navigation arrows not found!");
    }
});
