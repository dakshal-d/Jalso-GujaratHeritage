import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    const isActive = (to) => {
        return location.pathname === to ? 'text-red-500' : 'text-gray-900';
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="bg-zinc-100 w-full border-gray-200 dark:bg-gray-900  rounded-3xl">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center">
                    <img src="/images/GujTourismLogo.png" className="h-12 mr-3 rounded-full" alt="Jalso" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <span className='text-orange-500'>J</span>also
                    </span>
                </Link>
                <div className="md:hidden">
                    <button
                        className="text-gray-600 dark:text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current bg-orange-500 rounded-lg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path d="M18 15L6 3M6 15l12-12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <div
                    className={`${menuOpen ? 'block' : 'hidden'
                        } md:block md:w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-zinc-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-700 dark:text-white ${isActive('/')}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/travel' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white ${isActive('/travel')}`}>Travel</Link>
                        </li>
                        <li>
                            <Link to='/food' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white  ${isActive('/food')}`}>Food</Link>
                        </li>
                        <li>
                            <Link to='/about' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white ${isActive('/about')}`}>About</Link>
                        </li>
                        <li>
                            <Link to='/ContactUs' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white ${isActive('/ContactUs')}`}>ContactUs</Link>
                        </li>
                        {!localStorage.getItem('token') ? <><li>
                            <Link to='/login' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white ${isActive('/login')}`}>LogIn</Link>
                        </li><li>
                                <Link to='/signup' className={`block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white ${isActive('/signup')}`}>SignUp-It's Free</Link>
                            </li></>
                            : <button onClick={handleLogout} className="block py-2 pl-3 pr-4 rounded hover:text-orange-700 md:hover:text-orange-700 md:p-0 dark:text-white">Logout</button>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar