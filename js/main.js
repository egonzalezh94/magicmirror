//var weatherAPI = "http://api.aerisapi.com/observations/san+francisco,ca?client_id=EWh52qY2RwIHxKXEhGw9M&client_secret=SB3ZzcN8fAD2b4s7YVOCcXXNlm3nmY2R7BAbhdLK";

var MUNI_API = "http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=";

var weatherAPI = "https://api.forecast.io/forecast/bab4dc22389dd9761e15b6a26e6b7615/37.8267,-122.423";

$(document).ready(function(){


    date();
    muni();
    weather();
    setInterval(date, 1000);
    setInterval(muni,60000);
    //setInterval(weather,600000); //Update every 10 min


});