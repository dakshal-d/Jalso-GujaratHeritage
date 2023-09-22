import LogIn from "../components/LogIn"

export default function PrivateRoute({children}){

    const auth = localStorage.getItem("token")


        if(auth){
            return children
        }


    return <LogIn></LogIn>
}