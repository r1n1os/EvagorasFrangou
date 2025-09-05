const toggle = document.getElementById('mode-toggle');
const body = document.body;
const label = document.getElementById('mode-label');
const yearSpan = document.getElementById('year');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Set the current year in the footer
yearSpan.textContent = new Date().getFullYear();

// This function correctly adds or removes the 'light-mode' class
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('light-mode');
        label.textContent = 'Dark Mode';
    } else {
        body.classList.add('light-mode');
        label.textContent = 'Light Mode';
    }
});

// Scroll to Top functionality
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});