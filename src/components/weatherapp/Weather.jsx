import React, { useState } from 'react'
import './Weather.css'

import search_icon from '../Asserts/search.png'
import clear_icon from '../Asserts/clear.png'
import cloud_icon from '../Asserts/cloud.png'
import drizzle_icon from '../Asserts/drizzle.png'
import humidity_icon from '../Asserts/humidity.png'
import rain_icon from '../Asserts/rain.png'
import snow_icon from '../Asserts/snow.png'
import wind_icon from '../Asserts/wind.png'




const Weather = () => {

  const [wicon, setWicon] = useState(cloud_icon);

  let api_key = 'c1ba57d6c653aab784364006d5e3501b';

  const search = async () => {
    const element = document.getElementsByClassName("textInput")
    if(element[0].value === '')
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

    let Response = await fetch(url);
    let data = await Response.json();

    const humidity = document.getElementsByClassName("hum-per");
    const windspeed = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("temperature");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML = data.main.humidity + " %";
    windspeed[0].innerHTML = data.wind.speed + " KMPH";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
    {
      setWicon(clear_icon)
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
    {
      setWicon(cloud_icon)
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
    {
      setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
    {
      setWicon(drizzle_icon)
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
    {
      setWicon(rain_icon)
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
    {
      setWicon(rain_icon)
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
    {
      setWicon(snow_icon)
    }
    else 
    {
      setWicon(clear_icon)
    }
  }
  return (
    <div className='container'>
      <>

       <div className='input-city'>
        <input type='text' className='textInput' placeholder='search'></input>
        <button className='search-buttton' onClick={() => {search()}}>
          <img src={search_icon} className='searchicon' />
        </button>
       </div>

       <div className='weather-icon'>
        <img src={wicon} className='weather-img'/>
       </div>

       <div className='temperature'>--°c</div>
       <div className='location'>Search</div>

       <div className='data-container'>
        <div className='elements'>
          <img src={humidity_icon} />
          <div className='humidity'>
            <div className='hum-per'>-- %</div>
            <div className='humidity-text'>Humidity</div>
          </div>
        </div>

        <div className='elements'>
          <img src={wind_icon} />
          <div className='wind'>
            <div className='wind-speed'>-- KMPH</div>
            <div className='wind-text'>Wind Speed</div>
          </div>
        </div>
       </div>

      </>

    </div>
  )
}

export default Weather