<?php
// register_ajax.php

header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

//Because you are posting the data via fetch(), php has to retrieve it elsewhere.
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
$username = (string) trim($json_obj['username']);
$password = (string) trim($json_obj['password']);
//This is equivalent to what you previously did with $_POST['username'] and $_POST['password']

// Check to see if the username and password are valid.  (You learned how to do this in Module 3.)

if( !preg_match('/^[\w_\.\-]+$/', $username) ){
	echo json_encode(array(
		"success" => false,
		"message" => "Invalid Username or Password"
	));
	exit;
}

if( !preg_match('/^[\w_\.\-]+$/', $password) ){
	echo json_encode(array(
		"success" => false,
		"message" => "Invalid Username or Password"
	));
	exit;
}

if(isset($username)&&isset($password)){
require 'database.php';

$hashed_password = password_hash($password, PASSWORD_BCRYPT);
//Not sure whether this would work. 
$stmt = $mysqli->prepare("insert into users (user_name, user_password) values (?, ?)");
if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
	exit;
}

$stmt->bind_param('ss', $username, $hashed_password);

$stmt->execute();

$stmt->close();

	echo json_encode(array(
		"success" => true
	));
	exit;
}
?>