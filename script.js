const toggle = document.getElementById('mode-toggle');
const body = document.body;
const label = document.getElementById('mode-label');
const yearSpan = document.getElementById('year');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Footer year
yearSpan.textContent = new Date().getFullYear();

// Dark/Light toggle
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('light-mode');
        label.textContent = 'Dark Mode';
    } else {
        body.classList.add('light-mode');
        label.textContent = 'Light Mode';
    }
});

// Scroll to top button visibility
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
