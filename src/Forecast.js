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