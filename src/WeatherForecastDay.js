import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div className="col-lg-1 mb-5 mt-3">
            <h5>{day()}</h5>
            <WeatherIcon code={props.data.weather[0].icon} size={50}/>
            <div className="row text-center">
                <h3 className="col-4">{Math.round(props.data.temp.max)}</h3>/<h3 className="col-4">{Math.round(props.data.temp.min)}</h3>
            </div>
        </div>
    );
}