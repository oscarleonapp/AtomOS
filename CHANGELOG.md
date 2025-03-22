# AtomOS Changelog
Todas las modificaciones y actualizaciones importantes de AtomOS se registrarán aquí.

<!-- Utilizar la siguiente semantica para el Changelog

### Added (Para nuevas funcionalidades o componentes)
### Changed (Para cambios en las funcionalidades existentes)
### Fixed (Para correcciones de errores o problemas)
### Removed (Para funcionalidades eliminadas)

 -->


## [0.9.2] - 2025-03-21
### Added
- Nuevo archivo base agregado `base/text-aling.css`
- Clases utilitarias para alineación de texto en `base/_utilities.css`:
  - `.text-left`, `.text-center`, `.text-right`, `.text-justify`.
  - Clases adicionales para transformaciones de texto: `.text-uppercase`, `.text-lowercase`, `.text-capitalize`.
  - Estilos de espaciado entre letras: `.text-spacing-wide`, `.text-spacing-tight`, `.text-spacing-normal`.
  - Clases para control de subrayado: `.text-underline`, `.text-no-underline`.
  - Altura de línea personalizable con `.text-lineheight-normal`, `.text-lineheight-tight`, y `.text-lineheight-loose`.

### Changed
- Se opto por cambiar de archivo de utilidades los estilos de contenedores, para tenerlos más separados y estos tienen su propio archivo css `base/containers.css`


## [0.9.1] - 2025-03-21
### Added
- Nuevo organismo agregado en `organisms/main.css`.
- Nueva paleta de colores definida en `base/variables.css`.
- Configuración de tipografías para el cuerpo del texto y encabezados en `base/typography.css`.
- Estilos de botones creados en `atoms/buttons.css`.
- Estilos de enlaces en `atoms/links.css`.
- Componentes destacados como `.section` añadidos en `molecules/sections.css`.
- Estilos para citas (`blockquote`) añadidos en `molecules/blockquote.css`
- Se hace un reseteo de estilos para navegadores `base/reset.css`
- Estructura inicial del proyecto
    Creación de los archivos base para Atomic Desing (reset.css, variables.css, typography.css, utilities.css)
- Creación del archivo index.html que contendrá los ejemplos iniciales de los atomos y moleculas

### Changed
- Consolidación y organización de los estilos en archivos separados según Atomic Design.
- Ajustes en el archivo principal (`styles.css`) para importar los nuevos componentes CSS.

## [0.9.0] - 2025-03-20
### Added
- Diseño basado en Atomic Design: Átomos, Moléculas y Organismos.
- Creación del archivo CHANGELOG
