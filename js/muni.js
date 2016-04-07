

var busCodes = new Array();

busCodes["5In"] = "14749";
busCodes["5Out"] = "14748";

busCodes["31In"] = "13050";
busCodes["31Out"] = "13049";

busCodes["38In"] = "14270";
busCodes["38Out"] = "14269";

muni = function(){
    for (var busCode in busCodes) {
          $.getJSON("controllers/muni.php?busCode="+busCodes[busCode],function(data) {
    	   var routeStops = data.AgencyList.Agency.RouteList.Route;
           for (var route in routeStops) {
              var busName = routeStops[route]["@attributes"].Name;
              var busDirection = routeStops[route].RouteDirectionList.RouteDirection["@attributes"].Name;
              var busStopStreet = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop["@attributes"].name;
              var busStopTimes = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop.DepartureTimeList.DepartureTime;
              var busStopTimeString = "";

              if (busStopTimes != null) {
                for (var busStopTime in busStopTimes) {
                    busStopTimeString += busStopTimes[busStopTime] + " ";
                    
                }

                console.log(busStopTimeString);
            }
        }
      });
    }

};