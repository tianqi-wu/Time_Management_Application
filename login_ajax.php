<?php
// login_ajax.php

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
		"message" => "Incorrect Username or Password"
	));
	exit;
}

if( !preg_match('/^[\w_\.\-]+$/', $password) ){
	echo json_encode(array(
		"success" => false,
		"message" => "Incorrect Username or Password"
	));
	exit;
}


if(isset($username)&&isset($password)){


require 'database.php';

$stmt = $mysqli->prepare("select user_id, user_password FROM users WHERE user_name=?");
if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
	exit;
}

$stmt->bind_param('s', $username);

$stmt->execute();

$stmt->bind_result($user_id, $pwd_hash);

$stmt->fetch();

$pwd_guess = $password;
// Compare the submitted password to the actual password hash

if(password_verify($pwd_guess, $pwd_hash)){
	// Login succeeded!
	ini_set("session.cookie_httponly", 1);
    session_start();
	$_SESSION['username'] = $username;
	$_SESSION['user_id'] = $user_id;
	$_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32)); 

	echo json_encode(array(
		"success" => true
	));
	exit;
}else{
	echo json_encode(array(
		"success" => false,
		"message" => "Incorrect Username or Password"
	));
	exit;
}
}else{
	echo json_encode(array(
		"success" => false,
		"message" => "Incorrect Username or Password"
	));
	exit;
}
?>