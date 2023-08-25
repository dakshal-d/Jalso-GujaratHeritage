import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate} from 'react-router-dom'
// 
import axios from "axios"

const SignUp = () => {

    // const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const SignUp = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/SignUp", user)
                .then(res => {
                    toast.success('SignUp Successful');
                    alert(res.data.message)

                })
        } else {
            toast.error('invalid input');
            alert("invalid input")
        }

    }

    // function SignUp() {

    return (
        <div className="flex-col md:max-w-7xl mx-auto p-20 md:px-20 lg:px-40  space-y-2">
            <div className="flex md:space-x-8">
                <img className='md:w-1/2 rounded-xl hidden md:flex' src="../images/GujTourismLogo.png" alt="" />

                <form className="py-10 md:w-1/2 w-full px-10 lg:px-20 bg-gray-700 flex flex-col items-center justify-center space-y-5 rounded-xl">
                    <h1 className="text-3xl font-semibold text-center text-amber-500 ">
                        SignUp
                    </h1>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-m font-light text-amber-500"
                        >Name
                        </label>
                        <input
                            type="name" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-m font-light text-amber-500"
                        >Email
                        </label>
                        <input
                            type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-m font-light text-amber-500"
                        >Password
                        </label>
                        <input
                            type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-m font-light text-amber-500"
                        >Confirm Password
                        </label>
                        <input
                            type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-4">
                        <button onClick={SignUp} className="w-full px-8 py-2 tracking-wide text-black transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
                            SignUp
                        </button>
                        <ToastContainer />
                    </div>
                </form>


            </div>
        </div>
    )
}

export default SignUp