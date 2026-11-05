import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Collapse, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import isotipo from "../assets/logoMuni-sm.png";
import { ITEMS_MENU, MARCA } from "./marca";

// Plantilla basada en Movilidad-Urbana-Front/src/common/SideBar.jsx.
// Los ítems salen de marca.js; los estilos (.cd-drawer*) están en Navbar.css.
// `sesion` es lo que necesiten las condiciones `visible` de marca.js
// (el usuario, sus roles, permisos…); se pasa tal cual a cada `visible(sesion)`.

const filtrar = (items, sesion) =>
  items
    .filter((item) => !item.visible || item.visible(sesion))
    .map((item) => (item.hijos ? { ...item, hijos: filtrar(item.hijos, sesion) } : item))
    .filter((item) => !item.hijos || item.hijos.length > 0);

// eslint-disable-next-line react/prop-types
export default function SideBar({ sesion }) {
  const [abierto, setAbierto] = React.useState(false);
  const [gruposAbiertos, setGruposAbiertos] = React.useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const redirigir = (ruta) => {
    navigate(ruta);
    setAbierto(false);
  };

  const alternarGrupo = (texto) =>
    setGruposAbiertos((prev) => ({ ...prev, [texto]: !prev[texto] }));

  const items = React.useMemo(() => filtrar(ITEMS_MENU, sesion), [sesion]);

  const esActivo = (ruta) =>
    ruta === "/home" ? pathname === "/" || pathname === "/home" : pathname.startsWith(ruta);

  const renderItem = (item) => {
    if (!item.hijos) {
      return (
        <button
          key={item.ruta}
          type="button"
          className={`cd-drawer__item${esActivo(item.ruta) ? " cd-drawer__item--activo" : ""}`}
          onClick={() => redirigir(item.ruta)}
        >
          {item.icono}
          {item.texto}
        </button>
      );
    }

    // Grupo desplegable: arranca abierto si contiene la ruta actual
    const contieneActiva = item.hijos.some((h) => h.ruta && esActivo(h.ruta));
    const grupoAbierto = gruposAbiertos[item.texto] ?? contieneActiva;
    return (
      <React.Fragment key={item.texto}>
        <button
          type="button"
          className={`cd-drawer__item${grupoAbierto ? " cd-drawer__item--abierto" : ""}`}
          aria-expanded={grupoAbierto}
          onClick={() => alternarGrupo(item.texto)}
        >
          {item.icono}
          {item.texto}
          <ExpandMoreRoundedIcon className="cd-drawer__flecha" />
        </button>
        <Collapse in={grupoAbierto} unmountOnExit>
          <div className="cd-drawer__hijos">{item.hijos.map(renderItem)}</div>
        </Collapse>
      </React.Fragment>
    );
  };

  return (
    <div>
      <IconButton
        className="cd-hamburguesa cd-hamburguesa--siempre cd-nav__tema"
        edge="start"
        aria-label="open drawer"
        onClick={() => setAbierto(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        className="cd-shell cd-drawer"
        anchor="left"
        open={abierto}
        onClose={() => setAbierto(false)}
        onOpen={() => setAbierto(true)}
      >
        <div className="cd-drawer__contenido" role="presentation">
          <div className="cd-drawer__cabecera">
            <span className="cd-brand" style={{ cursor: "default" }}>
              <img src={isotipo} alt="" />
              <span className="cd-brand__texto">
                <span className="cd-brand__sup">{MARCA.superior}</span>
                <span className="cd-brand__nombre">{MARCA.nombre}</span>
              </span>
            </span>
            <IconButton size="small" onClick={() => setAbierto(false)} aria-label="Cerrar menú">
              <CloseRoundedIcon />
            </IconButton>
          </div>

          <div className="cd-drawer__grupo">{items.map(renderItem)}</div>

          <p className="cd-drawer__pie">
            Desarrollado por Dirección de Innovación Tecnológica
            <span style={{ fontSize: "1.4em", verticalAlign: "-0.1em" }}> ©</span>{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
