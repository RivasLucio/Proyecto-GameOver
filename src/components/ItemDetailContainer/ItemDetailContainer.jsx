import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RotateLoader } from "react-spinners";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = doc(db, "Productos", id);
    const timer = setTimeout(() => {
      getDoc(dataRef)
        .then((res) => {
          const data = res.data();
          const producto = { id: res.id, ...data };
          setProducto(producto);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);
  return (
    <div>
      {loading ? (
         <div className="spinnerDetail">
         <RotateLoader loading={true} size={20} color="#007BFF" />
       </div>
      ) : (
        <ItemDetail {...producto} />
      )}
    </div>
  );
};
