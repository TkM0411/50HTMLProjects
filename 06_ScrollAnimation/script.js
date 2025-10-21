const boxes = document.querySelectorAll('.box'); // Select all elements with class 'box'
window.addEventListener('scroll', checkBoxes); // Add scroll event listener

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // Animation Trigger point at 80% of viewport height
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // Get the top position of the box relative to viewport
        if (boxTop < triggerBottom) {
            box.classList.add('show'); // Add 'show' class to trigger animation
        } else {
            box.classList.remove('show'); // Remove 'show' class to reset animation
        }
    });
}