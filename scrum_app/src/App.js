import logo from './logo.svg';
import './assets/App.css';
import React, { useState, useEffect } from "react";

import SearchContainer from './components/SearchContainer';
import WeatherBox from './components/WeatherBox';


function App() {

  const [backend,setBackend]=useState([])

  let submissionHandlerCity = (e) =>{
    if (e.key === 'Enter') {

      fetch('http://localhost:9000/testBack/po/?city=' + e.target.value)
        .then(res => res.json())
        .then(backend => setBackend(backend),
            console.log(backend));
      console.log(backend);
    }
  
  }
  
  useEffect(() => {
    fetch('http://localhost:9000/testBack/po')
              .then(res => res.json())
              .then(backend => setBackend(backend));
              console.log(backend)
  }, []);
 
  return (
    <div className="App">
      <h1>Weather provider</h1>
      <div> <SearchContainer submissionHandlerCity={submissionHandlerCity} /> </div>
      <div> <WeatherBox results={backend}> </WeatherBox></div>
      
    </div>
  );
}

export default App;
    