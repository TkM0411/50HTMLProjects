const toggleButtons = document.querySelectorAll('.faq-toggle');
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});