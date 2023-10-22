<?php
$servername = "localhost";  
$username = "username";
$password = "password";
$dbname = "Order";

// Connection
$conn = new mysqli($servername, $username, '', $dbname);

//  Check Connection
if ($conn->connect_error) {
    die("Connection Error". $conn->connect_error);
}
// Database NAme
$sql = "Order";
if ($conn->query($sql) === TRUE) {
    echo "Connected";
} else {
    echo "Connection Error" .$conn ->error;
}
// Closing Connection
echo"Your Order has been Placed";
$conn->close();



?>