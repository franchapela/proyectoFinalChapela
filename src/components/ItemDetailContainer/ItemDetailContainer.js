import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import './ItemDetailContainer.css'
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const {id} = useParams()
    
    const {addItem} = useContext(CartContext)

    useEffect(()=>{
       
        const docRef = doc(db, 'products', id)

        getDoc(docRef).then(doc=>{

            const data = doc.data()
            const finalProduct = {id: doc.id, ...data}

            setProduct(finalProduct)
        })

    },[id])
    return(
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer