var weatherAPI = "http://api.aerisapi.com/observations/san+francisco,ca?client_id=EWh52qY2RwIHxKXEhGw9M&client_secret=SB3ZzcN8fAD2b4s7YVOCcXXNlm3nmY2R7BAbhdLK";

var MUNI_API = "http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=";

var busCodes = new Array();

busCodes["5In"] = "14749";
busCodes["5Out"] = "14748";

busCodes["31In"] = "13050";
busCodes["31Out"] = "14269";

busCodes["38In"] = "14270";
busCodes["38Out"] = "14269";


var date = new Date();

var dayOfTheWeek;
var month;

var day = date.getDate();
var year = date.getFullYear();
var hour = date.getHours();
var minutes = date.getMinutes();

month = getMonth(date);
dayOfTheWeek = getDay(date);

var result = "Today is " + dayOfTheWeek + ", " + month + " "
 + day + ", " + year;

var time = hour + ":" + minutes;

console.log(result);
console.log(time)


$(document).ready(function(){

	$("#date").text(result);

	$.ajax({
   	url: "muni.py",
   	success: function(response){
     //here you do whatever you want with the response variable
     console.log(response);
   	}
});

});

//$.getJSON(weatherAPI,function(json){
//	console.log(json.response.ob.tempF);
//	console.log(json.response.ob.icon);
//	var todayTemp = json.response.ob.tempF
//	var icon =json.response.ob.icon;


	//$('#weathericon').attr("src","weather_icons/"+icon);

//	$('#todayTemp').text(todayTemp);



//});