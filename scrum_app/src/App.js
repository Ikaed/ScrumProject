
import './assets/App.css';
import React, { useState, useEffect } from "react";

import SearchContainer from './components/SearchContainer';
import WeatherBox from './components/WeatherBox';

import logo from './assets/pic/logo/logolq.png'; 
import DetailsBox from './components/DetailsBox';


function App() {

  const [backend,setBackend]=useState([])

  let submissionHandlerCity = (e) =>{
    if (e.key === 'Enter') {

      fetch('http://localhost:9000/testBack/po/?city=' + e.target.value)
        .then(res => res.json())
        .then(backend => setBackend(backend.days),
            console.log(backend));
      console.log(backend);
    }
  
  }

  let clickWeatherDay = (e) =>{
    console.log(e.currentTarget.id)
  }
  
  useEffect(() => {
    fetch('http://localhost:9000/testBack/po')
              .then(res => res.json())
              .then(backend => setBackend(backend.days));
              console.log(backend)
  }, []);
 
  return (
    <div className="App">
      <div class="Logo">
        <nav class="w3-bar w3-black">
            <a href="" class="Logo"><img src={logo}/></a>
        </nav>
      </div>
      <h1>Weather provider</h1>
      <div> <SearchContainer submissionHandlerCity={submissionHandlerCity} /> </div>
      <div> <WeatherBox results={backend} clickWeatherDay={clickWeatherDay}> </WeatherBox></div>
      <div> <DetailsBox> </DetailsBox></div>
    </div>
  );
}

export default App;
    