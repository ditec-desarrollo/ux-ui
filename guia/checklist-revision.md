# Checklist de revisión

Pasalo antes de dar por terminada la migración. Revisá cada punto en el navegador, con la app corriendo.

## Base
- [ ] La fuente es Poppins en toda la app. En DevTools, *Computed → font-family* de cualquier texto tiene que decir Poppins.
- [ ] El favicon es `logoMuni-sm.png` y el `<title>` tiene el nombre de la app.
- [ ] Al recargar en modo oscuro no aparece un destello blanco. Eso lo evita el script de `index.html`.
- [ ] El orden de los CSS en `main.jsx` es `index.css` → Bootstrap → `ciudadDigital.css`.
- [ ] Toda la app está envuelta en `<ProveedorTema>` y no queda ningún otro `ThemeProvider` / `createTheme` suelto.

## Header y menú
- [ ] El header tiene el logo, las dos palabras de marca correctas, el botón de tema y el menú de usuario con "Cerrar Sesión".
- [ ] El menú lateral abre, marca el ítem activo y muestra solo los ítems que corresponden al tipo de usuario.
- [ ] El efecto de vidrio se ve al hacer scroll: el contenido pasa borroso por detrás del header.
- [ ] Mientras se valida el token aparece el esqueleto de 64px y no un header vacío.

## Pantallas
- [ ] Cada pantalla arranca con `.cd-encabezado`, o al menos con `h1.cd-encabezado__titulo`.
- [ ] Las tablas no pisan la cabecera con `fontWeight: bold` / `fontSize: 18px` y dejan que la estilice el tema.
- [ ] Los botones son de MUI (`Button`/`IconButton`), sin `btn btn-primary` de Bootstrap mezclados.
- [ ] Los modales tienen radio 20 y fondo desenfocado, y en mobile no se salen de la pantalla.
- [ ] Todas las alertas usan `common/alerta.js` y aparecen por encima de los modales.
- [ ] Las confirmaciones de borrado usan `confirmarBorrado`: "Eliminar" en rojo y "Cancelar" neutro.
- [ ] Las cargas muestran `Skeleton`, no texto "Cargando…" ni spinners sueltos.

## Modo oscuro
- [ ] Recorriste todas las pantallas en modo oscuro.
- [ ] No queda texto oscuro sobre fondo oscuro ni cajas blancas sueltas.
- [ ] No hay colores escritos a mano. Para verificarlo, buscá `#[0-9a-fA-F]{3,6}` y `rgb(` en `src/`. Fuera de `styles/` y `theme/` no deberían aparecer, salvo colores que vienen de datos (estados).
- [ ] Los inputs de fecha, los selects y las alertas se leen bien.

## Responsive
- [ ] A 390px de ancho no hay scroll horizontal en la página. Las tablas sí pueden tener scroll horizontal dentro de su contenedor.
- [ ] A 390px el nombre de usuario se oculta y queda solo el avatar.
- [ ] Los botones de acciones se acomodan en varias líneas (`flex-wrap`) sin pisarse.

## Impresión / PDF
- [ ] Al imprimir no salen el header ni los botones (`ocultarAlImprimir`) y la hoja sale clara.
- [ ] Los PDFs usan `logo-smt.png` en el encabezado.

## Final
- [ ] `npm run build` termina sin errores.
- [ ] `npm run lint` no muestra errores nuevos, si el proyecto tiene lint.
- [ ] No se tocó lógica, endpoints ni rutas: el diff tiene que ser solo presentación.
