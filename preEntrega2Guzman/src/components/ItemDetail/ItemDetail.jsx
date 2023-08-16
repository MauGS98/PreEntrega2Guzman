import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

import ItemCount from '../ItemCount/ItemCount'

import './itemdetail.css'

const ItemDetail = ({id, brand, model, year, category, img, price, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, model, price
        }

        addItem(item, quantity)
    }

    return(
        <div className="detail_card">
            <header className="item_header">
                <h3 className="item_header_title" >
                    {brand}
                </h3>
                <h3 className="item_header_title" >
                    {model}
                </h3>
            </header>
            <div className="item_img_container">
                <img src={img} alt={model} className="detail_img" />
            </div>
            <section>
                <p className="item_info">
                    Año {year}
                </p>
                <p className="item_description">
                    {description}
                </p>
                <p className="item_info">
                    {category}
                </p>
                <p className="item_info">
                    Costo: ${price}
                </p>
                <p className="item_info">
                    {stock} unidades disponibles
                </p>
            </section>
            <footer className="item_footer">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='item_button'>Terminar compra</Link>
                    ) : (
                        <ItemCount
                            initial={1}
                            stock={stock}
                            onAdd={handleOnAdd}
                        />
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail