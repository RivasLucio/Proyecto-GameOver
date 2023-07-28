import { useContext, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import { SearchContext } from "../../context/SearchContext";
import { ProductList } from "../Item/Item";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const { searchResults } = useContext(SearchContext);

  useEffect(() => {
    const productosRef = collection(db, "Productos");
    const productos = query(productosRef, where("categoria", "==", categoria));

    getDocs(productos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((err) => console.log(err));
  }, [categoria]);
  return (
    <>
      <div className="paginaPrincipal">
        {searchResults.length > 0 ? (
          <div className="itemSearchContainer">
            <ProductList filteredProducts={searchResults} />
          </div>
        ) : (
          <div className="productosContainer">
            <ItemList productos={productos}/>
          </div>
        )}
      </div>
    </>
  );
};
