
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import DayWeather from "./DayWeather";

import '../assets/WeatherBox.css';


const WeatherBox = ({results}) => {

        var arrayWeeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        var arr = [];
        Object.keys(results).forEach(function(key) {
            arr.push(results[key]);
            
        });
        console.log(arr);

        return (
            
        
            <div className = "weatherbox_container">
            
                {arr.map((item, i) => <DayWeather key={i}
                                            temp={item.temp}
                                            sunrise={item.sunrise}
                                            sunset={item.sunset}
                                            cloud_coverage={item.cloud_coverage}
                                            wind_speed={item.wind_speed}
                                            wind_direction={item.wind_direction}
                                />
                        )
               }
        
            </div>
        );
      

    
}

export default WeatherBox;