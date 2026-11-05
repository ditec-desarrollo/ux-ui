# Plantillas de código

## `ciudad-digital/`: apps internas

La estructura copia la de `src/` de una app de Vite, así que cada archivo va al mismo lugar en tu app.

| Archivo | Qué es | ¿Se copia tal cual? |
|---|---|---|
| `index.html` | Script que aplica el tema antes de React, favicon y `lang="es"` | Copiá el `<script>` y el favicon; cambiá el `<title>` |
| `src/main.jsx` | Orden de los imports de CSS + `<ProveedorTema>` | Copiá el orden en tu `main.jsx` |
| `src/index.css` | Carga de Poppins, reset y body con tokens | Combinalo con el tuyo |
| `src/styles/ciudadDigital.css` | **Tokens `--cd-*`** (claro y oscuro) y clases compartidas | Sí |
| `src/styles/ciudadDigital-mapas.css` | Leaflet y MapLibre con tokens | Sí, solo si la app usa mapas |
| `src/theme/temaCiudadDigital.js` | **Tema MUI** (paleta y overrides de componentes) | Sí |
| `src/theme/ProveedorTema.jsx`, `temaContexto.js` | Modo día/noche y hook `useTema()` | Sí |
| `src/common/marca.js` | Las dos palabras de la marca y los ítems del menú | **Hay que editarlo** |
| `src/common/NavBar.jsx`, `Navbar.css` | Header de vidrio, botón de tema y menú de usuario | Sí (recibe props) |
| `src/common/SideBar.jsx` | Menú lateral (drawer), con grupos desplegables y filtro por rol | Sí |
| `src/common/Layout.jsx` | Ejemplo de cómo conectar el NavBar con tu login (sirve con `children` o `<Outlet/>`) | **Adaptalo** a tu contexto o store |
| `src/common/alerta.js` | SweetAlert2 con el estilo y los colores de los tokens | Sí |
| `src/components/Esqueletos/*` | Skeletons para navbar, tabla y gráficos | Los que necesites |
| `src/assets/logoMuni-sm.png` | Isotipo del header | Sí |

Dependencias necesarias:

- `@mui/material` (v5 o v6)
- `@mui/icons-material`
- `@emotion/react`
- `@emotion/styled`
- `bootstrap`
- `sweetalert2`
- `react-router-dom`

## `cidituc-publico/`: pantallas públicas

| Archivo | Qué es |
|---|---|
| `styles/cdt-ui.css` | Tokens `--cdt-*` y componentes: botones píldora, campos con label flotante, modales, links. Funciona dentro de un contenedor `.cdt` o `.cdt-page` |
| `Login/Login.jsx`, `login.css` | Login de CiDiTuc. **Es solo una referencia visual**: importa el store y los helpers propios de CiDiTuc, así que no compila si lo copiás tal cual. Tomá de acá la estructura y las clases |
