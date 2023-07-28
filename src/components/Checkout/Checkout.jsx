import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import checkComprado from "../../assets/img/checkComprado.png"
import "./Checkout.css";

export const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "Productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.error("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.error("Error al actualizar el stock", error);
        setError(
          "Se produjo un error al actualizar el stock de los productos, vuelva más tarde"
        );
      });
  };

  if (carrito.length == 0) {
    return (
      <div className="checkComprado">
        <img src={checkComprado} alt="" />
        {ordenId && (
          <strong className="checkCompradoTxt">
            ¡Gracias por tu compra! Tu id de Orden es {ordenId}, nos
            estaremos comunicando con usted!{" "}
          </strong>
        )}
      </div>
    );
  } else {
    return (
      <div className="checkout-body">
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario} className="formulario">
          {carrito.map((producto) => (
            <div className="checkOutProductos" key={producto.item.id}>
              <p>
                {producto.item.nombre} x {producto.cantidad}
              </p>
              <p> Precio: ${producto.item.precio} </p>
              <hr />
            </div>
          ))}
          <p>Total Compra: ${total.toFixed(3)}</p>
          <hr />
          <div className="formulario"></div>
          <div className="form-group">
            <label htmlFor=""> Nombre </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor=""> Apellido </label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor=""> Telefono </label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor=""> Email </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor=""> Email Confirmación </label>
            <input
              type="email"
              value={emailConfirmacion}
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}> {error} </p>}
          <button className="checkbtn" type="submit">
            {" "}
            Realizar Pedido{" "}
          </button>
        </form>
      </div>
    );
  }
};
