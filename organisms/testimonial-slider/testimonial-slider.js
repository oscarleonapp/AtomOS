const slider = document.querySelector('[data-role="testimonial-slider"]');
if (slider) {
  const quotes = slider.querySelectorAll('blockquote');
  let index = 0;
  quotes[index].classList.add('active');
  slider.querySelector('.prev').addEventListener('click', () => {
    quotes[index].classList.remove('active');
    index = (index - 1 + quotes.length) % quotes.length;
    quotes[index].classList.add('active');
  });
  slider.querySelector('.next').addEventListener('click', () => {
    quotes[index].classList.remove('active');
    index = (index + 1) % quotes.length;
    quotes[index].classList.add('active');
  });
}
