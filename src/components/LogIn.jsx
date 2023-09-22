import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import React from 'react'

import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
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
        const response = await fetch('https://jalso-backend.onrender.com/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email, password: user.password }),
        });
        const json = await response.json()  
        if(json.success){
          // Assuming json.authtoken contains the JWT token
          localStorage.setItem('token', json.authtoken);
          // Show a toast notification for successful login
        //   toast.success('Login Successful');
          navigate('/travel');
        } else {
          alert('Invalid credentials');
        }
      };

    const LogIn = () => {
        axios.post("https://jalso-backend.onrender.com/user/login", user)
            .then(res => {
                toast.success('Login Successful');
                navigate('/travel');
                // setLoginUser(res.data.user)
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
                            htmlFor="email"
                            className="block text-m font-light text-amber-500"
                        >Email
                        </label>
                        <input
                            type="email" name='email' onChange={onChange} value={user.email} placeholder="Your Email"
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
                            type="password" name='password' onChange={onChange} value={user.password} placeholder="Your Password"
                            className="mb-4 block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <button onClick={LogIn} className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
                            LogIn</button>
                        <p className="mt-8 text-s text-center text-black font-semibold">
                            {" "}
                            Don't have an account?{" "}
                            <a href="./SignUp" className="font-medium text-amber-500 hover:underline">Sign up</a>
                        </p>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default LogIn