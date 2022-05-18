import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

export default function Search(){
    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
    }
    function handleChange(event){
        event.preventDefault()
    }
    return(
        <form className="col-lg-7 mx-auto my-5" onSubmit={handleSubmit}>
            <div className="input-group m-3">
                <input type="text" className="form-control p-1" placeholder="Search City.." aria-label=""
                       aria-describedby="basic-addon1" onChange={handleChange}/>
                <div className="input-group-prepend">
                    <button className="btn faLocationDot" type="submit">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </button>
                    <button className="btn faSearchLocation" type="button">
                        <FontAwesomeIcon icon={faSearchLocation} />
                    </button>
                </div>
            </div>
        </form>
    )
}