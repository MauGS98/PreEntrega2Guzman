import ItemCount from '../ItemCount/ItemCount'
import './itemdetail.css'

const ItemDetail = ({id, brand, model, year, category, img, price, stock, description}) => {
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
                <ItemCount
                    initial={1}
                    stock={stock}
                    onAdd={(quantity) => alert('Has agregado '+quantity+' piezas')}
                />
            </footer>
        </div>
    )
}

export default ItemDetail