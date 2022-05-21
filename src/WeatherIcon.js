import React from 'react'
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    console.log(props)
    return(
        <ReactAnimatedWeather
            icon={"CLEAR_DAY"}
            color="white"
            size="95"
            animate="true"
        />
    )
}