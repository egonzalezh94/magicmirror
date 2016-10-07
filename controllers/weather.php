<?php

function getWeather() {
    $api_key = "bab4dc22389dd9761e15b6a26e6b7615";
    $url_string = "https://api.darksky.net/forecast/";
    $url_string .= $api_key."/37.8267,-122.423";

    $response = file_get_contents($url_string);
    $json = json_decode($response,true);
    $json = json_encode($json,JSON_PRETTY_PRINT);

    echo $json;
}
getWeather();
