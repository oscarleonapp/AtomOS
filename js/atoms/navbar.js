// Función para toggle en el navbar
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });