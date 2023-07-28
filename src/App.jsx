import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { PaginaInicio } from "./components/PaginaInicio/PaginaInicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import { useEffect } from "react";
import { SearchProvider } from "./context/SearchContext";
import { Checkout } from "./components/Checkout/Checkout";


function App() {

  useEffect(() => {
    document.title = "Game Over";
  }, []);
  const handleDarkModeChange = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };
  return (
    <BrowserRouter>
      <CarritoProvider>
        <SearchProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<PaginaInicio  />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>

        </Routes>

        <Footer />
        </SearchProvider>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
