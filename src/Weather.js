import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import { Audio } from  'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

export default function (props){
    return(
        <section className="my-5 mx-auto col-lg-11">
            <div className=" text-center cityName">
                <h1>{props.Name}</h1>
            </div>
            <div className="text-center row justify-content-evenly my-3">
                <div className="col-lg-3 icon">
                    <ReactAnimatedWeather
                        icon={"CLEAR_DAY"}
                        color="white"
                        size="95"
                        animate="true"
                    />
                </div>
                <div className="col-lg-3 temp">
                    <h1>{props.Temp}</h1>
                </div>
            </div>
        </section>
    )
}