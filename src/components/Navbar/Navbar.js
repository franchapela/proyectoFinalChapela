import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () =>{
    return(
        <nav>
            <Link className='link' to='/'>Ecommerce</Link>
            <Link className='link' to='/category/audi'>Audi</Link>
            <Link className='link' to='/category/bmw'>BMW</Link>
        </nav>
    )
}

export default Navbar