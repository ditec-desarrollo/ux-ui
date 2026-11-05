import { createContext, useContext } from "react";

// Contexto del modo claro / oscuro. Va en un archivo propio para que
// ProveedorTema.jsx exporte solo el componente (fast refresh de Vite).
export const TemaContext = createContext({
  modoNocturno: false,
  alternarModoNocturno: () => {},
});

export const useTema = () => useContext(TemaContext);
