<?php
// login_ajax.php

header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

//Because you are posting the data via fetch(), php has to retrieve it elsewhere.
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:

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
                "message" => "You are not logged in!"
        ));
		exit;
	}
	/*
	if(!hash_equals($_SESSION['token'], $token)){
		echo json_encode(array(
					"success" => false,
					"message" => "Request forgery detected!"
			));
			exit;
	}
	*/

	
	
    if((isset($_SESSION['username']))){
    require 'database.php';

    $stmt = $mysqli->prepare("SELECT event_done from events where user_id = ?");
    if(!$stmt){
    echo json_encode(array(
                "success" => false,
                "message" => "Query Prep Failed."
        ));
        exit;
    }
    $stmt->bind_param('i', $user_id);

    $stmt->execute();

    $stmt->bind_result($one_task);
    
    $taskArray = array();


    while($stmt->fetch()){

    array_push($taskArray,$one_task);
		
    }
    
    $is_done = 0;
    $is_going = 0;
    $is_past = 0;

    for($j = 0; $j < sizeof($taskArray);$j++){
        if($taskArray[$j]==1){
            $is_done++;
        }else if($taskArray[$j]==2){
            $is_past++;
        }else if($taskArray[$j]==0){
        $is_going++;
        }
    }

    $stmt->close();


	echo json_encode(array(
        "success" => true,
        "done" => $is_done,
        "going" => $is_going,
        "past" => $is_past
));
exit;
}else{
echo json_encode(array(
		"success" => false,
		"message" => "Invalid entries!"
));
exit;
}
?>


	
	
	
	