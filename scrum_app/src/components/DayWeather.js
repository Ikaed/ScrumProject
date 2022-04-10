
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';

const DayWeather = ({name, temp, sunrise, sunset, cloud_coverage, wind_speed, wind_direction}) => {

      
        return (
            <div>
                <div><b>{name}</b></div>
                <div>It is currently {temp} &deg;C</div>
               <div>The sun rises {sunrise}</div>
               <div>The sun sets {sunset}</div>
               <div>The cloud coverage is {cloud_coverage} %</div>
               <div>The wind speed is {wind_speed} km/h</div>
               <div>The wind direction is {wind_direction} degrees</div>

            </div>
        );
      
    
}

export default DayWeather;