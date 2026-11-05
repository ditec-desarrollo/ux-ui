---
name: estilo-ciudad-digital
description: Migra el frontend React de una app de la Municipalidad de San Miguel de Tucumán (DITEC) al diseño "Ciudad Digital" que usan Movilidad Urbana y Mapa Interactivo (Poppins, tokens --cd-*, tema MUI, header de vidrio, modo día/noche), o al estilo público "CiDiTuc UI" para landing/login. Usar cuando pidan "pasar al estilo Ciudad Digital", "que quede como Movilidad / Mapa / CidiTuc", "aplicar el diseño nuevo", "normalizar el diseño" o cambiar el header/tema de una app de DITEC.
---

# Migrar una app al estilo Ciudad Digital

Todo el material de referencia está en el repo **UX-UI** (https://github.com/ditec-desarrollo/ux-ui).

## 0. Ubicar el repo UX-UI
- Buscalo primero en `../UX-UI` respecto de la app. Si no está, buscá una carpeta `UX-UI` o `ux-ui` en el directorio padre.
- Si tampoco aparece, pedile la ruta al usuario o proponé clonarlo al lado de la app:
  `git clone https://github.com/ditec-desarrollo/ux-ui.git ../UX-UI`
- Si ya estaba clonado, hacé `git -C <ruta> pull` para usar la última versión.
- En los prompts, `../UX-UI` se refiere a esa ruta.

## 1. Leer antes de tocar nada
- `guia/sistema-de-diseno.md`: tokens, componentes y reglas.
- `guia/cual-estilo-usar.md`: Ciudad Digital (apps internas) o CiDiTuc (pantallas públicas).
- `capturas/`: cómo tiene que quedar.

## 2. Ejecutar las fases en orden
Cada fase es un archivo de `prompts/`. Leelo y seguí sus instrucciones como si el usuario te lo hubiera pegado:

| Fase | Archivo | Corte |
|---|---|---|
| 0 | `prompts/00-analizar-app.md` | Solo análisis. Presentá el plan y **esperá confirmación**. |
| 1 | `prompts/01-base-tema-tokens.md` | Build OK. Pedí al usuario que mire la app. |
| 2 | `prompts/02-navbar-drawer.md` | **Preguntá** las dos palabras de marca y confirmá los ítems del menú antes de escribir. |
| 3 | `prompts/03-paginas-tablas-modales.md` | De a una pantalla o grupo por vez, con confirmación entre cada una. |
| 4 | `prompts/04-alertas-loaders.md` | |
| 5 | `prompts/05-modo-oscuro-y-revision.md` | Checklist completo + build. |
| extra | `prompts/extra-paginas-publicas-cidituc.md` | Solo si hay pantallas públicas. |

- Al terminar cada fase, resumí qué cambió y sugerí un commit, por ejemplo `diseño: fase 1 tema y tokens Ciudad Digital`.
- No hagas el commit si el usuario no te lo pide.

## Reglas que no se negocian
- **Solo presentación.** No cambiar lógica, llamadas a API, rutas, nombres de props ni validaciones. Si algo visual requiere tocar lógica, preguntá antes.
- **Sin colores escritos a mano** fuera de `styles/ciudadDigital*.css` y `theme/`. Usá `var(--cd-…)` o la paleta MUI. La única excepción son los colores que vienen de datos.
- **Copiar las plantillas, no reinventarlas.** Los archivos de `plantillas/ciudad-digital/src/` se copian a la app tal cual y solo se ajustan imports y marca.
- **Logos** desde `recursos/logos/`. El header usa `logoMuni-sm.png` a 36px. La tabla de usos está en `recursos/README.md`.
- No desinstalar dependencias ni borrar archivos sin confirmar.
- Verificá en el navegador (modo claro y oscuro, 390px) cuando la app pueda correr. Si no podés verlo, decilo.
