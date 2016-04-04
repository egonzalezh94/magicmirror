//change api to one that supports weather icons
weather = function() {
	$.getJSON(weatherAPI,function(json){
		console.log(json.response.ob.tempF);
		console.log(json.response.ob.icon);
		var todayTemp = json.response.ob.tempF
		var icon =json.response.ob.icon;


		//$('#weathericon').attr("src","weather_icons/"+icon);

		$('#weather').text(todayTemp);

	});

};