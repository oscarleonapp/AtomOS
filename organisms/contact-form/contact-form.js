const form = document.querySelector('[data-role="contact-form"]');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    console.log('Enviar', Object.fromEntries(data));
  });
}
