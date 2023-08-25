import React, { useState } from 'react'
import axios from 'axios'
import weatherbg from '../components/sunset.jpg'

function KnowWeather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bac684aea79ab8a127d4581544983030`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app w-full h-screen relative bg-cover bg-center" style={{backgroundImage:`url(${weatherbg})`}}>
      <div className="text-center p-2">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container1">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp.toFixed()-32)*(5/9))}°C</h1> : null}
          </div>
          <div className="ml-40 transform rotate-360 -translate-x-1/5 transform-origin-top-left">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="flex justify-evenly text-center w-full mx-auto my-48 p-4 rounded-xl bg-opacity-20 bg-black">
            <div className="">
              {data.main ? <p className='bold'>{Math.round((data.main.feels_like.toFixed()-32)*(5/9))}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}
export default KnowWeather