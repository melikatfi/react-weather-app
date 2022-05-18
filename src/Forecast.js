import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(props){
    return(
        <div className="col-lg-1 mb-5 mt-3">
            <ReactAnimatedWeather
                icon="FOG"
                color="white"
                size="30"
                animate="true"
            />
            <h1>{props.Temp}</h1>
        </div>
    )
}