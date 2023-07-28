import { useState, createContext, useEffect  } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});


const carritoJson = JSON.parse(localStorage.getItem("carrito")) || [];
const totalJson = JSON.parse(localStorage.getItem("total")) || 0;
const cantidadTotalJson = JSON.parse(localStorage.getItem("cantidadTotal")) || 0;

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoJson);
  const [total, setTotal] = useState(totalJson);
  const [cantidadTotal, setCantidadTotal] = useState(cantidadTotalJson);


 
  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };
  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  useEffect(() => {
        localStorage.setItem("carrito",JSON.stringify(carrito))
        localStorage.setItem("total",JSON.stringify(total))
        localStorage.setItem("cantidadTotal",JSON.stringify(cantidadTotal))

  }, [carrito, total, cantidadTotal])
  
  return (
        <CarritoContext.Provider value={{
          carrito,
          agregarAlCarrito,
          eliminarProducto,
          vaciarCarrito,
          total,
          cantidadTotal,
        }}>
          {children}
        </CarritoContext.Provider>
  )
};
