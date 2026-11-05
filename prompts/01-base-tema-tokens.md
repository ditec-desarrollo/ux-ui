# Paso 1 · Base: fuente, tokens, tema MUI y modo día/noche

**Objetivo:** que toda la app tome la fuente Poppins, los colores `--cd-*` y el tema MUI, y que funcione el botón de modo oscuro.

Al terminar este paso la app ya tiene que verse distinta, aunque todavía no hayas retocado las pantallas.

```text
Fase 1 de la migración a "Ciudad Digital". Referencia: ../UX-UI/plantillas/ciudad-digital/ y ../UX-UI/guia/sistema-de-diseno.md.

1. Dependencias: si no están, instalá @mui/material @mui/icons-material @emotion/react @emotion/styled bootstrap sweetalert2 (respetá la versión de MUI que ya tenga la app; el tema funciona en v5 y v6). No desinstales nada.
2. Copiá a src/ de esta app (misma estructura de carpetas):
   - ../UX-UI/plantillas/ciudad-digital/src/theme/temaCiudadDigital.js, temaContexto.js y ProveedorTema.jsx -> src/theme/
   - ../UX-UI/plantillas/ciudad-digital/src/styles/ciudadDigital.css -> src/styles/
   - ../UX-UI/plantillas/ciudad-digital/src/styles/ciudadDigital-mapas.css -> src/styles/ SOLO si la app usa Leaflet o MapLibre
   - ../UX-UI/recursos/logos/logoMuni-sm.png -> src/assets/logoMuni-sm.png (si ya existe uno con ese nombre, avisame en vez de pisarlo)
3. src/index.css: tomá como referencia ../UX-UI/plantillas/ciudad-digital/src/index.css (import de Poppins arriba de todo + reset + body con var(--cd-bg) y var(--cd-text)). Mantené las reglas propias de la app que no choquen; eliminá fuentes y colores de fondo/texto globales viejos. Si hay !important o parches a clases .css-xxxx de MUI, listámelos antes de borrarlos.
4. src/main.jsx: el orden de los CSS tiene que ser index.css -> Bootstrap (bootstrap.css o bootstrap.min.css, el que ya use la app) -> styles/ciudadDigital.css, como en ../UX-UI/plantillas/ciudad-digital/src/main.jsx, y <App/> envuelto en <ProveedorTema>. Si existía otro ThemeProvider/createTheme, reemplazalo por este (si tenía overrides propios importantes, avisame antes de borrarlos).
5. index.html: agregá el <script> que aplica el tema antes de React (copialo de ../UX-UI/plantillas/ciudad-digital/index.html), lang="es", favicon logoMuni-sm.png con type="image/png" y un <title> con el nombre de la app. No borres otros scripts externos que ya tenga.
6. Si la app usa Tailwind, styled-components con un tema propio o temas de sweetalert2 (@sweetalert2/theme-*), no los quites: decime dónde chocan.

Al terminar: corré npm run build y decime qué cambió. No toques todavía el header ni las pantallas.
```
