import "./PaginaInicio.css";

import { PaginaFondo } from "../PaginaFondo/PaginaFondo";
import { PaginaRecomendaciones } from "../PaginaRecomendaciones/PaginaRecomendaciones";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { ItemList } from "../ItemList/ItemList";

export const PaginaInicio = () => {
  const { searchResults } = useContext(SearchContext);
  return (
    <>
      {searchResults.length > 0 ? (
        <div className="productosContainer">

      <ItemList productos={searchResults}/>
        </div>

      ) : (
        <div className="paginaPrincipal">
          <PaginaFondo
            textoInterfaz1="Upgrade"
            textoInterfaz2="your"
            textoInterfaz3="setup"
          />
          <PaginaRecomendaciones />
        </div>
      )}
    </>
  );
};
