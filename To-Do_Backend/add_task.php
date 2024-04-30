<?php
include 'connect.php';

$data = json_decode(file_get_contents("php://input"), true);
$title = $data['title'];

$sql = "INSERT INTO tasks (title, status) VALUES (?, 'pending')";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $title);
$stmt->execute();

if ($stmt->affected_rows > 0) {
  echo json_encode(array('id' => $stmt->insert_id, 'title' => $title, 'status' => 'pending'));
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
