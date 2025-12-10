document.addEventListener('DOMContentLoaded', () => {
    const securityCards = [
        {
            title: "Bank-Grade Security",
            text: "Leveraging Google Cloud's advanced encryption standards for data at rest and in transit.",
            img: "img/Bank-Grade Security.png"
        },
        {
            title: "Data Privacy",
            text: "Your proprietary data is isolated in your private environment. We never train our global models on your internal data.",
            img: "img/Data Privacy.png"
        },
        {
            title: "Isolated Environments",
            text: "Every enterprise deployment runs in its own VPC, ensuring complete network isolation and control.",
            img: "img/Isolated Environments.png"
        }
    ];

    let currentCardIndex = 0;
    let autoRotateInterval;
    const cardTitle = document.querySelector('.stack-card-title');
    const cardText = document.querySelector('.stack-text');
    const cardImg = document.querySelector('.stack-img-glow');
    const mainCard = document.querySelector('.stack-card.main');
    const progressBar = document.querySelector('.stack-progress-bar');
    const upArrow = document.querySelector('.nav-arrow.up');
    const downArrow = document.querySelector('.nav-arrow.down');

    if (mainCard && cardTitle && cardText && cardImg && upArrow && downArrow && progressBar) {
        function updateCard(index) {
            // Fade out
            mainCard.style.opacity = '0';
            mainCard.style.transform = 'translate(-50%, -50%) scale(0.95)';

            setTimeout(() => {
                const card = securityCards[index];
                cardTitle.textContent = card.title;
                cardText.textContent = card.text;
                cardImg.src = card.img;

                // Fade in
                mainCard.style.opacity = '1';
                mainCard.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
        }

        function resetProgressBar() {
            progressBar.classList.remove('animating');
            void progressBar.offsetWidth; // Trigger reflow
            progressBar.classList.add('animating');
        }

        function nextCard() {
            currentCardIndex = (currentCardIndex + 1) % securityCards.length;
            updateCard(currentCardIndex);
            resetProgressBar();
        }

        function prevCard() {
            currentCardIndex = (currentCardIndex - 1 + securityCards.length) % securityCards.length;
            updateCard(currentCardIndex);
            resetProgressBar();
        }

        function startAutoRotation() {
            clearInterval(autoRotateInterval);
            resetProgressBar();
            autoRotateInterval = setInterval(nextCard, 5000); // 5 seconds
        }

        function resetTimer() {
            startAutoRotation();
        }

        // Event Listeners
        upArrow.addEventListener('click', () => {
            prevCard();
            resetTimer();
        });

        downArrow.addEventListener('click', () => {
            nextCard();
            resetTimer();
        });

        // Initialize
        startAutoRotation();
    }
});
