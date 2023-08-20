import { useContext } from "react"
import { CartContext } from "../../context/CartContext/CartContext"
import { Link } from "react-router-dom"

import CartItem from "../CartItem/CartItem"

import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h2 className="noItems">No hay items en el carrito</h2>
                <Link to='/' className="button">Inicio</Link>
            </div>
        )
    }

    return (
        <>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h2 className="total">Total = ${total}</h2>
            <div className="total_container">
                <button onClick={() => clearCart()} className="clear_button">Limpiar carrito</button>
                <Link to='/checkout' className="final_button">Finalizar compra</Link>
            </div>
        </>
    )
}

export default Cart