# Recursos gráficos

Logos oficiales de la Municipalidad de San Miguel de Tucumán, tal como se usan en Movilidad, Mapa y CiDiTuc. **No editarlos ni recomprimirlos.**

| Archivo | Tamaño | Fondo | Dónde se usa |
|---|---|---|---|
| [`logoMuni-sm.png`](logos/logoMuni-sm.png) | 235×235 | cualquiera | **Logo del header** (`.cd-brand img`, 36 px de alto), menú lateral y favicon |
| [`logoMuniNuevo.png`](logos/logoMuniNuevo.png) | 237×237 | claro | Logo apilado ("CIUDAD / San Miguel de Tucumán"). Tarjeta de login de CiDiTuc (84 px) |
| [`Logo_SMT_pos_1.png`](logos/Logo_SMT_pos_1.png) | 911×298 | **claro** | Logo horizontal con texto oscuro. Pie de página, modales e impresiones |
| [`Logo_SMT_neg_4.png`](logos/Logo_SMT_neg_4.png) | 446×171 | **oscuro** | Logo horizontal con texto blanco. Barra superior del registro de CiDiTuc (30 px de alto) |
| [`Logo_SMT_neg_3.png`](logos/Logo_SMT_neg_3.png) | 1210×171 | **oscuro** | Logo horizontal ancho con texto blanco, para banners |
| [`Logo-LetraBlanca.png`](logos/Logo-LetraBlanca.png) | 561×537 | **oscuro** | Logo apilado con texto blanco |
| [`logo-SMT-Blanco.png`](logos/logo-SMT-Blanco.png) | 500×468 | **oscuro** | Isotipo todo blanco. Navbar pública de CiDiTuc (24 px) |
| [`Logo_Muni200x200.png`](logos/Logo_Muni200x200.png) | 200×200 | **oscuro** | Isotipo blanco sobre transparente; sobre fondo blanco no se ve. Favicon de Mapa |
| [`logo-smt.png`](logos/logo-smt.png) | 798×565 | blanco | Isotipo sobre blanco. **Encabezado de PDFs** generados con jsPDF |
| [`escudo-tucuman.png`](logos/escudo-tucuman.png) | 1025×1429 | claro | Escudo provincial. Hojas de impresión oficiales, como la del QR en Movilidad |

Colores del logo:

| Parte | Color |
|---|---|
| Hoja oscura | `#0066FF` |
| Hoja clara | `#2EB1FF` |
| Sol | `#F4DC00` |

El azul de la interfaz es `#1f89f6`.

## Cómo usarlos en una app (Vite)

Copiá el archivo a `src/assets/` e importalo:

```jsx
import isotipo from "../assets/logoMuni-sm.png";
<img src={isotipo} alt="Municipalidad de San Miguel de Tucumán" />
```

Para el favicon, en `index.html`:

```html
<link rel="icon" type="image/png" href="./src/assets/logoMuni-sm.png" />
```
