/** Validación básica */
document.querySelectorAll('[data-role="form-field"] input').forEach(input => {
  input.addEventListener('blur', () => {
    const error = input.parentElement.querySelector('.error');
    if (!input.value.trim()) {
      error.hidden = false;
    } else {
      error.hidden = true;
    }
  });
});
