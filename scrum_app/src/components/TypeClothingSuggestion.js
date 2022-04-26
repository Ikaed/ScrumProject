 
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
 
 
 
 
 
const TypeClothingSuggestion = ({hour}) => {
 
 
  function getTempClothing(hour) {
   
    if(hour.temp <= -20) {
      return <>
     
      <a href="https://www.asos.com/search/?currentpricerange=0-115&q=gloves&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/gloves.png')} alt="Pair of gloves"/>
        </a>

        <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/scarf.png')} alt="A scarf"/>
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20boots&refine=discount_band:4" alt="A boot" target="_blank">
        <img src={require('../assets/pic/clothing/boot.png')} /> 
        </a>
        
        </>
      //checks a value between -19 and up to 15 degrees
    } else if (hour.temp > -19 && hour.temp <= 15){
   
      return <>
      <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/scarf.png')} alt="A scarf" target="_blank">
          </img>
          </a>
          <a href="https://www.asos.com/search/?currentpricerange=25-300&q=padded%20jacket&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/jacket.png')} alt="A jacket">
      </img>
      </a>

      
          </>

} else if (hour.temp >= 17 && hour.sky == 'Clear') {
   
  return <>
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/t-shirt.png')} alt="A t-shirt" target="_blank">
      </img>
      </a>
    

  
      </>

/*} else if (hour.temp > 20){
   
  return <>
  <a href="https://www.asos.com/search/?q=scarf" target="_blank">
    <img src={require('../assets/pic/clothing/scarf.png')} alt="A scarf" target="_blank">
      </img>
      </a>
      </>
      
    }
    */
   }
  }
//the temperature should not recommend wearing a jeansjacket if it is below a certain temperature
   function getWindClothing(hour) {
    if ((hour.wind_speed > 3) && !(hour.temp <= -20) && hour.temp >= 16) {
      return <>
       <a href="https://www.asos.com/search/?currentpricerange=25-300&q=jeans%20jacket&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/jeansjacket.png')} alt="A jeans jacket">
      </img>
      </a>
      </>
    //} else if (hour.wind_speed > 3) {
     // return <img src={require('...')} alt=""></img>
    //}
   }
  }

 function getSky(hour) {
   if(hour.sky == 'Clouds' && hour.temp >= 20) {
  return <> 
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
   <img src={require('../assets/pic/clothing/t-shirt.png')} alt="A t-shirt" target="_blank">
     </img>
     </a>
     </>
   }

   
 }


  return (
 
 
    <div className="TypeClothingSuggestion">
         {getSky(hour)}  {getTempClothing(hour)}  {getWindClothing(hour)} 
      </div>
    );
 
     
   
}
 


export default TypeClothingSuggestion;

