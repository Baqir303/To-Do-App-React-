<?php
include 'connect.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$status = isset($_GET['status']) ? $_GET['status'] : 'pending';

$sql = "SELECT id, title, status FROM tasks WHERE status = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $status);
$stmt->execute();
$result = $stmt->get_result();

$tasks = [];

while ($row = $result->fetch_assoc()) {
    $tasks[] = $row;
}

echo json_encode($tasks);

$stmt->close();
$conn->close();
?>
