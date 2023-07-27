import { useState } from 'react'
import './itemcount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="counter">
            <button className='counter_button'
            onClick={decrement}>
                -
            </button>
            <h3 className='counter_num'>
                {quantity}
            </h3>
            <button className='counter_button'
            onClick={increment}>
                +
            </button>
            <button className='add_to_cart'
            onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button> 
        </div>
    )
}

export default ItemCount