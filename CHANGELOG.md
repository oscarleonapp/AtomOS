# AtomOS Changelog
Todas las modificaciones y actualizaciones importantes de AtomOS se registrarán aquí.

<!-- Utilizar la siguiente semantica para el Changelog
### Added (Para nuevas funcionalidades o componentes)
### Changed (Para cambios en las funcionalidades existentes)
### Fixed (Para correcciones de errores o problemas)
### Removed (Para funcionalidades eliminadas)
-->
## [Versión 0.9.6] - Fecha: 23 de marzo de 2025
### **Agregado**
- Nuevas paletas de colores
- Mejoras en el responsive de los Box Colors
- Mejoras en la barra de navegación
- Estilos para tamaños de Textos
- Estilos para fondos
- Estilos para colores de textos


## [Versión 0.9.5] - Fecha: 22 de marzo de 2025

### **Agregado**
- Implementación del **Navbar Responsive**:
  - **Atoms**: 
    - Creación de los estilos base en `atoms/navbar.css`, incluyendo:
      - Estilo para contenedor principal (`navbar`).
      - Estilos para enlaces (`nav-link`) y logo (`nav-logo`).
      - Lógica responsiva para el toggle en pantallas pequeñas (`navbar-toggle`).
    - Archivo `atoms/navbar.js` agregado para funcionalidad de toggle del menú.
  - **Molecules**:
    - Estructuración del componente `navbar.html` como molécula con enlaces, logo y toggle responsivo.
  - **Organisms**:
    - Inclusión del navbar como organismo completo en el archivo `organisms/navbar.html`, dentro de un `<header>`.

### **Mejorado**
- Organización del proyecto:
  - Segmentación del navbar en Atomic Design para facilitar la reutilización y el mantenimiento.
  - Componentes totalmente responsivos siguiendo el enfoque mobile-first.

### **Notas**
- El archivo de estilos del navbar (`navbar.css`) se encuentra en el nivel **Atoms**.
- El archivo del toggle JavaScript (`navbar.js`) complementa el comportamiento responsivo.

## [Versión 0.9.4] - Fecha: 22 de marzo de 2025

### **Modificado**
- Optimización del archivo `main.css`:
  - Eliminación de redundancias en los media queries para un diseño más limpio y coherente.
  - Consolidación de los valores repetidos utilizando variables CSS definidas en `:root`.
  - Simplificación del enfoque `mobile-first`, manteniendo consistencia y reduciendo puntos de quiebre innecesarios.
  - Nuevas variables agregadas: `--padding-small`, `--padding-medium`, `--padding-large`, `--max-width-mobile`, `--max-width-tablet`, `--max-width-desktop`, y `--max-width-large`.

### **Mejorado**
- Mantenibilidad:
  - Simplificación del código para facilitar futuros ajustes a través del uso de variables CSS centralizadas en `:root`.

### **Notas**
- El archivo optimizado mantiene la compatibilidad con `grid.css` y se integra perfectamente en el nivel **Atoms** de la estructura de Atomic Design.

## [Versión 0.9.3] - 22 de marzo de 2025

### **Agregado**
- Implementación de un nuevo sistema de **grid layout** basado en Atomic Design.
  - Código para el `grid-container` con soporte para `columns` y `rows`.
  - Configuración de gaps personalizables: `16px`, `8px` y `4px`.
  - Clases específicas para columnas (`col-1` a `col-12`) y filas (`grid-rows-1` a `grid-rows-6`).
  - Sistema flexible y reutilizable para layouts de páginas.


## [0.9.2] - 2025-03-21
### Added
- Nuevo archivo base agregado `base/text-align.css`
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
