import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, description, price, stock}) =>{

    const { addItem, isInItems } = useContext(CartContext)
    
    const handleOnAdd = (quantity) =>{
        addItem({id, name, price, quantity})
    }


    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{width:'200px'}}></img>
            <p>{description}</p>
            <h2>${price}</h2>
            { isInItems(id)
                ? <Link className='link' to='/cart'><button>Terminar compra</button></Link>
                : stock > 0
                    ? <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    : <h1>No hay stock</h1>}
        </div>
    )
}
export default ItemDetail