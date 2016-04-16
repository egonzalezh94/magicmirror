//TODO: Move busCodes to config.js

var busCodes = new Array();

busCodes["5In"] = "14749";
busCodes["5Out"] = "14748";

busCodes["31In"] = "13050";
busCodes["31Out"] = "13049";

busCodes["38In"] = "14270";
busCodes["38Out"] = "14269";

muni = function(){
    $('.busStop').text("");
    for (var busCode in busCodes) {

        $.getJSON("controllers/muni.php?busCode=" + busCodes[busCode]
        ,function(data) {

            var routeStops = data.AgencyList.Agency.RouteList.Route;
            for (var route in routeStops) {

                var busName = routeStops[route]["@attributes"].Code;
                if ( !busName.localeCompare("31AX") ||
                !busName.localeCompare("38AX") || !busName.localeCompare("38BX") ) {

                    continue;
                }

                var busDirection = routeStops[route].RouteDirectionList.RouteDirection["@attributes"].Code;
                var busStopStreet = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop["@attributes"].name;
                var busStopTimes = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop.DepartureTimeList.DepartureTime;
                var busStopTimeString = "";

                if (document.getElementById(busName)){
                    // If div has been already created, just append to div.
                    $('#'+busName).append('<div class="busDirection">' +
                    busDirection + '</div>');
                } else {
                    // If div does NOT exist, create it and append information to it.
                    var _newDiv = '<div id="' + busName +'"></div>';
                    $('.busStop').append(_newDiv);

                    //Set important layout properties.
                    $('#'+busName).css("height",100);
                    $('#'+busName).css("width",240);
                    $('#'+busName).css("position","relative");
                    $('#'+busName).css("border-bottom","1px solid white");
                    $('#'+busName).css("margin-bottom","5px");

                    //Append bus information to newly created div.
                    $('#'+busName).append('<div class="busName">' +
                    busName + '</div>');

                    $('#'+busName).append('<div class="busDirection">' +
                    busDirection + '</div>');
                }

                //Checks if busTimes are available.
                if (busStopTimes != null) {

                    //For each time, add it to string with a space.
                    for (var busStopTime in busStopTimes) {
                        busStopTimeString += busStopTimes[busStopTime] + " ";
                    }
                    $('#'+busName).append('<div class=busTime>' +
                    busStopTimeString + '</div>');

                }
                else { //If times are not available add set text to it.

                    $('#'+busName).append('<div class=busTime>- - -</div>');
                }
            }
        });
    }
};
