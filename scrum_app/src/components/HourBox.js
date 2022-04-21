import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';
import HourWeather from "./HourWeather";


const HourBox = () => {

      
        return (
          <div className="HourBox">

              <HourWeather> </HourWeather> 
                       
      
          </div>
        );
      
    
}

export default HourBox;