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
        <section className="my-3 mx-auto col-lg-11 bg-info">
            <div className=" text-center">
                <h2>{props.Name}</h2>
            </div>
            <div className="text-center row">
                <div className="col-lg-6">
                    <ReactAnimatedWeather
                        icon={"CLEAR_DAY"}
                        color="silver"
                        size="100"
                        animate="true"
                    />
                </div>
                <div className="col-lg-6">
                    <h2>{props.Temp}</h2>
                </div>
            </div>
        </section>
    )
}