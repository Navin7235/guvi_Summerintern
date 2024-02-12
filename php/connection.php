<?php 

$file=file_get_contents('composer.json');
$json=json_decode($file,true);

$db = new PDO('mysql:host=localhost;dbname=' . $json['db_name'] . ';charset=utf8', $json['db_user'], $json['db_pass']);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>