 
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
 
import '../assets/DayWeather.css';
 
 
 
 
 
const TypeClothingSuggestion = ({hour}) => {
 
 
  function getTempClothing(hour) {
   
    if(hour.temp <= -20) {
      return <><img src={require('../assets/pic/clothing/gloves.png')} /><img src={require('../assets/pic/clothing/boot.png')} /><a href="https://www.asos.com/men/fashion-feed/2017_12_12-tues/top-10-winter-boots/">Considering buying new boots? Click here to get 30% off your purchase</a></>
    } else if (hour.temp == 14 ){
      return <img src={require('../assets/pic/clothing/raincoat.png')} />
 
    }
   }
//the temperature should not recommend wearing a jeansjacket if it is below a certain temperature
   function getWindClothing(hour) {
    if ((hour.wind_speed > 3) && !(hour.temp <= -20)) {
      return <img src={require('../assets/pic/clothing/jeansjacket.png')}></img>
    }
   }
  return (
 
 
    <div className="TypeClothingSuggestion">
          {getTempClothing(hour)}  {getWindClothing(hour)}
      </div>
    );
 
     
   
}
 
export default TypeClothingSuggestion;

