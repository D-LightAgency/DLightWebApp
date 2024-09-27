// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const darkModeIcon = document.getElementById('dark-mode-icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Toggle between moon and sun icons
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
});


function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); /* Toggle the "show" class */
}
// Load the user's preferred theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
});
