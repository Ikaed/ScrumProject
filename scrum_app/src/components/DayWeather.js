
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';

import '../assets/DayWeather.css';

const DayWeather = ({index, day, clickWeatherDay}) => {


      
        return (
            <div>
                <div className={"index_" + index}><button className="day" onClick={clickWeatherDay} id={day}> {day} </button><p className="Temp">7C</p></div>  

            </div>
       

           
        );
      
    
}

export default DayWeather;