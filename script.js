// script.js - funcionalidad general para AtomOS

document.addEventListener('DOMContentLoaded', () => {
  // Alternancia de menú móvil
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
    });
  }

  // Botón scroll al top
  const topBtn = document.getElementById('scroll-top');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Resaltar enlace activo en la navegación
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').includes(current) && current !== '') {
      link.classList.add('active-link');
    }
  });
});

