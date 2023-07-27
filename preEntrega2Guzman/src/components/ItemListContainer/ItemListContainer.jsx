import { useEffect, useState } from 'react'
import { getInventory, getBikeByCategory } from '../../mock'
import { useParams } from 'react-router-dom'

import './itemlistcontainer.css'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [inventory, setInventory] = useState([])

    const { categoryID } = useParams()
    
    useEffect(() => {
        const asyncFunc = categoryID ? getBikeByCategory : getInventory

        asyncFunc(categoryID)
            .then(response => {
                setInventory(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryID])

    return (
        <>
            <h1 className="greeting_box">
                {greeting}
            </h1>
            <ItemList 
                inventory={inventory}
            />
        </>
    )
}

export default ItemListContainer