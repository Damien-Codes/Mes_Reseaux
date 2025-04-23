const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

// Initialisation du thème
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.setAttribute('data-theme', savedTheme);
updateIcons(savedTheme);

// Gestion du clic
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
    
    themeToggle.style.transform = `rotate(${newTheme === 'dark' ? 180 : 0}deg)`;
});

function updateIcons(theme) {
    sunIcon.style.opacity = theme === 'dark' ? 1 : 0;
    moonIcon.style.opacity = theme === 'light' ? 1 : 0;
}