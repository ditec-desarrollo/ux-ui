# UX-UI (DITEC)

Este repo no es una app. Es la referencia de diseño de los frontends de la Municipalidad de San Miguel de Tucumán y contiene:

- guía;
- prompts;
- plantillas de código;
- logos.

## Si te piden migrar otra app a este estilo
Seguí `skill/estilo-ciudad-digital/SKILL.md`. Las fases están en `prompts/` y las reglas en `guia/sistema-de-diseno.md`.

## Si te piden actualizar este repo
Las plantillas tienen que reflejar las apps de referencia. Si cambian ahí, copiá la versión nueva:

| Plantilla | Se copia desde |
|---|---|
| `plantillas/ciudad-digital/src/theme/*` | `MapaInteractivo/src/theme/*` |
| `plantillas/ciudad-digital/src/styles/ciudadDigital.css` | `MapaInteractivo/src/styles/ciudadDigital.css` (el bloque Leaflet/MapLibre va aparte, en `ciudadDigital-mapas.css`) |
| `plantillas/ciudad-digital/src/common/*` y `components/Esqueletos/*` | `Movilidad-Urbana-Front/src/common/*` |
| `plantillas/cidituc-publico/styles/cdt-ui.css` | `ladingPageCidituc/src/styles/cdt-ui.css` |

Hay tres archivos que están adaptados y no son copia exacta de esas apps, para que no dependan del `UserContext` de Movilidad: `NavBar.jsx`, `SideBar.jsx` y `Layout.jsx`. La marca y los ítems del menú salen de `common/marca.js`.

Si cambia un token o un patrón, actualizá también `guia/sistema-de-diseno.md`.

Los logos (`recursos/logos/`) son oficiales. No los edites ni los recomprimas.
