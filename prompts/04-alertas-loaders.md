# Paso 4 · Alertas y estados de carga

**Objetivo de este paso:**
- Que todas las alertas usen el mismo estilo y funcionen en modo oscuro.
- Que las cargas muestren esqueletos (`Skeleton`) en lugar de spinners o textos.

```text
Fase 4 de la migración a "Ciudad Digital": alertas y loaders.
Referencia: ../UX-UI/plantillas/ciudad-digital/src/common/alerta.js y ../UX-UI/plantillas/ciudad-digital/src/components/Esqueletos/.

1. Copiá alerta.js a la carpeta common de la app. Reemplazá en todo src/ los `import Swal from "sweetalert2"` por el import de alerta.js (la API es la misma: Swal.fire, Swal.mixin, etc.). Quitá confirmButtonColor/cancelButtonColor escritos a mano en cada llamada. Las confirmaciones de borrado pasan a usar confirmarBorrado() de alerta.js ("Eliminar" en rojo, "Cancelar" neutro).
2. Si la app usa otro sistema de alertas o toasts (react-toastify, alert() nativo, Snackbar), contame dónde y proponé cómo unificar; no lo cambies sin confirmar.
3. Reemplazá spinners, textos "Cargando..." y loaders propios por Skeleton de MUI con la forma del contenido (copiá los Esqueletos que sirvan: TablaEsqueleto, GraficoBarraEsqueleto, GraficoPieEsqueleto).

Probá una alerta de confirmación encima de un modal abierto y en modo oscuro.
```
