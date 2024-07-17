import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import cloud_icon from '../assets/cloud.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
     <div className="search-bar">
      <input type="text" placeholder='Search here...' />
      <img src={search_icon} alt="" />
     </div>
     <img src={clear_icon} alt="" />
     <p>16°C</p>
    </div>
  )
}

export default Weather