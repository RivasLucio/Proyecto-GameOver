import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const dataRef = doc(db, "Productos", id);
    getDoc(dataRef)
      .then((res) => {
        const data = res.data();
        const producto = { id: res.id, ...data };
        setProducto(producto);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};
