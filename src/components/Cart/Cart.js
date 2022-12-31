import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () =>{

    const {items, removeItem, getTotal} = useContext(CartContext)

    const total = getTotal()

    return(
        <div>
            <h1>Carro de compras</h1>
            {items.map(item =>{
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>${item.price}</h2>
                        <h2>Cantidad: {item.quantity}</h2>
                        <h2>Subtotal: ${(item.quantity * item.price)*1000}</h2>
                        <button onClick={()=>{removeItem(item.id)}}>X</button>
                    </div>
                )
            })}   
            <h1>Precio total: ${total * 1000}</h1> 
            <Link className='link' to='/checkout'><button>Finalizar compra</button></Link> 
            
        </div>
    )
}
export default Cart