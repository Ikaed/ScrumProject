import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';
import HourWeather from "./HourWeather";


const HourBox = ({results}) => {

        var arr = [];
        Object.keys(results).forEach(function(key) {
            arr.push(results[key]);
            
        });
        console.log(arr);


        return (
          <div className="HourBox">

  
              <div>
                {arr.map((item, i) => <HourWeather key={i} index={"HourBox_" + {i}} 
                                           
                                           />
                                   )
                          } 
              </div>

      
          </div>
        );
      
    
}

export default HourBox;