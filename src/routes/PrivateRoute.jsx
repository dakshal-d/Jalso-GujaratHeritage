import { useEffect } from "react"
import { useSelector } from "react-redux"
import LogIn from "../components/LogIn"

export default function PrivateRoute({children}){

    const {auth} = useSelector((state)=>state.userReducer)


        if(auth){
            return children
        }


    return <LogIn></LogIn>
}