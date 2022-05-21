import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import axios from "axios";
import { Rings } from  'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./formattedDate";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

export default function Weather(){
    const [weatherData , setWeatherData] = useState({Ready: false})
    const [city , setCity] = useState(null)
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
    function handleSubmit(event){
        event.preventDefault()
        search()
    }
    function handleChange(event){
        event.preventDefault()
        setCity(event.target.value)
    }
    function search(){
        const apiKey = "1bd0f6227982b36e9b4500fb504de9e8";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleWeather)
    }

    if (weatherData.Ready){
        return(
            <div>
                <form className="col-lg-7 mx-auto my-5" onSubmit={handleSubmit}>
                    <div className="input-group m-3">
                        <input type="text" className="form-control p-1" placeholder="Search City.." aria-label=""
                               aria-describedby="basic-addon1" onChange={handleChange}/>
                        <div className="input-group-prepend">
                            <button className="btn faSearchLocation" type="submit">
                                <FontAwesomeIcon icon={faSearchLocation} />
                            </button>
                        </div>
                    </div>
                </form>
                <section className="my-3 mx-auto col-lg-11">
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
            </div>
        )
    }else{
        search()
        return (
            <div>
                <form className="col-lg-7 mx-auto my-5" onSubmit={handleSubmit}>
                    <div className="input-group m-3">
                        <input type="text" className="form-control p-1" placeholder="Search City.." aria-label=""
                               aria-describedby="basic-addon1" onChange={handleChange}/>
                        <div className="input-group-prepend">
                            <button className="btn faSearchLocation" type="submit">
                                <FontAwesomeIcon icon={faSearchLocation} />
                            </button>
                        </div>
                    </div>
                </form>
                <section className="my-5 mx-auto text-center col-lg-11 justify-content-center">
                    <Rings
                        height="100"
                        width="100"
                        color='#C8FCF6'
                        ariaLabel='loading'
                    />
                    <h3>Search for a City..</h3>
                </section>
            </div>
        )
    }

}