import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';


const ParametersDetail = ({hour}) => {

        
      
        return (
            <div className="ParameterAll">
               <div className="Parameter-all">
                   <div className="Label">Temperature</div>
                   <div className="value">{hour.temp}</div>
                </div>

               <div className="Parameter-all">
                   <div className="Label2">Sunrise</div>
                   <div className="value2">{hour.sunrise}</div>
               </div>

               <div className="Parameter-all">
                   <div className="Label3">Sunset</div>
                   <div className="value3">{hour.sunset}</div>
                </div>
               <div className="Parameter-all">
                  <div className="Label4">Coverage</div> 
                  <div className="value4">{hour.cloud_coverage}</div>
                </div>

               <div className="Parameter-all">
                   <div className="Label5">Wind speed</div>
                   <div className="value5">{hour.wind_speed}</div>
                </div>
                
               <div className="Parameter-all">
                   <div className="Label6">Wind direction</div>
                   <div className="value6">{hour.wind_direction}</div>
               </div>
      </div> 
        );
      
    
}

export default ParametersDetail;