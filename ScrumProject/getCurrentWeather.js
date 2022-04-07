import {
    getWeather
} from "/fetch.js";

importCurrentTemp();

document.getElementById('link').onclick = function () {
    var city = document.getElementById('link_id').value;
    importCurrentTemp(city);
};

function importCurrentTemp(city) {

  

    var weatherList = getWeather(city);
    weatherList.then(currentTemp); //Aktuell temperatur
}

//Funktion för aktuell temperatur
function currentTemp(weatherList) {



    let singleTemp = document.createElement("p");
    document.querySelector("header")
        .appendChild(singleTemp);
  
    //Letar efter indexposition i arrayen för aktuell temperatur för nästkommande timme
    //var findTemp = weatherList[0];
    //var currentIndex = findTemp.findIndex((x) => x.name === "t");
    singleTemp.append("The temperature in " + weatherList.name + " feels like " + weatherList.main.feels_like + " (" + weatherList.main.temp + ")" + " °C, so we recommend the following clothes:");
    


}