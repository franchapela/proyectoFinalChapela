import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () =>{

    const {items, removeItem, getTotal} = useContext(CartContext)

    const total = getTotal()

    return(
        <div className="cart--container">
            <h1 className="cart--title">Carro de compras</h1>
            {items.map(item =>{
                return(
                    <div key={item.id}>
                        <h1 className="h1--cart">{item.name}</h1>
                        <h2 className="h2--cart">${item.price}</h2>
                        <h2 className="h2--cart">Cantidad: {item.quantity}</h2>
                        <h2 className="h2--cart">Subtotal: ${(item.quantity * item.price)*1000}</h2>
                        <button onClick={()=>{removeItem(item.id)}}className='btn--cart'>X</button>
                    </div>
                )
            })}   
            <h1 className="h1--cart">Precio total: ${total * 1000}</h1> 
            <Link  to='/checkout'><button className='cart--btn'>Finalizar compra</button></Link> 
            
        </div>
    )
}
export default Cart