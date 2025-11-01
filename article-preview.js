document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelector('.share-button');
    const shareTooltip = document.querySelector('.share-tooltip');
    const cardFooter = document.querySelector('.card__footer'); // The footer containing author and share button

    if (shareButton) {
        shareButton.addEventListener('click', (event) => {
            //event.stopPropagation(); // Prevents click from bubbling up to the document
            
            // Toggle active states for both button and tooltip
            const isActive = shareTooltip.classList.toggle('visible');
            shareButton.classList.toggle('active', isActive);

            // On mobile, also toggle a class on the footer to change its layout
            if (window.innerWidth < 768) {
                cardFooter.classList.toggle('share-active', isActive);
            }
        });
    }

    document.addEventListener('click', (event) => {
        if (!cardFooter.contains(event.target)) {
            shareTooltip.classList.remove('visible');
            shareButton.classList.remove('active');
            cardFooter.classList.remove('share-active');
        }
    });
});