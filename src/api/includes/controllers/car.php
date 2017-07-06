<?php
$kenteken = $routing[1];

$url = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?$$app_token=siAJatNuW8SLBtzE04JSkFmWs&kenteken='.$kenteken;
// $url = str_replace("&amp;", '&', $url);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_USERAGENT,"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$response = json_decode($response);
$resObj = $response[0];

$data = new Stdclass;
$data->id = uniqid();
$data->merk = $resObj->merk;
$data->naam = $resObj->handelsbenaming;
$data->kenteken = $resObj->kenteken;
$data->kleur = $resObj->eerste_kleur;
/*
$data = new Stdclass;*/
$data->id = uniqid();
// $data->name = "Kia Picanto";
$data->type = "car";
$data->displayKenteken = "7-KSL-16";
// $data->kenteken = "7KSL16";
$data->drivers = array();
$data->drivers[0] = new Stdclass;
$data->drivers[0]->id = "abcd";
$data->drivers[0]->name = "Bjorn Schijff";

die(json_encode($data));
?>