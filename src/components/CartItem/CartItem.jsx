import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="cartItem">
      <img src={item.img} alt="" />
      <h4>{item.nombre}</h4>
      <p>cantidad: {cantidad}</p>
      <p>precio: ${item.precio}</p>
      <button className="cartItemBtn" onClick={() => eliminarProducto(item.id)}>
        ❌
      </button>
    </div>
  );
};
