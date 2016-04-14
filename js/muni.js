

var busCodes = new Array();

busCodes["5In"] = "14749";
busCodes["5Out"] = "14748";

busCodes["31In"] = "13050";
busCodes["31Out"] = "13049";

busCodes["38In"] = "14270";
busCodes["38Out"] = "14269";

muni = function(){

    for (var busCode in busCodes) {


          $.getJSON("controllers/muni.php?busCode=" + busCodes[busCode],function(data) {
            $('.busStop').append("<p>New Code:</p>");
    	   var routeStops = data.AgencyList.Agency.RouteList.Route;
           for (var route in routeStops) {
              var _newHTML = "";
              _newHTML += "<tr>"
              var busName = routeStops[route]["@attributes"].Code;
              var busDirection = routeStops[route].RouteDirectionList.RouteDirection["@attributes"].Code;
              var busStopStreet = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop["@attributes"].name;
              var busStopTimes = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop.DepartureTimeList.DepartureTime;
              var busStopTimeString = "";
              _newHTML += '<td>' + busName + '</td>';
              _newHTML += '<td>' + busDirection + '</td>';
              _newHTML += '<td>' + busStopStreet + '</td>';

              if (busStopTimes != null) {
                for (var busStopTime in busStopTimes) {
                    busStopTimeString += busStopTimes[busStopTime] + " ";
                }
                _newHTML += '<td>' + busStopTimeString + '</td>';
              }
            else { //Times are not available

            }
            _newHTML += "</tr>"
            $('.busStop').append(_newHTML + "<br>");
        }

      });

    }

};
