# Sistema de diseño "Ciudad Digital"

Es el estilo de las apps internas (Movilidad Urbana, Mapa Interactivo). Los archivos fuente están en [`plantillas/ciudad-digital/src`](../plantillas/ciudad-digital/src).

Se apoya en tres piezas:

1. **Tokens CSS `--cd-*`**, definidos en [`styles/ciudadDigital.css`](../plantillas/ciudad-digital/src/styles/ciudadDigital.css). Tienen una versión clara y otra oscura.
2. **Tema MUI**, en [`theme/temaCiudadDigital.js`](../plantillas/ciudad-digital/src/theme/temaCiudadDigital.js). Ajusta botones, tablas, inputs, diálogos, menús y DataGrid para que todos se vean iguales.
3. **Modo día/noche**, que funciona así:
   - Se guarda en `localStorage["tema"]` (`"claro"` o `"oscuro"`), y CidiTuc lee el mismo valor.
   - Un script en `index.html` lo aplica antes de que cargue React.
   - `ProveedorTema` lo cambia en vivo.
   - En el `<html>` quedan dos atributos: `data-tema="oscuro|claro"` y `data-bs-theme="dark|light"`, este último para Bootstrap.

> **Regla de oro:** en el código de la app no se escriben colores (`#xxxxxx`). En CSS se usa `var(--cd-…)` y en `sx` de MUI se usa la paleta (`primary.main`, `text.secondary`, `background.paper`…). Si un color no se adapta al modo oscuro, es porque está escrito a mano.

---

## Tipografía

- **Poppins** 300 / 400 / 500 / 600 / 700, cargada desde Google Fonts (`src/index.css`, línea 1).
- `--cd-font: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif`
- Los títulos llevan letter-spacing negativo: `h1`–`h4` usan `-0.02em`, y los títulos de página `-0.025em`.
- Los botones no van en mayúsculas (`textTransform: none`) y usan peso 600.
- Las etiquetas chicas sí van en mayúsculas. Por ejemplo, la cabecera de las tablas usa `0.72rem`, peso 600 y `letter-spacing 0.08em`.

## Colores

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--cd-bg` | `#f4f6fb` | `#0b1220` | fondo de la página |
| `--cd-surface` | `#ffffff` | `#111a2b` | tarjetas, tablas, modales |
| `--cd-superficie-alt` | `#f8fafc` | `#172238` | cabecera de tabla, inputs de búsqueda |
| `--cd-text` | `#0f172a` | `#e5e7eb` | texto principal |
| `--cd-text-2` | `#475569` | `#94a3b8` | texto secundario |
| `--cd-text-3` | `#94a3b8` | `#64748b` | ayudas, placeholders |
| `--cd-border` | `rgba(15,23,42,.08)` | `rgba(255,255,255,.08)` | bordes de 1px |
| `--cd-hover` | `rgba(15,23,42,.04)` | `rgba(255,255,255,.06)` | hover de ítems |
| `--cd-accent` | `#1f89f6` | `#1f89f6` | **azul principal** |
| `--cd-accent-fuerte` | `#0b63c9` | `#4da3ff` | hover, texto de marca, ítem activo |
| `--cd-accent-suave` | `#e8f2fe` | `rgba(31,137,246,.16)` | fondos suaves, avatar, ítem activo |
| `--cd-verde` / `-bg` | `#16a34a` / `#e6f7ec` | | éxito |
| `--cd-naranja` / `-bg` | `#f59e0b` / `#fdf2dc` | | advertencia |
| `--cd-peligro` / `-bg` | `#dc2626` / `#fee2e2` | `#f87171` | error, borrar, cancelar |
| `--cd-violeta` / `-bg` | `#8b5cf6` / `#f1ebfe` | | categoría extra |
| `--cd-vidrio` | `rgba(255,255,255,.78)` | `rgba(17,26,43,.72)` | navbar, menús (con `backdrop-filter`) |
| `--cd-hero-fondo` | degradé azul muy claro | degradé azul noche | bloques destacados |

Los colores del logo son las hojas `#0066FF` y `#2EB1FF`, y el sol `#F4DC00`. El `#1f89f6` de la interfaz está a mitad de camino entre los dos azules.

## Forma, sombras y movimiento

| Token | Valor | Dónde |
|---|---|---|
| `--cd-radio-lg` | 20px | tarjetas, modales, drawer |
| `--cd-radio-md` | 14px | menús, paneles |
| `--cd-radio-sm` | 10px | botones, inputs |
| MUI `shape.borderRadius` | 12 | resto de componentes |
| `--cd-sombra-sm` | `0 1px 2px rgba(15,23,42,.04), 0 4px 14px rgba(15,23,42,.05)` | tarjetas |
| `--cd-sombra-md` | `0 2px 6px …, 0 14px 36px rgba(15,23,42,.09)` | hover, menús |
| `--cd-sombra-modal` | `0 24px 64px rgba(15,23,42,.22), …` | modales |
| `--cd-ease` | `cubic-bezier(0.2,0.8,0.2,1)` | transiciones de 150–250ms |
| `--cd-nav-alto` | 64px (60px en Mapa) | alto del header |

Breakpoints usados:

| Ancho | Qué cambia |
|---|---|
| `900px` | se ocultan las pestañas y aparece la hamburguesa |
| `600px` | los modales pasan a ancho completo |
| `480px` | se oculta el texto de la marca (Mapa) |

También se usan las clases `d-md-*` de Bootstrap.

---

## Componentes

### Header (navbar)
Archivos: [`common/NavBar.jsx`](../plantillas/ciudad-digital/src/common/NavBar.jsx) y [`Navbar.css`](../plantillas/ciudad-digital/src/common/Navbar.css).

```
[☰]  [logo 36px] MOVILIDAD        ·····        [☾]  NOMBRE APELLIDO (AB) ▾
                 Urbana
```

- Es una barra fija arriba (`position: sticky`) de 64px. Usa un efecto de vidrio: fondo `--cd-vidrio` con `backdrop-filter: blur(20px) saturate(180%)` y un borde inferior de 1px.
- El contenido tiene un ancho máximo de 1280px, centrado.
- La marca se arma con `.cd-brand`, dentro del cual van:
  - el isotipo `logoMuni-sm.png` de 36px de alto;
  - `.cd-brand__sup`: 0.56rem, peso 600, `letter-spacing .16em`, color `--cd-accent`, en MAYÚSCULAS;
  - `.cd-brand__nombre`: 1.3rem, peso 700, color `--cd-accent-fuerte`.
- A la derecha van el botón de tema (luna/sol) y la "píldora" de usuario. La píldora muestra el nombre (se oculta en mobile), un avatar de 32px con las iniciales y una flecha. Al tocarla abre un menú de vidrio con "Cerrar Sesión".
- Las dos palabras de marca se configuran en [`common/marca.js`](../plantillas/ciudad-digital/src/common/marca.js).
- Al imprimir no aparece (`ocultarAlImprimir`).

### Menú lateral (drawer)
Archivo: [`common/SideBar.jsx`](../plantillas/ciudad-digital/src/common/SideBar.jsx). Sus estilos `.cd-drawer*` también están en `Navbar.css`.

- Usa `SwipeableDrawer` y sale desde la izquierda.
- Ancho `min(320px, 86vw)`, esquinas derechas redondeadas de 20px y fondo de vidrio.
- Arriba repite la marca, junto a un botón para cerrar.
- Ítems `.cd-drawer__item` (padding 10/12, radio 10). El ítem activo usa fondo `--cd-accent-suave` y texto `--cd-accent-fuerte`.
- Los ítems se definen en `marca.js`:
  - Los que tienen `hijos` se muestran como grupos desplegables, con una línea a la izquierda. Un grupo arranca abierto si contiene la ruta actual.
  - `visible(sesion)` filtra cada ítem según lo que el Layout le pase al NavBar en `sesion`: usuario, roles, permisos.
- El menú de usuario del header acepta ítems extra con `itemsUsuario`, por ejemplo "Mi perfil".
- Al pie dice "Desarrollado por Dirección de Innovación Tecnológica © año".

### Encabezado de página
Va al principio de cada pantalla:

```jsx
<div className="cd-encabezado">
  <div className="cd-encabezado__izquierda">
    <button className="cd-encabezado__volver" onClick={() => navigate(-1)}>
      <ChevronLeftRoundedIcon /> Volver
    </button>
    <span className="cd-encabezado__sup">Administración</span>
    <h1 className="cd-encabezado__titulo">Marcas de vehículos</h1>
    <p className="cd-encabezado__sub">Alta, baja y modificación de marcas.</p>
  </div>
  <div className="cd-encabezado__acciones">
    <Button variant="contained" startIcon={<AddRoundedIcon />}>Agregar</Button>
  </div>
</div>
```

### Contenedor de página
- `Container maxWidth="lg"` de MUI, o un `div` con `max-width: 1280px; margin: 0 auto; padding: 0 16px`.
- El fondo de la página es siempre `--cd-bg`.

### Tarjetas
- Clase `.cd-superficie`: fondo `--cd-surface`, borde de 1px `--cd-border`, radio de 20px y `--cd-sombra-sm`.
- `Paper` y `Card` de MUI ya salen así gracias al tema (radio de 16px con borde).
- Tarjetas clickeables, como las del home de Movilidad: al pasar el mouse suben 8px (`translateY(-8px)`), toman `--cd-sombra-md` y el borde pasa a `--cd-accent`.
- Para subtítulos de sección se usa `border-left: 4px solid var(--cd-accent); padding-left: 12px`.

### Botones
Usar el `Button` de MUI y no el `btn` de Bootstrap.

| Uso | Variante |
|---|---|
| Acción principal | `variant="contained"` (azul) |
| Acción secundaria | `variant="outlined"` o `"text"` |
| Borrar | `color="error"` |
| Exportar o confirmar | `color="success"` |

- El tema define radio 10, alto mínimo 38px y un efecto de presión `scale(.97)` al hacer clic. No llevan sombra.
- Los botones de solo ícono en tablas miden 36×36 y van agrupados dentro de `.cd-acciones`.

### Tablas
- Se arman con `TableContainer component={Paper}` y `Table size="small"`.
- **No** se pisan estilos de la cabecera: el tema ya la pone en mayúsculas chicas sobre fondo `--cd-superficie-alt`, con hover azul muy suave en las filas.
- Si una fila se pinta con un color que viene del backend, se usa la clase `.cd-fila-estado` (o `.cd-celda-estado` para una sola celda).
- El filtro va arriba de la tabla, con `TextField size="small"`.
- `DataGrid` también queda estilizado por el tema.
- En mobile la tabla se desplaza en horizontal: el tema ya trae `overflowX: auto`.

### Formularios
- Usar `TextField` y `Select` de MUI.
- El tema les da radio 10 y, al enfocarlos, un anillo `0 0 0 4px rgba(31,137,246,.14)`.
- El `Switch` tiene estilo iOS (46×28).
- Si quedan inputs de Bootstrap (`.form-control`), igual toman los colores de Bootstrap a través de `data-bs-theme`.

### Modales
Hay dos formas válidas:

1. **`Dialog` de MUI**, con `DialogTitle`, `DialogContent` y `DialogActions`. Es la opción preferida: el tema le da radio 20, sombra de modal y fondo desenfocado.
2. **`Modal` + `Box className="cd-modal"`**, cuando el layout es libre:

```jsx
const estiloModal = {
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: { xs: "calc(100% - 32px)", sm: 400 }, maxHeight: "90vh", overflowY: "auto",
  bgcolor: "background.paper", boxShadow: "var(--cd-sombra-modal)",
  borderRadius: "var(--cd-radio-lg)", p: { xs: 3, sm: 4 },
};
<Box sx={estiloModal} className="cd-modal">
  <div className="cd-modal__cabecera"><h2 className="cd-modal__titulo">Agregar marca</h2></div>
  …
</Box>
```

### Alertas
- Usar [`common/alerta.js`](../plantillas/ciudad-digital/src/common/alerta.js): `import Swal from "../common/alerta"` y después `Swal.fire({...})`, igual que siempre.
- Así las alertas toman los colores de los tokens, aparecen por encima de los modales de MUI (`z-index 1500`) y respetan el modo oscuro.
- **Confirmaciones de borrado**: usar `confirmarBorrado` de `alerta.js` (`import { confirmarBorrado } from "../common/alerta"`). El botón "Eliminar" sale en **rojo** (`--cd-peligro`), "Cancelar" en gris y el foco queda en "Cancelar". Es la única excepción a los colores del mixin; no se escriben `confirmButtonColor`/`cancelButtonColor` a mano en cada llamada.

### Carga
- Mostrar `Skeleton` de MUI con la forma de lo que se va a cargar, en vez de spinners. Los componentes están en [`components/Esqueletos`](../plantillas/ciudad-digital/src/components/Esqueletos).
- Para tablas se usa un rectángulo de 300px.
- Mientras se valida el token, en lugar de la navbar se muestra un esqueleto de 64px.

### Impresión
- Lo que se imprime sale siempre claro, en papel blanco.
- A todo lo que no deba imprimirse (navbar, botones) se le pone `ocultarAlImprimir`.

### Logos en PDFs
- Para los encabezados de los PDFs generados con jsPDF se usa `recursos/logos/logo-smt.png` (isotipo sobre fondo blanco).

---

## Estilo público "CiDiTuc UI"

Ver [cual-estilo-usar.md](cual-estilo-usar.md) y [`plantillas/cidituc-publico`](../plantillas/cidituc-publico).

En resumen:

- Está pensado para pantallas públicas (landing, login, registro) y su estética es tipo Apple.
- Navbar oscura `rgba(22,22,23,.8)` de 48px con el logo blanco `logo-SMT-Blanco.png`.
- Botones en forma de píldora (radio 980px) con texto de 17px.
- Tarjetas con radio de 28px.
- Textos en grises `#1d1d1f` / `#6e6e73`, sobre fondo alternativo `#f5f5f7`.
- No tiene modo oscuro.
