import { createContext, useState } from "react";

export const UserContext = createContext([])
export const UserProvider = ({children}) =>{
    const[userInfo, setUserInfo] = useState('userInfo', {
        defValue:{
            name:'',
            lastname:'',
            email:'',
            phone:'',
            address:'',
        },
    })
}