let questions = document.querySelectorAll('.question');

questions.forEach(q => {
    let dropDownIcon = q.querySelector('.dd'); // Select the svg within the current question
    let answer = q.querySelector('.answer');   // Select the answer within the current question
    let isOpen = false;

    q.addEventListener('click', () => {
        if (isOpen) {
            answer.style.display = 'none'; // Hide the answer
            dropDownIcon.style.transform = 'rotate(0deg)'; // Reset icon to default
        } else {
            answer.style.display = 'block'; // Show the answer
            dropDownIcon.style.transform = 'rotate(90deg)'; // Rotate icon by 90 degrees
        }
        isOpen = !isOpen; // Toggle open/close state
    });
});
