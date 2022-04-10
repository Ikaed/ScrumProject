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
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                console.log(data);
                //res.json(data);
                res.json(formatWeatherDayOne(data));
    });

    
});

function formatWeatherDayOne(data){
    return jsonDoc = {
        "0" : {
            "temp" : getTemperature(data),
            "sunrise" : getSunrise(data),
            "sunset" : getSunset(data),
            "cloud_coverage" : getCloudCoverage(data),
            "wind_speed": getWindSpeed(data),
            "wind_direction": getWindDirection(data)
        }
    }

    
}

// ----
function getTemperature(data){
    return data.main.temp;
}


// ---
function getSunrise(data){
    let unixTime = data.sys.sunrise;
    const date = new Date(unixTime*1000);
    return date.toLocaleDateString("en-US"); 
}

function getSunset(data){
    let unixTime = data.sys.sunset;
    const date = new Date(unixTime*1000);
    return date.toLocaleDateString("en-US");
    
}

// ----

function getCloudCoverage(data){
    return data.clouds.all;
}

// ----

function getWindSpeed(data){
    return data.wind.speed;
}

function getWindDirection(data){
    return data.wind.deg;
}

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
