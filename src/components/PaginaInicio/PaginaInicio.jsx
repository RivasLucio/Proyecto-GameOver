import "./PaginaInicio.css";

import { PaginaFondo } from "../PaginaFondo/PaginaFondo";
import { PaginaRecomendaciones } from "../PaginaRecomendaciones/PaginaRecomendaciones";
import { ProductList } from "../Item/Item";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const PaginaInicio = () => {
  const { searchResults } = useContext(SearchContext);
  return (
    <>
      {searchResults.length > 0 ? (
        <div className="itemSearchContainer">

          <ProductList filteredProducts={searchResults} />
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
