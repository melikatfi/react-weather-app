import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import axios from "axios";
import { Audio } from  'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather';

export default function (props){
    function handleWeather(response){
        console.log(response)
        setWeatherData({
            Ready: true,
            Name: response.data.name,
            Temperature: Math.round(response.data.main.temp),
            Description: response.data.weather[0].description,
            Icon: response.data.weather[0].icon,
            Humidity: response.data.main.humidity,
            FeelsLike: Math.round(response.data.main.feels_like),

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
                    </div>
                    <div className="col-lg-3 temp">
                        <h1>{weatherData.Temperature}</h1>
                        <div className="row">
                            <h3 className="col-lg-6">feels like : {weatherData.FeelsLike}</h3>
                            <h3 className="col-lg-6">humidity : {weatherData.Humidity}%</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
        let city = "new york";
        const apiKey = "b69a892df9f98e17c54dab23a734680a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log(apiUrl)
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