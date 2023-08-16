import Item from '../Item/Item'
import './itemlist.css'

const ItemList = ({inventory}) => {
    return (
        <div className="item_cards_container">
            {inventory.map (bike => {
                return(
                    <Item key={bike.id} {...bike}/>
                )
            })}
        </div>
    )
}

export default ItemList