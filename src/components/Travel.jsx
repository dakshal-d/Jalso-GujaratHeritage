import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
function Travel() {
    return (

        <section className='mt-20'>
            <div className="bg-gray-100 mx-40 flex justify-center my-28 rounded py-10'">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/top-attraction/top-attractions-2.jpg" alt="Religious Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Religious Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/-flora---fauna/Flora-Fauna-Thumbnail.jpg" alt="Flora-Fauna" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Flora-Fauna</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/beach.jpg" alt="Beaches" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Beaches</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/top-attraction/top-attractions-5.jpg" alt="Heritage Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Heritage Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home-page/Bird-Watching-Sites-Home-Thumbnail.jpg" alt="Bird Watching Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Bird Watching Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home-page/Art-&-Craft-of-Gujarat-Home-Thumbnail.jpg" alt="Art & Craft" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Art & Craft</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/Unesco-World-Heritage-Site.jpg" alt="Unesco-World-Heritage-Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Unesco World Heritage Sites</h2>

                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museum.png" alt="Museums" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Museums</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/Wellness%20Tourism.jpg" alt="Wellness Tourism" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Niche Tourism</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/top-attraction/top-attractions-2.jpg" alt="Religious Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Religious Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/-flora---fauna/Flora-Fauna-Thumbnail.jpg" alt="Flora-Fauna" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Flora-Fauna</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/beach.jpg" alt="Beaches" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Beaches</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/other-images/top-attraction/top-attractions-5.jpg" alt="Heritage Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Heritage Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home-page/Bird-Watching-Sites-Home-Thumbnail.jpg" alt="Bird-Watching-Sites" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Bird Watching Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/home-page/Art-&-Craft-of-Gujarat-Home-Thumbnail.jpg" alt="Art-&-Craft" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Art & Craft</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/Unesco-World-Heritage-Site.jpg" alt="Unesco-World-Heritage-Site" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Unesco World Heritage Sites</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museum.png" alt="Museums" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Museums</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/Wellness%20Tourism.jpg" alt="Niche Tourism" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Niche Tourism</h2>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <Link to="/travel/KnowWeather" className='mx-40 px-20 py-12 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'
            >Know The Weather</Link><br></br>
            <div className='grid grid-rows-5 grid-cols-4 gap-5 mx-40 '>

                <Link to="/travel/Ahmedabad" className='px-5 py-10 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'
                >Ahmedabad</Link>
                <Link to="/travel/TourismAttraction" className='px-5 py-10  col-span-2 row-span-2 py-100 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'
                >Best Tourism Places In Gujarat</Link>
                <Link to="/travel/Surat" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Surat</Link>
                <Link to="/travel/Porbandar" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Porbandar</Link>
                <Link to="/travel/Vadodra" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Vadodra</Link>
                <Link to="/travel/GandhiNagar" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>GandhiNagar</Link>
                <Link to="/travel/Rajkot" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Rajkot</Link>
                <Link to="/travel/Jamnagar" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Jamnagar</Link>
                <Link to="/travel/Junagadh" className='px-5  py-20 text-xl hover:animate-pulse cursor-pointer hover:border-2 hover:border-black/40 border-2 border-white rounded font-bold bg-amber-500 flex items-center justify-center'>Junagadh</Link>

            </div>
            <a class="mx-40 px-20 py-12 text-xl flex items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 ">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gujarat is a state in western India known for its rich history, diverse culture, and vibrant tourism industry. Here are some data points on Gujarat tourism:</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <ul><li>
                            <b>1. Domestic Tourist Arrivals:</b> According to the Ministry of Tourism, Government of India, Gujarat received around 5.9 million domestic tourist visits in 2019, which was an increase of 18.5% from the previous year.</li>
                            <br></br>
                            <li><b>2. Foreign Tourist Arrivals:</b> Gujarat received around 7.1 lakh foreign tourist visits in 2019, which was an increase of 16.5% from the previous year.</li>
                            <br></br>
                            <li><b>3. Top Tourist Destinations:</b> Some of the popular tourist destinations in Gujarat include the Rann of Kutch, Gir National Park, Somnath Temple, Dwarka, Sabarmati Ashram, and the Sun Temple in Modhera.</li>
                            <br></br>
                            <li><b>4. Tourism Revenue:</b> According to the Economic Survey of Gujarat 2020-21, the tourism industry contributed around Rs. 33,000 crore (approx. $4.5 billion) to the state's economy in the year 2019-20.</li>
                            <br></br>
                            <li><b>5. Tourism Infrastructure:</b> Gujarat has a well-developed tourism infrastructure, including airports, highways, railways, and hotels. The state government has also launched several initiatives to promote tourism, such as the "Khushbu Gujarat Ki" campaign, the "Dekho Apna Desh" campaign, and the "Rann Utsav" festival.</li>
                            <br></br>
                            <li><b>6. Heritage Sites: </b>Gujarat is home to several UNESCO World Heritage Sites, including the Champaner-Pavagadh Archaeological Park, the Rani ki Vav stepwell, and the historic city of Ahmedabad.</li>
                            <br></br>
                            <li><b>7. Adventure Tourism:</b> Gujarat offers several opportunities for adventure tourism, such as trekking in the Saputara hills, paragliding in Saputara and Pavagadh, and water sports in the Tithal Beach in Valsad.</li>
                            <br></br>
                            Overall, Gujarat's tourism industry has been growing steadily over the years, with the state offering a diverse range of attractions and experiences for both domestic and foreign tourists.
                        </ul><br></br></p>
                </div>
            </a>
            <br></br><br></br>
        </section>
    );
}

export default Travel
