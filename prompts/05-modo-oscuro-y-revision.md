# Paso 5 · Modo oscuro, responsive y revisión final

**Objetivo de este paso:**
- Que no quede ningún color escrito a mano en el código.
- Que la app se vea bien en modo oscuro, en mobile y al imprimir.
- Cerrar la migración con el checklist y un build sin errores.

```text
Fase 5 (final) de la migración a "Ciudad Digital".

1. Buscá en src/ colores escritos a mano: hex (#fff, #1976d2…), rgb()/rgba(), nombres (white, black, gray) en CSS, sx, style y styled-components. Fuera de styles/ciudadDigital*.css y theme/ reemplazalos por tokens var(--cd-…) o la paleta del tema. Dejá solo los que vienen de datos (colores de estados del backend) y listámelos.
2. Revisá CSS propios (App.css y *.css de componentes): eliminá reglas que ya cubre el tema/tokens y las que fuerzan fondos blancos o textos negros.
3. Responsive: que a 390px no haya scroll horizontal de página, encabezados y acciones con flex-wrap, modales a ancho completo en xs.
4. Agregá className="ocultarAlImprimir" a lo que no tenga que salir impreso. Si hay PDFs con jsPDF, usá ../UX-UI/recursos/logos/logo-smt.png como logo del encabezado.
5. Recorré ../UX-UI/guia/checklist-revision.md punto por punto y marcá qué está OK y qué no (con archivo y línea).
6. Corré npm run build (y npm run lint si existe).

Al final dame un resumen de lo que cambió en toda la migración y lo pendiente.
```
