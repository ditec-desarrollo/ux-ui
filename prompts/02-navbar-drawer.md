# Paso 2 · Header y menú lateral

**Objetivo:** reemplazar el header actual de la app por el de Movilidad. El header nuevo trae:
- barra de vidrio
- logo con dos palabras de marca
- botón de tema claro/oscuro
- menú de usuario
- menú lateral, con soporte de grupos desplegables

**Antes de empezar, decidí:**
- las dos palabras de la marca. Por ejemplo: `ATENCIÓN` / `Ciudadana`, `CATASTRO` / `Municipal`
- qué ítems va a tener el menú

```text
Fase 2 de la migración a "Ciudad Digital": header y menú lateral.
Referencia: ../UX-UI/plantillas/ciudad-digital/src/common/ (NavBar.jsx, SideBar.jsx, Navbar.css, marca.js, Layout.jsx) y ../UX-UI/plantillas/ciudad-digital/src/components/Esqueletos/NavBarEsqueleto.*. Capturas de cómo debe quedar: ../UX-UI/capturas/.

Marca de esta app: superior = "<PALABRA EN MAYÚSCULAS>", nombre = "<Nombre>".

1. Copiá NavBar.jsx, SideBar.jsx, Navbar.css y marca.js a la carpeta donde esta app tiene sus componentes comunes, y NavBarEsqueleto.* a donde corresponda. Ajustá los imports relativos.
2. En marca.js poné la marca de arriba y pasá a ITEMS_MENU TODOS los ítems del menú/navbar ACTUAL de la app: mismas rutas, mismos textos, mismos grupos (submenús -> `hijos`) y mismas condiciones de visibilidad (`visible: (sesion) => ...`). Usá íconos de @mui/icons-material.
3. Conectá el NavBar con la autenticación que YA usa la app (contexto, zustand, redux, props), siguiendo ../UX-UI/plantillas/ciudad-digital/src/common/Layout.jsx:
   - autenticado, cargando, nombreUsuario, onCerrarSesion (el logout tiene que hacer exactamente lo mismo que hoy)
   - sesion: todo lo que necesiten los `visible` (usuario, roles, permisos…)
   - itemsUsuario: ítems que hoy tenga el menú de usuario además de cerrar sesión (ej. "Mi perfil")
   - Si el Layout actual se usa como ruta padre con <Outlet/>, mantené el <Outlet/> (la plantilla soporta children o Outlet).
4. Reemplazá el header/navbar viejo por el nuevo en el layout y borrá los componentes y CSS del header viejo solo si ya no se usan en ningún lado.
5. Si el header viejo tenía cosas extra (buscador, selector, notificaciones), ubicalas dentro de .cd-nav__derecha (o un buscador centrado como .cd-buscador de Mapa Interactivo) con el mismo estilo; preguntame si no está claro dónde van.

Verificá en el navegador: modo claro y oscuro, mobile a 390px, ítem activo del menú, grupos que abren y cierran, visibilidad por rol, cerrar sesión.
```
