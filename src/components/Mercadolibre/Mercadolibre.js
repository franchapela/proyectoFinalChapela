import {useEffect, useState} from 'react'
const Mercadolibre = () => {
    
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(Response => {
            return Response.json()
        })
        .then(json => setProducts(json.results))
        .catch(error =>{
            console.error(error);
        }).finally(() =>{
            setLoading(false)
        })
    }

    if(loading){
        return(
            <h1>Buscando...</h1>
        )
    }

    return(
     
        <div>
            <h1>Mercado libre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Buscar</button>
            </form>
            <div>
                {
                    products.map(product =>{
                        return(
                            <div key={product.id}>
                                <img src={product.thumbnail} alt={product.title}></img>
                                <h2>{product.title}</h2>
                                <h3>${product.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Mercadolibre