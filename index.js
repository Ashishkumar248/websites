document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const currentPath = window.location.hash || '#home';
const activeLink = [...navLinks].find((link) => link.getAttribute('href') === currentPath);
if (activeLink) {
  navLinks.forEach((link) => link.classList.remove('active'));
  activeLink.classList.add('active');
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash || '#home';
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === hash;
    link.classList.toggle('active', isActive);
  });
});
