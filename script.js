// Funcionalidades generales de AtomOS

document.addEventListener('DOMContentLoaded', () => {
  // Alternar menú móvil
  const toggle = document.querySelector('.navbar-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  }

  // Botón para volver al inicio
  const topBtn = document.querySelector('.scroll-top');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Resaltar la sección actual en el menú
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('current', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(section => observer.observe(section));
});
