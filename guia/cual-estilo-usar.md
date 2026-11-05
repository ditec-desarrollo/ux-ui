# ¿Qué estilo uso?

Hay dos variantes del mismo diseño, y las dos comparten la fuente **Poppins** y el azul **`#1f89f6`**.

| | **Ciudad Digital** (`--cd-*`) | **CiDiTuc UI** (`--cdt-*`) |
|---|---|---|
| Para | apps internas con login: paneles, ABM, tablas, reportes, mapas | pantallas públicas: landing, login, registro, recuperar clave |
| Ejemplos | Movilidad Urbana, Mapa Interactivo, Derivador, Atención Ciudadana | ladingPageCidituc |
| Header | blanco de vidrio, 64px, hamburguesa + logo + 2 palabras + tema + usuario | oscuro translúcido, 48px, logo blanco + links + botón píldora |
| Modo oscuro | sí | no |
| Componentes | MUI (tema propio) + Bootstrap como base | clases propias `.cdt-*` + react-bootstrap |
| Radios | 20 / 14 / 10 | 28 / 18 / 14 / 12, botones píldora |
| Grises de texto | slate `#0f172a` / `#475569` | Apple `#1d1d1f` / `#6e6e73` |
| Plantillas | [`plantillas/ciudad-digital`](../plantillas/ciudad-digital) | [`plantillas/cidituc-publico`](../plantillas/cidituc-publico) |

**En la duda, usá Ciudad Digital.** Casi todas las apps de DITEC son internas, y el login lo resuelve Ciudad Digital (`ciudaddigital.smt.gob.ar`): la app recibe el token y no necesita una pantalla de login propia.

Una app puede usar las dos variantes, por ejemplo una landing pública y un panel interno. En ese caso hay que mantenerlas separadas:

- Las clases `.cdt-*` solo funcionan dentro de un contenedor `.cdt` o `.cdt-page`.
- Las clases `--cd-*` se aplican de forma global.

## Pantallas que quedan fuera del layout

Algunas apps internas tienen rutas que no muestran el header (consultas públicas, resultados de pago, etc.). Qué hacer según el caso:

- **Pantalla pública con contenido** (consulta, resultado de pago, verificación por QR): pasala a Ciudad Digital igual. Usá los tokens, Poppins, `.cd-superficie` y `.cd-encabezado`, pero sin NavBar. Si querés mostrar la marca, poné el isotipo centrado arriba.
- **Login o registro propio que no tiene ruta:** es código muerto. No lo migres y avisá al equipo.
- **Login o registro propio que sí se usa:** va con el estilo CiDiTuc. Seguí [`prompts/extra-paginas-publicas-cidituc.md`](../prompts/extra-paginas-publicas-cidituc.md).
