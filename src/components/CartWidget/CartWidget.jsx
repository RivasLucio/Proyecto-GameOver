import React from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className="navbarCarrito">
      <Link to="/cart">
        <i className="bi bi-cart4"></i>
        <span>{cantidadTotal}</span>
      </Link>
    </div>
  );
};
