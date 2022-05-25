import React,{useState, useEffect} from 'react';

const Weather = ({weatherData}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{weatherData.name}</h5>
                <p>Temprature: {weatherData.main.temp}</p>
                <p>Sunrise: {weatherData.sys.sunrise}</p>
                <p>Sunset: {weatherData.sys.sunset}</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
            </div>
        </div>
    )
}

export default Weather;