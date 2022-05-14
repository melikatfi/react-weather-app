import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import { Audio } from  'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

export default function (){
    return(
        <form className="col-lg-7 m-auto">
            <div className="input-group m-3">
                <input type="text" className="form-control p-1" placeholder="Search City.." aria-label=""
                       aria-describedby="basic-addon1" />
                <div className="input-group-prepend">
                    <button className="btn bg-light faLocationDot" type="button">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </button>
                    <button className="btn bg-light faSearchLocation" type="button">
                        <FontAwesomeIcon icon={faSearchLocation} />
                    </button>
                </div>
            </div>
        </form>
    )
}