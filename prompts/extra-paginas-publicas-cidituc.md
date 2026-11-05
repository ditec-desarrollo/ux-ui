# Extra · Páginas públicas con estilo CiDiTuc

Usá este prompt solo para pantallas abiertas al público: landing, login, registro. Para las apps internas seguí los pasos 0 a 5.

```text
Quiero que estas pantallas públicas tengan el estilo "CiDiTuc UI" (como ladingPageCidituc): <PANTALLAS>.
Referencia: ../UX-UI/plantillas/cidituc-publico/ (styles/cdt-ui.css y el ejemplo Login/Login.jsx + login.css) y ../UX-UI/guia/cual-estilo-usar.md. Logos en ../UX-UI/recursos/logos/.

1. Cargá Poppins (300–900) y copiá styles/cdt-ui.css. Las clases .cdt-* solo aplican dentro de un contenedor .cdt o .cdt-page: envolvé cada pantalla pública con ese contenedor.
2. Navbar pública: barra fija oscura rgba(22,22,23,.8) con blur, 48px, logo blanco logo-SMT-Blanco.png de 24px, links de 12px y botón píldora .cdt-btn--sm.
3. Login/registro: tomá la estructura visual de Login.jsx + login.css (tarjeta blanca de 440px, radio 28, logo logoMuniNuevo.png 84px, campos con label flotante .cdt-field-group, botón .cdt-btn--lg --block). Es solo referencia visual: mantené la lógica, el store y los endpoints que ya tiene esta app.
4. Pie: fondo #f5f5f7, borde superior #d2d2d7, logo Logo_SMT_pos_1.png de 220px y "Desarrollado por DITEC © <año>".
5. Si la app también tiene pantallas internas, no mezcles: esas siguen con Ciudad Digital.
```
