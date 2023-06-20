import React from 'react'
import {useState} from 'react'
// import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const LogIn = ({ setLoginUser}) => {

    // const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const onChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
      }

    const LogIn = () => {
        axios.post("http://localhost:9002/LogIn", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            // history.push("/")
        })
    }
    return (
        <div className="flex-col md:max-w-7xl mx-auto p-20 md:px-20 lg:px-40  space-y-2">
            <div className="flex md:space-x-8">
                <img className='md:w-1/2 rounded-xl hidden md:flex' src="../images/GujTourismLogo.png" alt="" />

                <form onSubmit={handleSubmit} className="py-10 md:w-1/2 w-full px-10 lg:px-20 bg-gray-700 flex flex-col items-center justify-center space-y-5 rounded-xl">
                    <h1 className="text-3xl font-semibold text-center text-amber-500 ">
                        Log in
                    </h1>
                    <div className="mb-4">
                        <label
                            for="email"
                            className="block text-m font-semibold text-black"
                        >Email
                        </label>
                        <input
                            type="email" name='email' onChange={onChange} value={user.email}
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-m font-semibold text-black"
                        >Password
                        </label>
                        <input
                            type="password" name='password' onChange={onChange} value={user.password}
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-amber-500 hover:underline"
                    >Forgot Password?
                    </a>
                    <div className="mb-4">
                        <button onClick={LogIn} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
                            LogIn</button>
                        <p className="mt-8 text-s font-light text-center text-black">
                            {" "}
                            Don't have an account?{" "}
                            <a href="./SignUp" className="font-medium text-amber-500 hover:underline">Sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn