<?php

switch ($_SERVER['REQUEST_METHOD']) {

  case "OPTIONS":
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept");
    http_response_code(204);
    exit;

  case "POST":
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=utf-8");

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (!$params) {
      http_response_code(400);
      echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
      exit;
    }

    $email = $params->email ?? '';
    $name = $params->name ?? '';
    $userMessage = $params->message ?? '';

    $recipient = 'kontakt@marcohantel.de';
    $from = 'noreply@marcohantel.de';

    $subject = "Kontaktformular: $name";
    $body = "Name: " . htmlspecialchars($name) . "<br>"
          . "Email: " . htmlspecialchars($email) . "<br><br>"
          . nl2br(htmlspecialchars($userMessage));

    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = "From: Marcohantel Website <$from>";
    $headers[] = "Reply-To: $email";
    $headers[] = "Return-Path: $from";

    $success = mail($recipient, $subject, $body, implode("\r\n", $headers), "-f $from");

    // Debug Log
    file_put_contents(__DIR__ . '/mail_debug.log',
      date('c') . " success=" . ($success ? 'true' : 'false') .
      " to=$recipient subj=$subject\n",
      FILE_APPEND
    );

    echo json_encode(['success' => $success]);
    exit;

  default:
    header("Allow: POST, OPTIONS", true, 405);
    exit;
}
