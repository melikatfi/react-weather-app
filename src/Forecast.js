import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.lat]);

    function handleForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="row justify-content-evenly">
                <WeatherForecastDay data={forecast[0]}/>
                <WeatherForecastDay data={forecast[1]}/>
                <WeatherForecastDay data={forecast[2]}/>
                <WeatherForecastDay data={forecast[3]}/>
                <WeatherForecastDay data={forecast[4]}/>
            </div>
        );
    } else {
        const apiKey = "1bd0f6227982b36e9b4500fb504de9e8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecast)

        return null;
    }

}