import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";
import { SearchContext } from "../../context/SearchContext";
import gif from "../../assets/img/gifVacio.gif";
import { ItemList } from "../ItemList/ItemList";


export const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);
  const { searchResults } = useContext(SearchContext);



    if(searchResults.length > 0) {
      return ( 
        <div className="productosContainer">
             <ItemList productos={searchResults}/>

      </div>
      )
    } else {
      if (cantidadTotal === 0) {
        return (
          <div className="carritoVacio">
            <h2>Carrito Vacio, agregue productos para realizar la solicitud!</h2>
            <img src={gif} alt="" />
            <Link to="/"> ver productos</Link>
          </div>
        );
      }
      return (
        <div className="carrito">
           {carrito.map((producto) => (
            <div className="carritoCard">
              {" "}
              <CartItem key={producto.id} {...producto} />{" "}
            </div>
          ))}
          <div className="compra">
            <Link className="vaciarBtn" to="/cart">
            <button onClick={() => vaciarCarrito()}>
              Vaciar carrito
            </button>
            </Link>
            <div className="compraTotal">
              <h3>cantidad total: {cantidadTotal}</h3>
              <h3>total : ${total}</h3>
            </div>
            <Link className="finalizarBtn" to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      );
    }

 
};
