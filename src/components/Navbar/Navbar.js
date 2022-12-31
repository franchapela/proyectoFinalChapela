import {Link} from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () =>{

    const cartObj = useContext(CartContext)
    const cart = cartObj.items.length

    return(
        <nav>
            <Link className='link' to='/'>Ecommerce</Link>
            <Link className='link' to='/category/audi'>Audi</Link>
            <Link className='link' to='/category/bmw'>BMW</Link>
            <Link className='link' to='/cart'><CartWidget q={cart}></CartWidget></Link> 
                    
        </nav>
    )
}

export default Navbar