$(document).ready(function(){
    //TODO: Add a config js where all the settings will be controlled from.
    //TODO: Change functions into classes.
    date();
    muni();
    weather();
    setInterval(date, 1000); //Update every second.
    setInterval(muni,60000); //Update every 60 seconds = 1 min.
    //setInterval(weather,600000); //Update every 10 min
});
