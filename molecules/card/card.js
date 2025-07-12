/** Ejemplo simple sin datos reales */
export function createCard(data) {
  const template = document.querySelector('[data-role="card"]');
  if (!template) return;
  template.querySelector('.card-title').textContent = data.title;
  template.querySelector('.card-text').textContent = data.description;
  template.querySelector('.btn').textContent = data.cta;
}
