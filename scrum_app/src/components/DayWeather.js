
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';

const DayWeather = ({temp, sunrise, sunset, cloud_coverage, wind_speed, wind_direction}) => {

      
        return (
            <div>
               <div>{temp}</div>
               <div>{sunrise}</div>
               <div>{sunset}</div>
               <div>{cloud_coverage}</div>
               <div>{wind_speed}</div>
               <div>{wind_direction}</div>

            </div>
        );
      
    
}

export default DayWeather;