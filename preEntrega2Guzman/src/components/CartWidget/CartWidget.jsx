import { CartContext } from '../../context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './cartwidget.css'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return (
        <Link to='/cart' className='cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <i className="bi bi-cart-check-fill cart_icon"></i>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget