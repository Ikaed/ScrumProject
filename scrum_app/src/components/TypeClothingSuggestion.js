 
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
 
 
 
 
 
const TypeClothingSuggestion = ({hour}) => {
 
 
  function getTempClothing(hour) {
   
    if(hour.temp >= -11 && hour.temp <= -19) {
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
    
        <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20jacket&refine=discount_band:4" alt="A winter jacket" target="_blank">
        <img src={require('../assets/pic/clothing/winterjacket.png')} /> 
        </a>
    
        <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20hat&refine=discount_band:4" alt="A winter jacket" target="_blank">
        <img src={require('../assets/pic/clothing/winter-hat.png')} /> 
        </a>
    
        
        </>

  
      //checks a value between -19 and up to 15 degrees
    } else if (hour.temp <= -20) {
return<>
      <a href="https://www.asos.com/search/?currentpricerange=0-115&q=gloves&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/gloves.png')} alt="Pair of gloves"/>
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/scarf.png')} alt="A scarf"/>
    </a>

    <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20boots&refine=discount_band:4" alt="A boot" target="_blank">
      <img src={require('../assets/pic/clothing/boot.png')} /> 
      </a>
  
      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20jacket&refine=discount_band:4" alt="A winterjacket" target="_blank">
      <img src={require('../assets/pic/clothing/winterjacket.png')} /> 
      </a>
  
      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=sweater&refine=discount_band:4" alt="A sweater" target="_blank">
      <img src={require('../assets/pic/clothing/sweater.png')} /> 
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=trousers&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/trousers.png')} alt="A trouser">
      </img>
      </a>

      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=winter%20hat&refine=discount_band:4" alt="A winter jacket" target="_blank">
        <img src={require('../assets/pic/clothing/winter-hat.png')} /> 
        </a>
    
  </>

    }
    else if (hour.temp > -10 && hour.temp <= 16){
   
      return <>
      <a href="https://www.asos.com/search/?currentpricerange=0-195&q=scarf&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/scarf.png')} alt="A scarf">
          </img>
          </a>
     
          <a href="https://www.asos.com/search/?currentpricerange=25-300&q=padded%20jacket&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/jacket.png')} alt="A jacket">
      </img>
      </a>

      
      <a href="https://www.asos.com/search/?currentpricerange=0-325&q=sweater&refine=discount_band:4" target="_blank">
        <img src={require('../assets/pic/clothing/sweater.png')} alt="A sweater" /> 
        </a>

      
          </>
          
   
        
      
      
} else if (hour.temp >= 17 && hour.sky == 'Clear') {
   
  return <>
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
    <img src={require('../assets/pic/clothing/t-shirt.png')} alt="A t-shirt" target="_blank">
      </img>
      </a>
      <a href="https://www.asos.com/search/?currentpricerange=25-300&q=cap&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/cap.png')} alt="A cap">
      </img>
      </a>
   
   
  
</>
   
  }
}
//the temperature should not recommend wearing a jeansjacket if it is below a certain temperature
   function getWindClothing(hour) {
    if (hour.wind_speed >= 5 && hour.temp >= 16 && hour.temp <= 19) {
      return <>
       <a href="https://www.asos.com/search/?currentpricerange=25-300&q=coat&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/coat.png')} alt="A coat">
      </img>
      </a>
   
      

   <a href="https://www.asos.com/search/?currentpricerange=25-300&q=hoodie&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/hoodie.png')} alt="A hoodie">
  </img>
  </a>


  </>
  
       } else if (hour.temp >= 20 && hour.sky == 'Clear' && hour.wind_speed >= 3 && hour.wind_speed <= 4) {
   
          return <>
          <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
            <img src={require('../assets/pic/clothing/t-shirt.png')} alt="A t-shirt" target="_blank">
              </img>
              </a>
              <a href="https://www.asos.com/search/?currentpricerange=25-300&q=cap&refine=discount_band:4" target="_blank">
              <img src={require('../assets/pic/clothing/cap.png')} alt="A cap">
              </img>
              </a>
           
                <a href="https://www.asos.com/search/?currentpricerange=25-300&q=shorts&refine=discount_band:4" target="_blank">
                <img src={require('../assets/pic/clothing/shorts.png')} alt="Shorts">
                </img>
                </a>

          
       <a href="https://www.asos.com/search/?currentpricerange=25-300&q=jeansjacket&refine=discount_band:4" target="_blank">
      <img src={require('../assets/pic/clothing/jeansjacket.png')} alt="A jeans jacket">
      </img>
      </a>
   
                </>
    }
  }
   
 function getSky(hour) {
   if(hour.sky == 'Clouds' && hour.temp >= 20) {
  return <> 
  <a href="https://www.asos.com/search/?currentpricerange=0-195&q=t%20shirt&refine=discount_band:4" target="_blank">
   <img src={require('../assets/pic/clothing/t-shirt.png')} alt="A t-shirt" target="_blank">
     </img>
     </a>
     <a href="https://www.asos.com/search/?currentpricerange=25-300&q=shorts&refine=discount_band:4" target="_blank">
                <img src={require('../assets/pic/clothing/shorts.png')} alt="Shorts">
                </img>
                </a>
                
     </>
   } else if (hour.sky == 'Clouds' && hour.temp >= 16 && hour.temp <= 19) {
return <>

<a href="https://www.asos.com/search/?currentpricerange=25-300&q=hoodie&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/hoodie.png')} alt="A hoodie">
  </img>
  </a>

  <a href="https://www.asos.com/search/?currentpricerange=25-300&q=jeansjacket&refine=discount_band:4" target="_blank">
  <img src={require('../assets/pic/clothing/jeansjacket.png')} alt="A jeans jacket">
  </img>
  </a>

</>
   
   } else if (hour.sky == "Rain" && hour.temp >=0) {
    return <> 
    <a href="https://www.asos.com/search/?currentpricerange=0-195&q=raincoat&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/raincoat.png')} alt="A raincoat" target="_blank">
       </img>
       </a>
       <a href="https://www.asos.com/search/?currentpricerange=0-195&q=umbrella&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/umbrella.png')} alt="An umbrella" target="_blank">
       </img>
       </a>

       </>
   } else if (hour.sky == "Clear") {
    return <> 
    <a href="https://www.asos.com/search/?currentpricerange=0-195&q=sunglasses&refine=discount_band:4" target="_blank">
     <img src={require('../assets/pic/clothing/sunglasses.png')} alt="Sunglasses" target="_blank">
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

