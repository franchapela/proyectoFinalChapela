import { createContext, useState } from 'react';

export const CartContext = createContext({ cart: []})

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const addItem = (itemToAdd) =>{
      if(!isInItems(itemToAdd.id)){
        setItems([...items, itemToAdd])
      }
    }
  
    const isInItems = (id) =>{
      return items.some(item => item.id === id)
    }
  
    const getQ = () =>{
      let acc = 0
  
      items.forEach(prod => {
        acc += prod.quantity
      })
      return acc
    }

    const getTotal = () =>{
        let acc = 0

        items.forEach(prod =>{
            acc += prod.quantity * prod.price
        })
        return acc
    }
  
    const removeItem= (id) =>{
      const updatedItems = items.filter(item => item.id !== id)
      setItems(updatedItems)
    }
    const clearItems = () => {
        setItems([])
      }

    return(
        <CartContext.Provider value={{items, addItem, removeItem, isInItems, getQ, getTotal, clearItems}}>
            {children}
        </CartContext.Provider>
    )
}