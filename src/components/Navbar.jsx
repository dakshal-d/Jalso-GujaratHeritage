import React,{ useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
  
function Navbar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="bg-zinc-100 w-full border-gray-200 dark:bg-gray-900 rounded-3xl">
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
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } md:block md:w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-zinc-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to='/'  className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">Home</Link>
                        </li>
                        <li>
                            <Link to='/travel'  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Travel</Link>
                        </li>
                        <li>
                            <Link to='/food'  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Food</Link>
                        </li>
                        <li>
                            <Link to='/about' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link to='/ContactUs' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ContactUs</Link>
                        </li>
                        {!localStorage.getItem('token') ? <><li>
                            <Link to='/login' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LogIn</Link>
                        </li><li>
                                <Link to='/signup' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp-It's Free</Link>
                            </li></>:<div className='d-flex'><button onClick={handleLogout} className="btn btn-primary mx-1">Logout</button></div>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar