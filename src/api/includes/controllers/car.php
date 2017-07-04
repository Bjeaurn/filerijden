<?php
$data = new Stdclass;
$data->id = "test-001-fdsafdsa";
$data->name = "Kia Picanto";
$data->type = "car";
$data->drivers = array();
$data->drivers[0] = new Stdclass;
$data->drivers[0]->id = "abcd";
$data->drivers[0]->name = "Bjorn Schijff";
die(json_encode($data));
?>