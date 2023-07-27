import { Link } from 'react-router-dom'
import './item.css'

const Item = ({id, model, img, price, stock}) => {
    return (
        <div className="item_card">
            <header className="item_header">
                <h3 className="item_header_title" >
                    {model}
                </h3>
            </header>
            <div className="item_img_container">
                <img src={img} alt={model} className="item_img" />
            </div>
            <section>
                <p className="item_info">
                    Costo: ${price}
                </p>
                <p className="item_info">
                    {stock} unidades disponibles
                </p>
            </section>
            <footer className="item_footer">
                <Link to={`/item/${id}`} className="item_button">
                    Más información
                </Link>
            </footer>
        </div>
    )
}

export default Item