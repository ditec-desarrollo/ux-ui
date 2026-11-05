import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { crearTema } from "./temaCiudadDigital";
import { TemaContext } from "./temaContexto";

// Preferencia de tema (claro / oscuro), compartida con CidiTuc vía localStorage["tema"].
// El valor inicial ya lo resolvió el script inline de index.html.
// eslint-disable-next-line react/prop-types
export default function ProveedorTema({ children }) {
  const [modoNocturno, setModoNocturno] = useState(
    () => document.documentElement.dataset.tema === "oscuro"
  );

  const alternarModoNocturno = useCallback(() => {
    setModoNocturno((prev) => {
      const oscuro = !prev;
      try {
        localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
      } catch {
        // sin storage disponible: el cambio aplica solo a esta sesión
      }
      return oscuro;
    });
  }, []);

  const tema = useMemo(() => crearTema(modoNocturno ? "dark" : "light"), [modoNocturno]);

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.tema = modoNocturno ? "oscuro" : "claro";
    html.setAttribute("data-bs-theme", modoNocturno ? "dark" : "light");
  }, [modoNocturno]);

  const valor = useMemo(() => ({ modoNocturno, alternarModoNocturno }), [modoNocturno, alternarModoNocturno]);

  return (
    <TemaContext.Provider value={valor}>
      <ThemeProvider theme={tema}>{children}</ThemeProvider>
    </TemaContext.Provider>
  );
}
