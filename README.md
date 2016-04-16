magicmirror
========

##Introduction
This is my own personal variation of Michael Teeuw's [Magic Mirror](http://michaelteeuw.nl/tagged/magicmirror).

It contains three main functions:  

1. Displays date and time using [Moment JS](http://momentjs.com/).  
2. Fetches weather using forecast.io's [API](https://developer.forecast.io/).   
3. Gets San Francisco's bus departures close to home using San Francisco Municipal Transportation Agency's [API](http://www.511.org/developer-resources_transit-api.asp).  


##Configuration
All configuration is hard-coded for now, in near future information such as forecast.io and Muni's API keys will be added here as well as city, time locale, etc.

##Code

###[main.js](js/main.js)
File initializes date, weather and muni files and sets interval for each function.

###[Time](js/date.js)
Gets current time and calls moment js to format date and time.

###[Weather](js/weather.js)
Calls php file which fetches weather information. Gets current, maximum, and minimum temperature as well as current icon. Icon is parsed and is drawn with the help of [Skycons](https://darkskyapp.github.io/skycons/).

###[Transportation](js/muni.js)
Calls php file which fetches muni information which was originally xml instead of json. Gets all the buses that pass through bus stop and joins them by bus number. NOTE: Three buses are now hardcoded into not showing up since I do not use those bus stops.
