import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'

const Checkout = () =>{



    return(
        <div>
            <h1>Checkout</h1>
            <button></button>
        </div>
    )
}
export default Checkout