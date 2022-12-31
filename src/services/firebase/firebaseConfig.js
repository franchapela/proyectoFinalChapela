import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMlonMKx3jjhh947-WTS6AJ2Ulq8PkbbE",
  authDomain: "ecommerce-react-2fa4d.firebaseapp.com",
  projectId: "ecommerce-react-2fa4d",
  storageBucket: "ecommerce-react-2fa4d.appspot.com",
  messagingSenderId: "182957475860",
  appId: "1:182957475860:web:7a90c2c9bd24a253b5bf01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)