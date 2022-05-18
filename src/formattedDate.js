import React from "react";

export default function FormattedDate(props){
    let Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let Day = Days[props.Value.getDay()]
    let Hours = props.Value.getHours()
    if (Hours<10){
        Hours = `0${Hours}`
    }
    let Minutes = props.Value.getMinutes()
    if (Minutes<10){
        Minutes = `0${Minutes}`
    }
    return(
        <span>
            {Day} {Hours}:{Minutes}
        </span>
    )
}
