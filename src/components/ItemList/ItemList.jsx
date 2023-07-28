import './ItemList.css'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
  return (
    <div className='itemList'>
        {productos.map(prod => <Item  key={prod.id}  {...prod} />)}
    </div>
  )
}
