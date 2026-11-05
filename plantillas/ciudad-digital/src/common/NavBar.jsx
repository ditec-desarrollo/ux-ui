import SideBar from "./SideBar";
import { useState } from "react";
import NavBarEsqueleto from "../components/Esqueletos/NavBarEsqueleto";
import "./Navbar.css";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import isotipo from "../assets/logoMuni-sm.png";
import { useTema } from "../theme/temaContexto";
import { MARCA } from "./marca";

const iniciales = (nombre = "") =>
  nombre
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

// Plantilla basada en Movilidad-Urbana-Front/src/common/NavBar.jsx.
// Se desacopló del UserContext de Movilidad: la app le pasa los datos por props.
//   autenticado    -> muestra la barra
//   cargando       -> muestra el esqueleto mientras se valida el token
//   nombreUsuario  -> texto del botón de usuario y de las iniciales
//   sesion         -> lo que usan las condiciones `visible` de marca.js (usuario, roles…)
//   itemsUsuario   -> ítems extra del menú de usuario, arriba de "Cerrar Sesión":
//                     [{ texto: "Mi perfil", icono: <PersonRoundedIcon />, onClick: () => navigate("/perfil") }]
//   onCerrarSesion -> lo que hace "Cerrar Sesión" (logout + navigate, etc.)
// eslint-disable-next-line react/prop-types
export default function NavBar({ autenticado, cargando, nombreUsuario = "", sesion, itemsUsuario = [], onCerrarSesion }) {
  const { modoNocturno, alternarModoNocturno } = useTema();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    onCerrarSesion?.();
  };

  if (!autenticado) return cargando ? <NavBarEsqueleto /> : null;

  return (
    <header className="cd-shell cd-nav ocultarAlImprimir">
      <div className="cd-nav__inner cd-nav__inner--ancho">
        <SideBar sesion={sesion} />

        <span className="cd-brand" style={{ cursor: "default" }}>
          <img src={isotipo} alt={MARCA.alt} />
          <span className="cd-brand__texto">
            <span className="cd-brand__sup">{MARCA.superior}</span>
            <span className="cd-brand__nombre">{MARCA.nombre}</span>
          </span>
        </span>

        <div className="cd-nav__derecha">
          <IconButton
            className="cd-nav__tema"
            size="small"
            onClick={alternarModoNocturno}
            aria-label={modoNocturno ? "Activar modo claro" : "Activar modo nocturno"}
            title={modoNocturno ? "Activar modo claro" : "Activar modo nocturno"}
          >
            {modoNocturno ? (
              <LightModeOutlinedIcon fontSize="small" />
            ) : (
              <DarkModeOutlinedIcon fontSize="small" />
            )}
          </IconButton>

          <button
            type="button"
            className="cd-usuario"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <span className="cd-usuario__datos d-none d-md-flex">
              <span className="cd-usuario__nombre">{nombreUsuario}</span>
            </span>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                fontSize: 13,
                fontWeight: 600,
                bgcolor: "var(--cd-accent-suave)",
                color: "var(--cd-accent-fuerte)",
              }}
            >
              {iniciales(nombreUsuario)}
            </Avatar>
            <KeyboardArrowDownRoundedIcon className="cd-usuario__chevron" />
          </button>

          <Menu
            className="cd-shell cd-menu"
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div className="cd-menu__cabecera">
              <strong>{nombreUsuario}</strong>
            </div>
            {itemsUsuario.map((item) => (
              <MenuItem
                key={item.texto}
                onClick={() => {
                  setAnchorEl(null);
                  item.onClick?.();
                }}
              >
                {item.icono && <ListItemIcon>{item.icono}</ListItemIcon>}
                {item.texto}
              </MenuItem>
            ))}
            <MenuItem className="cd-menu__salir" onClick={handleLogout}>
              <ListItemIcon>
                <LogoutRoundedIcon />
              </ListItemIcon>
              Cerrar Sesión
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}
