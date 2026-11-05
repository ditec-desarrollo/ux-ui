import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
// TODO: usar el contexto/store de usuario de la app (en Movilidad es src/context/UserContext).
import { UserContext } from "../context/UserContext";

// Ejemplo de cómo conectar el NavBar con el login que ya tiene la app.
// Sirve para los dos usos de Layout:
//   <Layout><Rutas/></Layout>                          -> renderiza children
//   <Route element={<Layout />}> …rutas hijas… </Route> -> renderiza <Outlet/>
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { authenticated, logout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <NavBar
        autenticado={authenticated}
        cargando={!authenticated && Boolean(localStorage.getItem("token"))}
        nombreUsuario={user?.nombre_persona}
        // Todo lo que necesiten los `visible` de marca.js (p. ej. roles: rolesPersona)
        sesion={{ usuario: user }}
        // itemsUsuario={[{ texto: "Mi perfil", icono: <PersonRoundedIcon />, onClick: () => navigate("/perfil") }]}
        onCerrarSesion={cerrarSesion}
      />
      {children ?? <Outlet />}
    </>
  );
};

export default Layout;
