import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount] = useState(0)


        const increment = () =>{
            if(count < stock){
                setCount(count+1)
            }
        }

    const decrement = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }


    return(
        <div>
            <h2>El stock es de {stock}</h2>
            <div className='countContainer'>
                <button onClick={() => decrement()}>-</button>
                <h3 className='quantityDisplay'>{count}</h3>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => onAdd(count)} disabled={count === 0}>Añadir al carro</button>
            </div>
        </div>
    )
}

export default ItemCount