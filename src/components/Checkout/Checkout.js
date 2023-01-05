import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, where, query, getDocs, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import './Checkout.css'

const Checkout = () =>{
    const { items, getTotal, clearItems } = useContext(CartContext)
    const nav = useNavigate()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleCreateOrder = async (e) =>{
        e.preventDefault()
        const objOrd = {
            buyer: {
                name: name,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
            },
            products: items,
            total: getTotal()
        }

        
        const ids = items.map(prod => prod.id)
        const prodRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
        const cartProds = await getDocs(prodRef)
        const batch = writeBatch(db)

        const noStock = []

        const { docs } = cartProds 
        
        docs.forEach( async doc =>{
            const dDoc = doc.data()
            const dbStock = dDoc.stock

            const prodInCart = items.find(prod => prod.id === doc.id)
            const prodQuan = prodInCart?.quantity

            if(dbStock >= prodQuan){
                batch.update(doc.ref, {stock : dbStock - prodQuan})
            }else{
                noStock.push({id: doc.id, ...dDoc})
            }

            if(noStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const addedOrder = await addDoc(orderRef, objOrd)

                

                clearItems()
                alert(addedOrder)
                setTimeout(() => {
                  nav("/");
                }, 5000)

                console.log(addedOrder.id)
                
            }
        })

    }
    useEffect(()=>{
                  
    },[]);

    const alert = (addedOrder) =>{
      Swal.fire({
        icon: 'info',
        title: '¡Gracias por tu compra!',
        text:`Tu número de orden es: ${addedOrder.id}. Serás redirigido al Home en 5 segundos.`,
        confirmButtonText: 'Ok'
        })
    }

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [phoneDisabled, setPhoneDisabled] = useState(false);
    const [emailDisabled, setEmailDisabled] = useState(false);

    const handleConfirmEmail = (e) => {
        const confirmedEmail = e.target.value
        setConfirmEmail(e.target.value)
      if ((email === confirmedEmail) 
      && ((email || confirmedEmail) !== '')
      && (email.includes('@'))) {

        setEmailDisabled(true);
        e.target.className = 'input--checkout';
      } else {

        setEmailDisabled(false);
        e.target.className = 'input--checkout invalid';

      }

      

    };
    const checkPhoneLength = (e) => {
        const sphone = e.target.value
        setPhone(e.target.value)

        if (sphone.length >= 10) {

            setPhoneDisabled(true)
            e.target.className = 'input--checkout';
        } else {

            setPhoneDisabled(false)
          e.target.className = 'input--checkout invalid';

        }
      };

      useEffect(() => {
        if ((phoneDisabled && emailDisabled)) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      }, [phoneDisabled, emailDisabled]);

    return(
        <div className="formContainer">
            <form onSubmit={handleCreateOrder} className="formCheckout">
					<h2 className='h2--checkout'>Nombre</h2> 
					<input
          className='input--checkout'
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
          <h2 className='h2--checkout'>Apellido</h2>
          <input
          className='input--checkout'
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					<h2 className='h2--checkout'>E-mail</h2>
					<input
          className='input--checkout'
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
          <h2 className='h2--checkout'>Repite e-mail</h2>
          <input
          className='input--checkout'
						type="text"
						value={confirmEmail}
						onChange={handleConfirmEmail}
						required
					/>
          <h2 className='h2--checkout'>Dirección</h2>
					<input
          className='input--checkout'
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        />
					<h2 className='h2--checkout'>Teléfono</h2>
					<input
          className='input--checkout'
                        type="number"
                        value={phone}
                        onChange={checkPhoneLength}
                        required
                        />
					<button type="submit" disabled={isButtonDisabled}>
						Confirmar Orden
					</button>
				</form>
			</div>
    )
}
export default Checkout