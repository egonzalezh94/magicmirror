//change api to one that supports weather icons
weather = function() {

	$.getJSON("controllers/weather.php",function(json){

		var currTemp = Math.round(json.currently.temperature) + "&deg";
		var currTempIcon = json.currently.icon;

		var minTemp = Math.round(json.daily.data[0].temperatureMin) + "&deg";

		var maxTemp = Math.round(json.daily.data[0].temperatureMax) + "&deg";
		var dayIcon = json.daily.data[0].icon;

		var _newHTML ='<canvas class="'  + currTempIcon + '" width="64" height="64"></canvas>';
		_newHTML += '<p>' + currTemp + '</p>'
		_newHTML += '<p>Min ' + minTemp + '</p>'
		_newHTML += '<p>Max ' + maxTemp + '</p>'

		$('#temp').html(_newHTML);



		var icons = new Skycons({
                    "color": "white"
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

	});

};
