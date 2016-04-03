<?php
$url = "http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=14270";
$response = file_get_contents($url);
$xml = new SimpleXMLElement($response);
//print_r($xml->AgencyList->Agency->RouteList);

$routes = $xml->AgencyList->Agency->RouteList->Route;

//print_r($routes[0]);

foreach ($routes as $route) {
	# code...
	//var departuresList = $route->RouteDirectionList->RouteDirection->StopList->Stop->DepartureTimeList;
	//print_r($route->RouteDirectionList->RouteDirection->StopList->Stop->DepartureTimeList->DepartureTime);
	foreach ($route->RouteDirectionList->RouteDirection->StopList->Stop->DepartureTimeList->DepartureTime as $time) {
		echo (string) $time.", ";
	}

	//echo $route->asXML();

	
	//echo (string) $route->RouteDirectionList->RouteDirection->StopList->Stop["name"]
	//echo (string) $route->RouteDirectionList->RouteDirection["Name"];
	//echo (string) $route["Name"];
}