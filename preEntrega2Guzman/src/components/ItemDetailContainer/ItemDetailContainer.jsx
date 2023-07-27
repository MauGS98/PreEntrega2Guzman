import { useState, useEffect } from 'react'
import { getBikeByID } from '../../mock'
import { useParams } from 'react-router-dom'

import './itemdetailcontainer.css'

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [bike, setBike] = useState(null)

    const { bikeID } = useParams()

    useEffect (() => {
        getBikeByID(bikeID)
            .then(response => {
                setBike(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [bikeID])

    return(
        <div className="details_container">
           <ItemDetail {...bike}/> 
        </div>
    )
}

export default ItemDetailContainer