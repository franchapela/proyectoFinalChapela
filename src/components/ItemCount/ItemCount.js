import {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({init, stock}) =>{
    const [count, setCount] = useState(init)


        const increment = () =>{
            if(count < stock){
                setCount(count+1)
            }
        }

    const decrement = () =>{
        if(count > 1){
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
            </div>
            <button>Añadir al carro</button>
        </div>
    )
}

export default ItemCount