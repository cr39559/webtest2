window.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery--img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    // Function to show the modal with the clicked image
    function openModal(index) {
        modal.style.display = 'block';
        modalImg.src = galleryImages[index].src;
        currentIndex = index;
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Function to show the previous image
    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        modalImg.src = galleryImages[currentIndex].src;
    }

    // Function to show the next image
    function showNext() {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        modalImg.src = galleryImages[currentIndex].src;
    }

    // Event listeners for gallery images
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => openModal(index));
    });

    // Event listeners for modal controls
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing modal when clicking on the button
        showPrev();
    });
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing modal when clicking on the button
        showNext();
    });
});
