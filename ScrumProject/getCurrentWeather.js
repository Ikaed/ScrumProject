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

//Funktion f�r aktuell temperatur
function currentTemp(weatherList) {



    let singleTemp = document.createElement("p");
    document.querySelector("header")
        .appendChild(singleTemp);
  
    //Letar efter indexposition i arrayen f�r aktuell temperatur f�r n�stkommande timme
    //var findTemp = weatherList[0];
    //var currentIndex = findTemp.findIndex((x) => x.name === "t");
    singleTemp.append("The temperature in " + weatherList.name + " feels like " + weatherList.main.feels_like + " (" + weatherList.main.temp + ")" + " �C, so we recommend the following clothes:");
    


}