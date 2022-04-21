
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';
import ParametersDetail from "./ParametersDetail";
import HourBox from './HourBox';


const DetailsBox = () => {

    
        return (
            <div className="DetailsBox">
                <div> <HourBox> </HourBox></div>
                <div> <ParametersDetail> </ParametersDetail></div>
          </div>
        );
      
    
}

export default DetailsBox;