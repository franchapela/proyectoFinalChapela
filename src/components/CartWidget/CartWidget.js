import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const CartWidget = () =>{

    const {getQ} = useContext(CartContext)

    const totalQ = getQ()

    return(
        <button className='boton'>
            <img src='../images/cart.svg' alt='card-widget' className='cart'/>
            {totalQ}
        </button>
    )
}

export default CartWidget 