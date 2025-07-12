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
1. Crea un repositorio en GitHub y sube el contenido de `AtomOS`.
2. En la configuración del repositorio, habilita **GitHub Pages** seleccionando la rama principal y la carpeta `/` como origen.
3. Accede a `https://<usuario>.github.io/<repositorio>/` para ver el sistema funcionando.
