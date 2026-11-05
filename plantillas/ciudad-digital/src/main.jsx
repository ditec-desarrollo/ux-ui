import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// El orden importa: reset propio -> Bootstrap -> tokens Ciudad Digital (pisan a Bootstrap).
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ciudadDigital.css";
// import "./styles/ciudadDigital-mapas.css"; // solo si la app usa Leaflet / MapLibre
import ProveedorTema from "./theme/ProveedorTema.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProveedorTema>
    <App />
  </ProveedorTema>
);
