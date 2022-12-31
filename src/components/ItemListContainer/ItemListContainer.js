import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './ItemListContainer.css'
const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {category} = useParams()

    useEffect(()=>{

        const collectionRef = category ? query(collection(db, 'products'), where('category', '==', category)) : collection(db, 'products')
        

        getDocs(collectionRef).then(response =>{
            const finalProduct = response.docs.map(doc=>{
                const data = doc.data()

                return{id: doc.id, ...data}
            })
            setProducts(finalProduct)
        })

        
    },[category])
    return(
        <div className='itemListContainer'>
            <h1>Productos</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}
export default ItemListContainer