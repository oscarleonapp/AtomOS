// script.js - Funcionalidad general para AtomOS
// Alterna el menú móvil, controla scroll al inicio y destaca el enlace activo

document.addEventListener('DOMContentLoaded', () => {
  // Alternancia de menú móvil
  const toggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Botón para volver al inicio de la página
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Resalta el enlace de navegación de la página actual
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
