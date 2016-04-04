<?php

 class BusRoute {
    public $routeName = "";
    public $routeDirection = "";
    public $routeStopName = "";
    public $routeTime = "";
 }

$busCodes = array("14749","14748","13050","13049","14270","14269");

function getRoute($busCode) {
	$bs = new BusRoute();

	$url = "http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=".$busCode;
	$response = file_get_contents($url);
	$xml = new SimpleXMLElement($response);
	//print_r($xml->AgencyList->Agency->RouteList);

	$routes = $xml->AgencyList->Agency->RouteList->Route;
	$routeName = "";
	$routeDirection = "";
	$routeStopName = "";
	$routeTime = "";

	//print_r($routes[0]);

	foreach ($routes as $route) {

		//$routeStopName = (string) $route->RouteDirectionList->RouteDirection->StopList->Stop["name"];   //"Geary Blvd and 25th Ave"
		//$routeDirection = (string) $route->RouteDirectionList->RouteDirection["Name"];    //"Inbound to Downtown"
		//$routeName = (string) $route["Name"];  //"38-Geary"
		//$routeTime = "";

		$routeStopName = (string) $route->RouteDirectionList->RouteDirection->StopList->Stop["name"];   //"Geary Blvd and 25th Ave"
		$routeDirection = (string) $route->RouteDirectionList->RouteDirection["Name"];    //"Inbound to Downtown"
		$routeName = (string) $route["Name"];  //"38-Geary"
		//$bs->$routeTime = "";
		
		echo (string) $routeName."<br>".$routeStopName."<br>".$routeDirection."<br>";

		$routeTimeList = $route->RouteDirectionList->RouteDirection->StopList->Stop->DepartureTimeList->DepartureTime;

		foreach ($routeTimeList as $time) {

			$routeTime .= (string) $time.' ';

			//echo "\n";
		}
		echo rtrim($routeTime,' ');
		echo "<br>";
		echo "<br>";
		//$bs->routeTime = $routeTime;
		//echo json_encode($bs);
		//echo $route->asXML();

		}
}

foreach ($busCodes as $busCode) {

	getRoute($busCode);
	echo "<br>";
	echo "<br>";
}

