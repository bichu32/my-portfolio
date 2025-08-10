// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelectorAll('nav a').forEach(link => link.classList.toggle('dark-mode'));
  document.querySelectorAll('.project').forEach(card => card.classList.toggle('dark-mode'));
}

// Add button dynamically
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Toggle Dark Mode';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.backgroundColor = '#2c5364';
toggleBtn.style.color = '#fff';
toggleBtn.style.cursor = 'pointer';
toggleBtn.onclick = toggleDarkMode;
document.body.appendChild(toggleBtn);