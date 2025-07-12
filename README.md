# AtomOS

AtomOS es un sistema de diseño modular basado en Atomic Design. Esta versión utiliza HTML, CSS y JavaScript puros para construir una biblioteca de componentes reutilizables.

## Estructura

- `atoms/` – componentes más pequeños (botones, inputs, etiquetas, etc.)
- `molecules/` – combinaciones de átomos (campos de formulario, tarjetas…)
- `organisms/` – secciones completas reutilizables (header, footer, hero…)
- `templates/` – páginas con marcadores `{{placeholder}}`
- `pages/` – páginas con contenido de ejemplo
- `docs/` – documentación del sistema

## Uso
Abre las páginas dentro de `pages/` o usa las plantillas como base para nuevos proyectos.

## Despliegue en GitHub Pages
1. Haz un fork del repositorio o clónalo en tu cuenta.
2. En la configuración del repositorio, habilita **GitHub Pages** desde la rama principal.
3. Asegúrate de que las rutas son relativas (ya incluidas en este proyecto).
4. Al guardar los cambios, tu sitio estará disponible en `https://<usuario>.github.io/<repositorio>/`.

