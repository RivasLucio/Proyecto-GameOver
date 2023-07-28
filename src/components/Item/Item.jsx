import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, img, nombre, precio, stock }) => {
  return (
    <div className={`cardProducto ${stock === "0" ? "sinStock" : ""}`}>
      <div className="cardProductoImage">
        <Link to={`/item/${id}`}>
          <img src={img} alt={nombre} />
        </Link>
        {stock === "0" && <p className="textoSinStock">Sin Stock</p>}
      </div>
      <Link to={`/item/${id}`}>
        <h3>{nombre}</h3>
      </Link>
      <div className="cardPrecio">
        <h2>${precio}</h2>
        <p>12 Cuotas sin intereses de ${Math.round((precio * 1.6) / 12)}</p>
        <Link to={`/item/${id}`}>Ver detalles</Link>
      </div>
    </div>
  );
};

export const ProductList = ({ filteredProducts }) => {
  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="cardProducto">
          <div className="cardProductoImage">
            <img src={product.img} alt={product.nombre} />
          </div>
          <h3>{product.nombre}</h3>
          <div className="cardPrecio">
            <h2>${product.precio}</h2>
            <p>
              12 Cuotas sin intereses de $
              {Math.round((product.precio * 1.6) / 12)}
            </p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
