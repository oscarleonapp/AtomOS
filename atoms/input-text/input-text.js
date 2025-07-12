document.querySelectorAll('[data-role="input-text"]').forEach(el => {
  el.addEventListener('input', () => {
    if (el.value.length > 0) {
      el.classList.add('filled');
    } else {
      el.classList.remove('filled');
    }
  });
});
