# Paso 0 · Analizar la app (no toca código)

**Objetivo:** que Claude entienda la app y te devuelva un plan antes de cambiar nada. Revisá el plan y corregilo si hace falta antes de seguir.

**Antes de pegar el prompt:** abrí Claude Code en la carpeta de la app. Si no vas a usar la skill, conviene arrancarlo en *plan mode*.

```text
Vamos a migrar el diseño de esta app al estilo "Ciudad Digital" de la Municipalidad, el mismo que usan Movilidad Urbana y Mapa Interactivo.
La guía y el código de referencia están en el repo UX-UI, en ../UX-UI (si no está ahí, preguntame la ruta).

En este paso NO modifiques ningún archivo. Solo analizá y planificá:

0. Decime en qué rama de git estamos. Si es main/master, avisame para crear una rama antes de la fase 1.
1. Leé ../UX-UI/guia/sistema-de-diseno.md, ../UX-UI/guia/cual-estilo-usar.md y ../UX-UI/plantillas/README.md, y mirá las plantillas de ../UX-UI/plantillas/ciudad-digital/src/common/ (props de NavBar.jsx, forma de marca.js y Layout.jsx) para saber qué se va a copiar.
2. Revisá esta app y contame:
   - stack (package.json): React, MUI y sus paquetes (@mui/x-data-grid, x-date-pickers, styled-engine-sc), Bootstrap / react-bootstrap, Tailwind, styled-components, sass, sweetalert2 y sus temas (@sweetalert2/theme-*), router (BrowserRouter o HashRouter)
   - cómo se cargan hoy los estilos globales: main.jsx, index.css, App.css, temas MUI existentes (createTheme/ThemeProvider), scripts o CSS externos en index.html, reglas con !important o parches a clases .css-xxxx de MUI
   - qué componente es hoy el header/navbar, el menú lateral y el layout (¿usa children o <Outlet/>?), cómo obtienen el usuario, los roles y el logout (contexto, store, props), si el menú tiene grupos/submenús y si el menú de usuario tiene ítems además de "Cerrar sesión"
   - qué logos/imágenes usa y dónde están
   - cuántas pantallas hay y cuáles son las principales (rutas), cuáles quedan fuera del layout (públicas, resultado de pago, login/registro propios)
   - patrones repetidos y cuántos archivos: tablas, modales, formularios, alertas (sweetalert2, Snackbar, alert() nativo, toastify), loaders (spinners, react-loading-skeleton, textos "Cargando")
   - colores escritos a mano (buscá hex y rgb en src/) y estilos inline grandes; nombrá los archivos peores
3. Decime qué estilo corresponde (Ciudad Digital o CiDiTuc público) y qué hacer con las pantallas fuera del layout.
4. Proponé un plan en fases siguiendo ../UX-UI/prompts/01-base-tema-tokens.md, 02-navbar-drawer.md, 03-paginas-tablas-modales.md, 04-alertas-loaders.md y 05-modo-oscuro-y-revision.md, con la lista concreta de archivos que vas a tocar en cada fase y los riesgos (por ejemplo: MUI no instalado, choque con Tailwind, otro ThemeProvider, submenús por rol, !important globales).

Regla para todas las fases: los cambios son SOLO visuales. No cambies lógica, llamadas a la API, rutas ni nombres de props.
```
