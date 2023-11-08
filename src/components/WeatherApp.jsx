import React from 'react'

import searchIcon from "../assets/search_FILL1_wght400_GRAD0_opsz48.svg"


function WeatherApp() {

    const apiKey = "3c8ab3da623dda8a3258bdb6d5bcfa34";

    const search = async () =>{
        const element = document.getElementById("cityInput").value;
        console.log(element)

        if(element === ""){
            return 0;
        };

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${apiKey}`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data)

        var wind = document.getElementById("windRate");
        var temperature = document.getElementById("temperature");
        var humidity = document.getElementById("percentage");
        var location = document.getElementById("location");

        console.log(data.main.humidity)

        humidity.innerHTML = data.main.humidity;
        wind.innerHTML = data.wind.speed + " km/h";
        temperature.innerHTML = data.main.temp + '&deg;' +"C";
        location.innerHTML = data.name;
    }


  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' id='cityInput' placeholder='search' />
            <img src={searchIcon} onClick={() =>{search()}}/>
        </div>
        <div id='weatherImage'>
            <hr></hr>
        </div>
        <div id='temperature'></div>
        <div id='location'></div>
        <div id='dataContainer'>
            <div className='element'>
                <div className='data'>
                    <div className='dataNumber' id='percentage'></div>
                    <div className='text'><p>humidity</p></div>
                </div>
            </div>
            <div className='element'>
                <div className='data'>
                    <div className='dataNumber' id='windRate'></div>
                    <div className='text'><p>Wind Speed</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp