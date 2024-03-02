<?php
session_start();
// Database connection parameters
$host = "localhost"; // Replace with your MySQL host provided by InfinityFree
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "user";

// Establishing the connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST["name"];
$password = $_POST["password"];
$email = $_POST["email"];
$phno = $_POST["phno"];
$dob = $_POST["Dob"];
$gender = $_POST["Gender"];
$bgroup = $_POST["bgroup"];

// Check if passwords match
// if ($password !== $confirm_password) {
//     echo "Passwords do not match.";
// } else {
//     // Hash the password
//     // $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO student  (name, password, email, phno, dob, gender, bgroup) VALUES ('$name','$password', '$email', '$phno', '$dob', '$gender', '$bgroup')";
    if ($conn->query($sql) === TRUE) {
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
// }

// Closing the connection
$conn->close();
