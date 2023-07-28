import React, { useContext, useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import { SearchContext } from "../../context/SearchContext";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { categoria } = useParams();
  const { searchResults } = useContext(SearchContext);

  useEffect(() => {
    const productosRef = collection(db, "Productos");
    const productos = query(productosRef, where("categoria", "==", categoria));

    const timer = setTimeout(() => {
      getDocs(productos)
        .then((res) => {
          const nuevosProductos = res.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProductos(nuevosProductos);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 500);

    return () => clearTimeout(timer);
  }, [categoria]);

  return (
    <>
      <div className="paginaPrincipal">
        {searchResults.length > 0 ? (
          <div className="productosContainer">
            {loading ? (
              <div className="spinner">
                <RotateLoader loading={true} size={20} color="#007BFF" />
              </div>
            ) : (
              <ItemList productos={searchResults} loading={loading} />
            )}
          </div>
        ) : (
          <div className="productosContainer">
            {loading ? (
              <div className="spinner">
                <RotateLoader loading={true} size={20} color="#007BFF" />
              </div>
            ) : (
              <ItemList productos={productos} loading={loading} />
            )}
          </div>
        )}
      </div>
    </>
  );
};
