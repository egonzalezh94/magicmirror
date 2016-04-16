

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


          $.getJSON("controllers/muni.php?busCode=" + busCodes[busCode],function(data) {
            //$('.busStop').append("<p>New Code:</p>");
    	   var routeStops = data.AgencyList.Agency.RouteList.Route;
           for (var route in routeStops) {
              //var _newHTML = "";
              //_newHTML += "<tr>"
              var busName = routeStops[route]["@attributes"].Code;
              if ( !busName.localeCompare("31AX") || !busName.localeCompare("38AX") || !busName.localeCompare("38BX") ) {
                continue;
              }
              var busDirection = routeStops[route].RouteDirectionList.RouteDirection["@attributes"].Code;
              var busStopStreet = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop["@attributes"].name;
              var busStopTimes = routeStops[route].RouteDirectionList.RouteDirection.StopList.Stop.DepartureTimeList.DepartureTime;
              var busStopTimeString = "";

              if (document.getElementById(busName)){
                  // Do something if class exists
                  $('#'+busName).append('<div class="busDirection">' + busDirection + '</div>');
                  //$('#'+busName).append('<p class="busStreet">' + busStopStreet + '</p>');
              } else {
                  // Do something if class does not exist
                  var topCounter = 0;
                  var _newDiv = '<div id="' + busName +'"></div>';
                  $('.busStop').append(_newDiv);
                  $('#'+busName).css("height",100);
                  $('#'+busName).css("width",240);
                  $('#'+busName).css("position","relative");
                  $('#'+busName).css("border-bottom","1px solid white");
                  $('#'+busName).css("margin-bottom","5px");



                  $('#'+busName).append('<div class="busName">' + busName + '</div>');
                  //$('#'+busName).append('<p class="busStreet">' + busStopStreet + '</p>');

                  $('#'+busName).append('<div class="busDirection">' + busDirection + '</div>');

              }

              // _newHTML += '<p class="busName">' + busName + '</p>';
              // _newHTML += '<p class="busDirection">' + busDirection + '</p>';
              // _newHTML += '<p class="busStreet">' + busStopStreet + '</p>';

              if (busStopTimes != null) {
                for (var busStopTime in busStopTimes) {
                    busStopTimeString += busStopTimes[busStopTime] + " ";
                }
                //_newHTML += '<p class=busTime>' + busStopTimeString + '</p>';
                $('#'+busName).append('<div class=busTime>' + busStopTimeString + '</div>');

              }
            else { //Times are not available
                $('#'+busName).append('<div class=busTime>- - -</div>');

            }
            //_newHTML += "</tr>"
            //$('.busStop').append(_newHTML + "<br>");
        }

      });

    }


};
