<?php
    /* As it is definitely registered, we don't have to do the same thing. */
    header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json

//Because you are posting the data via fetch(), php has to retrieve it elsewhere.
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);




//Variables can be accessed as such:
$event_id = (string) trim($json_obj['event-id']);
$token = $json_obj['token'];
//Variables can be accessed as such:
        
    session_start();    


    $user_id = $_SESSION['user_id'];
    $username = $_SESSION['username'];

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


 





require 'database.php';

$stmt = $mysqli->prepare("DELETE FROM events WHERE event_done = 2");
if(!$stmt){///////////////
	echo json_encode(array(
        "success" => false,
        "message" => "The query does not work."
    ));
    exit;
}

$stmt->bind_param('i', $event_id);

$stmt->execute();

$stmt->close();



echo json_encode(array(
    "success" => true
));
exit;


//End
    
    
?>