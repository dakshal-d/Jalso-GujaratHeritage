import React from 'react'

function About() {
    return (
        <div className=' bg-gray-100 mx-40 mt-32 shadow-2xl mb-20 rounded flex flex-col space-y-6 items-center justify-center py-10 '>
            
            <img className='h-52 w-52 ' src='/images/ME.png' alt=""/>
            <h1 className='text-4xl'>Dakshal Dalsania</h1>
            <p className='text-sm w-1/3 justify-center text-center text-gray-400 flex items-center'>Hello and welcome to my website! My name is Dakshal Dalsania and I'm a Web Developer. I'm passionate about Full Stack Web Development.</p>
            <p className='text-sm w-1/3 justify-center text-center text-gray-400 flex items-center'>Thank you for visiting my website!</p>
            <div className='space-x-5'>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <a href="https://github.com/dakshal-d" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Github
            </a>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <a href="https://linkedin.com/in/dd2002" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            LinkedIn
            </a>
            </button>

                
            </div>
        </div>
    )
}

export default About