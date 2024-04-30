<?php
include 'connect.php';


$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$status = $data['status'];

$sql = "UPDATE tasks SET status=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $status, $id);
$stmt->execute();

if ($stmt->execute() === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
