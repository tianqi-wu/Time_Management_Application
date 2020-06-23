<?php
// Content of database.php

$mysqli = new mysqli('localhost', 'safinia_admin', 'safinia_password', 'Safinia');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>