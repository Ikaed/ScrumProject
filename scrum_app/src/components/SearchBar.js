
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';


const SearchBar = ({submissionHandlerCity}) => {

        const [inputText, setInputText] = useState("");
        let inputHandler = (e) => {
          //convert input text to lower case
          var lowerCase = e.target.value.toLowerCase();
          setInputText(lowerCase);
        };

       
        //'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=P&types=geocode&key=AIzaSyAV5_m8TaCdFNHMesdnNMp8C5ixrymRGx4',

        
        /*useEffect(() => {
          fetch('')
                    .then(res => res.json())
                    .then(backend => setBackend(backend.main.temp));
        }, []);*/
      
        return (
          <div className="main">
            <h1>React Search</h1>
            <div className="search">
            
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
                value={inputText}
                onKeyDown={submissionHandlerCity}
              />
             
            
            </div>
           
          </div>
        );
      
    
}

export default SearchBar;