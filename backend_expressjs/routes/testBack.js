var express = require('express');
var router = express.Router();

//import fetch from "../node_modules/cross-fetch/node_modules/node-fetch/lib/index.js";
//fetch = require('cross-fetch/node_modules/node-fetch/lib/index.mjs');
//import fetch from 'node-fetch';
const fetch = require('node-fetch');



router.get('/', function(req, res, next) {
    res.send('Working  ok');
    //res.json({ ok: 'Working ?' })
});

router.get('/po', function(req, res, next) {

    let city = req.query.city;

    if(city == null ){
        city = "kiruna";
    }
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                console.log(data);
                res.json(data);
    });

    
});

module.exports = router;

// getting the current location? maybe hard, postpone it ?
// treat the data to submit a json with all the necessary information (humidity, temperature, etc.)
/*
{ 
    "humidity" = "",
    "temp" = "",


}}

we need to create methods for the parameters in another file weather_functions.js 
localhost:9000

*/
