/**
 * Simple button click animation
 */
const btn = document.querySelector('[data-role="button"]');
if (btn) {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 200);
  });
}
