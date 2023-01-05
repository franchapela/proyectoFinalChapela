import { getDoc, collection, getDocs, query, limit, orderBy } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
const OrderDetail = async () =>{

    const q = query(
        collection(db, "orders"),
        limit(1),
        orderBy("numero", "desc"),
      );
      
      const el = await getDocs(q);
      
      const product = el.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }
    
    ));
    console.log(...product)
    return(
        <div>
            
        </div>
    )
}
export default OrderDetail