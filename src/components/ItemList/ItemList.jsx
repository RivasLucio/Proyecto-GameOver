import './ItemList.css'
import { RotateLoader } from "react-spinners";
import { Item } from "../Item/Item";

export const ItemList = ({ productos, loading }) => {
  return (
    <div className="itemList">
      {loading ? (
        <RotateLoader loading={true} size={20} color="#007BFF" />
      ) : (
        productos.map((prod) => <Item key={prod.id} {...prod} />)
      )}
    </div>
  );
};
