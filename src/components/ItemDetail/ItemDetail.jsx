import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const ItemDetail = ({ precio, nombre, img, id, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
  };
  return (
    <div className="detailContenedor">
      <div className="itemDetail">
        <div className="itemDetailImg">
          <h2>{nombre}</h2>
          <img src={img} alt={nombre} />
        </div>

        <div className="itemDetailCompra">
          <div className="itemDetailPrecio">
            <h2>${precio}</h2>
            <h3>
              Precio especial<i className="bi bi-exclamation-circle"></i>
            </h3>
            <h4>PRECIO LISTA: ${(precio * 1.6).toFixed()}</h4>
            <h4>Cantidad disponible: {stock}</h4>
            {stock > 0 ? (
              agregarCantidad > 0 ? (
                <Link className="detailTerminar" to="/cart"> Terminar Compra</Link>
              ) : (
                <ItemCount
                  stock={stock}
                  inicial={1}
                  funcionAgregar={manejadorCantidad}
                />
              )
            ) : (
              <h4 className="sinStock">
                Sin disponibilidad de producto, vuelva pronto
              </h4>
            )}
            <h4 className="detailCuotas">
              12 cuotas sin intereseses de ${((precio * 1.6) / 12).toFixed(0)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
