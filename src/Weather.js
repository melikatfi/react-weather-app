import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import axios from "axios";
import { Audio } from  'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./formattedDate";

export default function (){
    function handleWeather(response){
        setWeatherData({
            Ready: true,
            Name: response.data.name,
            Temperature: Math.round(response.data.main.temp),
            Description: response.data.weather[0].description,
            Icon: response.data.weather[0].icon,
            Humidity: response.data.main.humidity,
            FeelsLike: Math.round(response.data.main.feels_like),
            Date : new Date(response.data.dt * 1000),
        })
    }
    const [weatherData , setWeatherData] = useState({Ready: false})

    if (weatherData.Ready){
        return(
            <section className="my-5 mx-auto col-lg-11">
                <div className=" text-center cityName">
                    <h1 className="text-capitalize">{weatherData.Name}</h1>
                </div>
                <div className="text-center row justify-content-evenly my-3">
                    <div className="col-lg-3 icon">
                        <ReactAnimatedWeather
                            icon={"CLEAR_DAY"}
                            color="white"
                            size="95"
                            animate="true"
                        />
                        <h2>{weatherData.Description}</h2>
                        <h2>
                            <FormattedDate Value={weatherData.Date} />
                        </h2>
                    </div>
                    <div className="col-lg-3 temp">
                        <h1>{weatherData.Temperature}</h1>
                        <div className="row">
                            <h2 className="col-lg-6">feels like : {weatherData.FeelsLike}</h2>
                            <h2 className="col-lg-6">humidity : {weatherData.Humidity}%</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
        let city = "tehran";
        const apiKey = "1bd0f6227982b36e9b4500fb504de9e8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleWeather)
        return (
            <section className="my-5 mx-auto text-center col-lg-11 justify-content-center">
                    <Audio
                        height="100"
                        width="100"
                        color='#C8FCF6'
                        ariaLabel='loading'
                    />
                <h3>loading..</h3>
            </section>
        )
    }

}