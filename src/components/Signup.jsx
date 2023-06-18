import React from 'react'

function SignUp() {
    return (
        <div className="flex-col md:max-w-7xl mx-auto p-20 md:px-20 lg:px-32  space-y-2">
            <div className="flex md:space-x-12">
                <img className='md:w-1/25 rounded-xl hidden md:flex' src="../images/GujTourismLogo.png" alt="" />

                <form className="py-10 md:w-1/2 w-full px-10 lg:px-20 bg-gray-700 flex flex-col items-center justify-center space-y-5 rounded-xl">
                    <h1 className="text-3xl font-semibold text-center text-amber-500 ">
                        SignUp
                    </h1>
                    <div className="mb-4">
                        <label
                            for="email"
                            className="block text-m font-semibold text-black"
                        >Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            for="email"
                            className="block text-m font-semibold text-black"
                        >Confirm Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            for="password"
                            className="block text-m font-semibold text-black"
                        >Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            for="email"
                            className="block text-m font-semibold text-black"
                        >Confirm Password
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-4">
                        <button className="w-full px-8 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
                            SignUp
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default SignUp