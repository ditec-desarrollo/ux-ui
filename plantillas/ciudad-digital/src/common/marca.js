import { createElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
// import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

// Datos de marca de la app. Es lo único que cambia entre Movilidad, Mapa, etc.
// En el header se ve: [isotipo] SUPERIOR
//                               Nombre
export const MARCA = {
  superior: "NOMBRE", // ej: "MOVILIDAD", "MAPA", "ATENCIÓN"
  nombre: "App", // ej: "Urbana", "Interactivo", "Ciudadana"
  alt: "Municipalidad de San Miguel de Tucumán",
};

// Ítems del menú lateral. TODO: reemplazar por las rutas reales de la app.
//   ruta     -> a dónde navega (los grupos no llevan ruta)
//   visible  -> opcional, (sesion) => boolean. `sesion` es lo que el Layout le pasa
//               al NavBar (usuario, roles, permisos…), así que puede filtrar por lo que haga falta
//   hijos    -> opcional, lista de ítems: el ítem pasa a ser un grupo desplegable
export const ITEMS_MENU = [
  { ruta: "/home", texto: "Inicio", icono: createElement(HomeIcon) },
  // { ruta: "/configuraciones", texto: "Configuraciones", icono: createElement(SettingsRoundedIcon),
  //   visible: (sesion) => sesion?.usuario?.id_tusuario === 1 },
  // { texto: "Carpetas", icono: createElement(FolderRoundedIcon),
  //   visible: (sesion) => sesion?.roles?.includes("CARPETAS"),
  //   hijos: [
  //     { ruta: "/carpetas/recepcion", texto: "Recepción" },
  //     { ruta: "/carpetas/inspeccion", texto: "Inspección" },
  //   ] },
];
