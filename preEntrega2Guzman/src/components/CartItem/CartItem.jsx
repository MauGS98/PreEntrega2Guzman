import { CartContext } from '../../context/CartContext/CartContext'
import { useContext } from 'react'

import './CartItem.css'

const CartItem = ({id, model, price, quantity}) => {
    const { removeItem } = useContext(CartContext)

    return(
        <>
            <div className="cart_listedcontainer">
                <h2 className="cart_title">{model}</h2>
                <p className="cart_price">${price}</p>
                <p className="cart_qty">{quantity}</p>
                <button className="cart_clear" onClick={() => removeItem(id)}>X</button>
            </div>
        </>
    )
}

export default CartItem