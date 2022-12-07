import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncMock";
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        getProductsById(id)
        .then(response =>{
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[id])
    return(
        <div className="itemDetailContainer">
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name}></img>
            <p>{product.description}</p>
            <h2>u$s {product.price}</h2>
            <ItemCount init={1} stock={product.stock}></ItemCount>
        </div>
    )
}

export default ItemDetailContainer