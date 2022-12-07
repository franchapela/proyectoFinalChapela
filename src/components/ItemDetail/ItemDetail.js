import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"

const ItemDetail = () =>{
    const [product, setProduct] = useState({})
    useEffect(()=>{
        getProductsById('1')
        .then(response =>{
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    return(

    )
}