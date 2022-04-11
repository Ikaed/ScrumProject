
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';

const DayWeather = ({temp, sunrise, sunset, cloud_coverage, wind_speed, wind_direction}) => {

      
        return (
            <div className="dayweather_flexcontainer">
               <div className="dayweather_item">
                   <div className="dayweather_text">Temperature</div>
                   <div className="dayweather_value">{temp}</div>
                </div>

               <div className="dayweather_item">
                   <div className="dayweather_text">Sunrise</div>
                   <div className="dayweather_value">{sunrise}</div>
               </div>

               <div className="dayweather_item">
                   <div className="dayweather_text">Sunset</div>
                   <div className="dayweather_value">{sunset}</div>
                </div>
               <div className="dayweather_item">
                  <div className="dayweather_text">Coverage</div> 
                  <div className="dayweather_value">{cloud_coverage}</div>
                </div>

               <div className="dayweather_item">
                   <div className="dayweather_text">Wind speed</div>
                   <div className="dayweather_value">{wind_speed}</div>
                </div>
                
               <div className="dayweather_item">
                   <div className="dayweather_text">Wind direction</div>
                   <div className="dayweather_value">{wind_direction}</div>
               </div>

            </div>
        );
      
    
}

export default DayWeather;