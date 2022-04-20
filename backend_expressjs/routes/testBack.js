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

router.get('/po', async function(req, res, next) {

    let city = req.query.city;

    if(city == null ){
        
        let response = await fetch('https://geolocation-db.com/json');
        let data = await response.json();
        city = data.city;
    }
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                //console.log(data.list[0]);
                //res.json(data);
                //res.json(formatWeather(data.list));
                console.log(formatWeather(data.list));
    });

    
});

function formatWeather(data){

    let jsonDoc = {};
    let currentKey = 0;

    let dayKey;
    let daywait;

    let toLoop;
    
    daywait = howManyMoreToLoop(extractCurrentTime(data[0].dt_txt));
    dayKey = extractCurrentDay(data[0].dt_txt);
    toLoop = daywait + currentKey;


    // Compare the current date with the first index corresponding to the date in the json file retrieved from the request
    var d = new Date(extractCurrentYear(data[currentKey].dt_txt),
                    transformMonthIntoDateFormat(extractCurrentMonth(data[currentKey].dt_txt)),
                    extractCurrentDay(data[currentKey].dt_txt));

    
    if(getCurrentDate() < d && checkDaysAreDifferent(extractCurrentDay(data[currentKey].dt_txt))){
        
        jsonDoc[dayKey][extractCurrentTime(data[currentKey].dt_txt)] = {
            "temp" : getTemperature(data[currentKey]),
            "sunrise" : getSunrise(data[currentKey]),
            "sunset" : getSunset(data[currentKey]),
            "cloud_coverage" : getCloudCoverage(data[currentKey]),
            "wind_speed": getWindSpeed(data[currentKey]),
            "wind_direction": getWindDirection(data[currentKey])
        };
    }
    else{
        if(!jsonDoc["BOOM"])jsonDoc["BOOM"]={};
        jsonDoc["BOOM"][extractCurrentTime(data[0].dt_txt)] = {
            "temp" : "1",
            "sunrise" : "2",
            "sunset" : "3",
            "cloud_coverage" : "4",
            "wind_speed": "5",
            "wind_direction": "6"
        };
    }


    while(isNextHourExisting(currentKey,data)){
       
        if(!jsonDoc[dayKey])jsonDoc[dayKey]={};

        jsonDoc[dayKey][extractCurrentTime(data[currentKey].dt_txt)] = {
            "temp" : getTemperature(data[currentKey]),
            "sunrise" : getSunrise(data[currentKey]),
            "sunset" : getSunset(data[currentKey]),
            "cloud_coverage" : getCloudCoverage(data[currentKey]),
            "wind_speed": getWindSpeed(data[currentKey]),
            "wind_direction": getWindDirection(data[currentKey])
        };
        console.log("current key " + currentKey);
        console.log("dayKey " + dayKey);


        if(currentKey == toLoop){
            dayKey = dayKey + 1;
            daywait = howManyMoreToLoop(extractCurrentTime(data[currentKey+1].dt_txt));
            console.log(dayKey + " : " + currentKey + " : " + daywait);
            toLoop = daywait + currentKey;
        }

        

        currentKey = currentKey+1
    }

    return jsonDoc;

 
}




// ----

/*function getName(data) {
    return data.name;
}
*/
function getTemperature(data){
    return data.main.temp;
}

// ---
function getSunrise(data){
    let unixTime = data.sys.sunrise;
    const date = new Date(unixTime*1000);
    return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute:'2-digit'
      });
}

function getSunset(data){
    let unixTime = data.sys.sunset;
    const date = new Date(unixTime*1000);
    return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute:'2-digit'
      });
    
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



// ---------------

function extractCurrentTime(textString){
    let time = textString.split(' ');
    let detailedTime = time[1].split(":");
    
    let hour = detailedTime[0];

    if(hour == "00") hour = "0";

    return parseInt(hour);
}

function extractCurrentDay(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let day = detailedTime[2];

    return parseInt(day);
}

function extractCurrentMonth(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let month = detailedTime[1];

    return parseInt(month);
}

function transformMonthIntoDateFormat(month){
    return month-1;
}

function extractCurrentYear(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let year = detailedTime[0];

    return parseInt(year);
}

function howManyMoreToLoop(hour){
    let l = ((24-hour)/3)-1;

    if(hour == 0) l=((24-hour)/3);

    return Math.ceil(l);
}

function isNextHourExisting(currentKey, data){
    if (!data[currentKey]) return false;
    return true;
}


function getCurrentDayRequest(){
    const today = new Date();
    let day = today.getDate();

    return day;
}

function getCurrentDate(){
    return new Date();
}

function checkDaysAreDifferent(dateExtracted){
    return dateExtracted != getCurrentDayRequest();
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
