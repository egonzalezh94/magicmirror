//change api to one that supports weather icons
weather = function() {


	var iconTable = {
		'day-sunny':'wi-forecast-io-clear-day',
		'night-clear':'wi-forecast-io-clear-night',
		'rain':'wi-forecast-io-rain',   
		'snow':'wi-forecast-io-snow',    
		'sleet':'wi-forecast-io-sleet',
		'strong-wind':'wi-forecast-io-wind',
		'fog':'wi-forecast-io-fog',                
		'cloudy':'wi-forecast-io-cloudy',            
		'day-cloudy':'wi-forecast-io-partly-cloudy-day',
		'night-cloudy':'wi-forecast-io-partly-cloudy-night',
		'hail':'wi-forecast-io-hail',              
		'thunderstorm':'wi-forecast-io-thunderstorm',      
		'tornado':'wi-forecast-io-tornado'            
	}
	$.getJSON("controllers/weather.php",function(json){

            //Skycons
            var icons = new Skycons({
                    "color": "black"
                }),

                //The items in the array match the weather condiitons provided by Dark Sky.  In order to invoke the icons
                //you must loop through the DOM to find the matching conditions
                list = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"],
                i;

            //Loop to search through classes to find weather type names
            for (i = list.length; i--;) {
                var weatherType = list[i],
                    elements = document.getElementsByClassName(weatherType);
                for (e = elements.length; e--;) {
                    icons.set(elements[e], weatherType);
                }
            }
            icons.play();
 
		//console.log(json.response.ob.tempF);
		//console.log(json.response.ob.icon);

		//var todayTemp = json.response.ob.tempF
		//var icon =json.response.ob.icon;

		var currTemp = json.currently.temperature;
		var currTempIcon = json.currently.icon;

		var minTemp = json.daily.data[0].temperatureMin;

		var maxTemp = json.daily.data[0].temperatureMax;
		var dayIcon = json.daily.data[0].icon;
		console.log(currTempIcon);

		//var canvas = document.createElement('canvas');

		//canvas.id = currTempIcon;
		//canvas.width = 65;
		//canvas.height = 65;

		//div = document.getElementById("temp");
		//document.body.appendChild(canvas);

		var _newHTML ='<canvas class="'  + currTempIcon + '" width="64" height="64"></canvas>' + '<p>hello</p>';

		$('#temp').append(_newHTML);
		//console.log(iconTable['tornado']);

		console.log("currTemp" + currTemp);
		console.log("minTemp" + minTemp);
		console.log("maxTemp" + maxTemp);

		//$('#weathericon').attr("src","weather_icons/"+icon);

		//$('#weather').text(todayTemp);

	});

};