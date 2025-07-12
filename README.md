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

1. Crea un repositorio en GitHub y sube el contenido de este proyecto.
2. En la configuración del repositorio activa **GitHub Pages** apuntando a la rama `main` y la carpeta `/`.
3. Accede a `https://<usuario>.github.io/<repositorio>/` para ver el sistema de diseño en vivo.
