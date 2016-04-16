<?php

$busCode = $_GET["busCode"];

function getRoute($busCode) {
    $url_string = "http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=".$busCode;

    $response = file_get_contents($url_string);
    $xml = new SimpleXMLElement($response);

    $json = json_encode($xml,JSON_PRETTY_PRINT);
    echo $json;
}
getRoute($busCode);
