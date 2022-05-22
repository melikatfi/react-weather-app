import React, {useState } from 'react'

export default function WeatherTemp(props){
    const [unit , setUnit] = useState("Celsius")

    function ShowFahrenheit(event){
        event.preventDefault()
        setUnit("Fahrenheit")
    }

    function ShowCelsius(event){
        event.preventDefault()
        setUnit("Celsius")
    }

    if (unit === "Celsius"){
        return(
            <div className="row">
                <h1 className="col-6">{props.Celsius}</h1>
                <span className="col-6 convert">
                    <span>C</span>
                /
                <a href="/" className="text-light text-decoration-none" onClick={ShowFahrenheit}>F</a>
            </span>
            </div>
        )
    }else {
        let Fahrenheit = (props.Celsius * 9) / 5 + 32
        return(
            <div className="row">
                <h1 className="col-6">{Math.round(Fahrenheit)}</h1>
                <span className="col-6 convert">
                <a href="/" className="text-light text-decoration-none"  onClick={ShowCelsius}>C</a>
                /
                <span>F</span>
            </span>
            </div>
        )
    }

}