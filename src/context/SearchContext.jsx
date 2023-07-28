import { createContext, useState } from "react";
import { productos } from "../asyncmock";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (search) => {
    if (search.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredProducts = productos.filter((product) =>
        product.nombre.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  }
  return(
    <SearchContext.Provider value={{searchResults, handleSearch}}>
        {children}
    </SearchContext.Provider>
  )
};

