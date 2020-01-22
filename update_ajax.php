<?php
// update_ajax_welcome.php

header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

//Because you are posting the data via fetch(), php has to retrieve it elsewhere.
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
#$date = (string) trim($json_obj['date']);

//([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))
// Check to see if the username and password are valid.  (You learned how to do this in Module 3.)

session_start();//Start the session


$previous_ua = @$_SESSION['useragent'];
$current_ua = $_SERVER['HTTP_USER_AGENT'];



/*

if(isset($_SESSION['useragent']) && $previous_ua !== $current_ua){
	die("Session hijack detected");
}else{
	$_SESSION['useragent'] = $current_ua;
}

*/

$user_id = $_SESSION['user_id'];

if((!isset($_SESSION['username']))){
    echo json_encode(array(
		"success" => false,
		"value" => "Please log in."
	));
	exit;
    }


//select event_id, event_time, event_title, event_content from events where event_date = '2019-06-23' and user_id = 1
if(isset($_SESSION['username'])){


    require 'database.php';
                    
	$stmt1 = $mysqli->prepare("select event_id, event_time,   event_date, event_title, event_content from events where user_id = ? and event_done = 0");
	if(!$stmt1){
		echo json_encode(array(
			"success" => false,
			"value" => "You are not logged in!"
		));
		exit;
	}
	
	$stmt1->bind_param('i', $user_id);
	
	$stmt1->execute();



	$stmt1->bind_result($event_id, $event_time, $event_date, $event_title, $event_content);
	

 $value = "\n";

 $value_event_time = "\n";

 $value_event_id = "\n";

 $value_event_title = "\n";

 $value_event_date = "\n";

 $value_event_content = "\n";
	
	//Not sure whether this would be OK
	while($stmt1->fetch()){
		$value_event_time .= $event_time."\n";
		$value_event_id .= $event_id."\n";		
		$value_event_date .= $event_date."\n";
		$value_event_title .= $event_title."\n";
		$value_event_content .= $event_content."\n";
		
	}

    $stmt1->close();



	echo json_encode(array(
		"success" => true,
		"event_time" => $value_event_time,
		"event_id" => $value_event_id,
		"event_date" => $value_event_date,
		"event_title" => $value_event_title,
		"event_content" => $value_event_content
	));
	exit;
}else{
	echo json_encode(array(
		"success" => false,
		"value" => "Invalid entries!"
	));
	exit;
}
?>