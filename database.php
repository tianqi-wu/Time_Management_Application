<?php
// Content of database.php

$mysqli = new mysqli('localhost', 'timeManager', 'time-management', 'timeManagement');

if($mysqli->connect_errno) {
	printf("Connection Failed: %s\n", $mysqli->connect_error);
	exit;
}
?>