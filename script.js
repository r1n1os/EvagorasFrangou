const toggle = document.getElementById('mode-toggle');
const body = document.body;
const label = document.getElementById('mode-label');
const yearSpan = document.getElementById('year');

toggle.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  label.textContent = toggle.checked ? 'Dark Mode' : 'Light Mode';
});

yearSpan.textContent = new Date().getFullYear();