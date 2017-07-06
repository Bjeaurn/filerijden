<?php
$kenteken = $routing[1];

$response = file_get_contents("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=".$kenteken);
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