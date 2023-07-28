import { useState } from "react";
import "./ItemCount.css";

export function ItemCount({ inicial, stock, funcionAgregar  }) {
  const [contador, setContador] = useState(inicial);

  return (
    <>
      <div className="contadorContainer">
        <button className="contadorIzq" onClick={() => { contador > inicial && setContador(contador - 1) }}>
          -
        </button>
        <strong> {contador} </strong>
        <button className="contadorDer" onClick={() => { contador < stock && setContador(contador + 1)}}>
          +
        </button>
      </div>
      <button className="botonAgregar" onClick={() => funcionAgregar(contador)}>
        Agregar al Carrito
      </button>
    </>
  );
}
