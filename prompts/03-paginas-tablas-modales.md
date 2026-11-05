# Paso 3 · Pantallas: encabezados, tablas, modales, tarjetas y formularios

**Objetivo:** que cada pantalla use los patrones de la guía.

Conviene hacerlo **de a una pantalla o un grupo de pantallas por vez**, no toda la app de una. Antes de pegar el prompt, reemplazá `<LISTA DE PANTALLAS…>` por las pantallas que vas a migrar.

```text
Fase 3 de la migración a "Ciudad Digital": pantallas.
Leé la sección "Componentes" de ../UX-UI/guia/sistema-de-diseno.md y aplicala a estas pantallas: <LISTA DE PANTALLAS / CARPETAS, o "todas, de a una por vez">.

Para cada pantalla:
1. Encabezado: usar .cd-encabezado (sup + h1.cd-encabezado__titulo + sub opcional, botón .cd-encabezado__volver si hay "Volver", acciones a la derecha en .cd-encabezado__acciones).
2. Contenedor: ancho máximo 1280px centrado, fondo var(--cd-bg).
3. Tablas: TableContainer component={Paper} + Table size="small"; quitar estilos que pisen la cabecera/celdas (fontWeight bold, fontSize, colores, bordes); acciones como IconButton dentro de .cd-acciones; filas coloreadas por estado con .cd-fila-estado.
4. Botones: MUI Button. Principal contained, secundario outlined/text, borrar color="error". Reemplazá btn de Bootstrap.
5. Modales: preferir Dialog de MUI; si es Modal + Box, usar className="cd-modal" y el estilo de modal de la guía (responsive en xs).
6. Tarjetas: .cd-superficie o Paper/Card de MUI sin sombras/bordes propios.
7. Formularios: TextField/Select de MUI, size="small" en filtros.
8. Reemplazá cualquier color escrito a mano por var(--cd-…) o por la paleta del tema (primary.main, text.secondary, background.paper, divider, error.main…).

No cambies lógica, validaciones, llamadas a la API ni nombres de campos. Al terminar cada pantalla decime qué cambiaste y pasá a la siguiente solo cuando te confirme.
```
