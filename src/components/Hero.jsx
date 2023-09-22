import React from 'react'
import Carousal from './Carousal'
// import Typed from 'react-typed';

function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900 mt-20 ">
                        <div className=' mt-[-78px] h-screen text-center flex flex-col justify-center ' >
                        {/* style={{ backgroundImage: "url('/images/SOU.jpg')" }} */}
                            <p className='text-orange-500 font-bold p-3'>
                            "Embrace the Taste, Unveil the Traditions"
                            </p>
                            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
                            EXPLORE GUJARAT
                            </h1>
                            <div className='flex justify-center items-center'>
                                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                                    <span className='text-orange-500'>RELIVE</span> every moment of 
                                </p> 

                                {/* <Typed
                                    className='text-orange-600 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                                    strings={['CULTURE', 'CULTURE', 'CUISINE']}
                                    typeSpeed={120}
                                    backSpeed={140}
                                    loop
                                /> */}
                                <ul className='text-orange-600 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 animate-pulse'>
                                    <li>HERITAGE</li>
                                    <li>CULTURE</li>
                                    <li>CUISINE</li>
                                </ul>
                           </div>
                        </div>

            
            <div className="grid max-w-screen-xl px-4 mx-40 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className=" p-4 bg-gray-100 rounded-xl mr-16 lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl xl:text-6xl dark:text-white">
    Get the Best Travel and Food in <span className='text-blue-600'>Gujarat</span>
</h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience the vibrant colors and flavors of Gujarat through its rich cuisine and enchanting destinations, where every bite and every sight is a journey to remember.</p>
                    <div className='flex space-x-4'>

                        <a href='./Travel' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Travel
                            </span>
                        </a>
                        <a href='./food' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Food
                            </span>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                    <iframe title='Youtube Video' className='rounded shadow-2xl' width="420" height="330"
                        src="https://www.youtube.com/embed/15Jj8QEqCK4" alt="Youtube Video">
                    </iframe>
                </div>
            </div>
            <Carousal />
        </section>
    )
}

export default Hero
