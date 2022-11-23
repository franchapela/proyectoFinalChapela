import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = (props) => {
    return(

        <nav className='navbar'>
            <h1 className='h1'>Logo</h1>
            <Button textColor='white'>Inicio</Button>
            <Button textColor='white'>Productos</Button>
            <Button textColor='white'>Contacto</Button>
            <CartWidget></CartWidget>
        </nav>


    )
}

export default Navbar;