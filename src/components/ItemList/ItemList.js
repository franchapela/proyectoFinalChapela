import { Link } from "react-router-dom"
import './itemList.css'

const ItemList = ({products}) =>{
    return (
            <div>
            {
                products.map(product =>{
                    return(
                        <div key={product.id} className='itemList'>
                            <img src={product.img} alt={product.name}></img>
                            <h3>{product.name}</h3>
                            <span>u$s {product.price}</span>
                            <Link className='link' to={`/item/${product.id}` }>Ver detalle</Link>
                        </div>
                    )
                })
            }
            </div>
    )
}
export default ItemList