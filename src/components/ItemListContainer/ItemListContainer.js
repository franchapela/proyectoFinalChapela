import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {category} = useParams()

    useEffect(()=>{
        if(category){
                getProductsByCategory(category)
            .then(response =>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error);
            })
            }
        else{
                getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error);
            })
        }
        
    },[category])
    return(
        <div className='itemListContainer'>
            <h1>Productos</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}
export default ItemListContainer