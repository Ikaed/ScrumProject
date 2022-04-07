import logo from './logo.svg';
import './assets/App.css';
import React, { useState, useEffect } from "react";

import SearchContainer from './components/SearchContainer';


function App() {

  const [backend,setBackend]=useState("")
  
  useEffect(() => {
    fetch('http://localhost:9000/testBack/po')
              .then(res => res.json())
              .then(backend => setBackend(backend.main.temp));
  }, []);
 
  /*useEffect(() => {
    fetch('http://localhost:9000/testBack').then(res => res.text()).then(backend => setBackend(backend));
  }, []);*/

  return (
    <div className="App">
      <div> <SearchContainer/> </div>
      <div>{backend}</div>
    </div>
  );
}

export default App;
    