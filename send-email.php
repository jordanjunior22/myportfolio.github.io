<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'jordanjuniordjimelykheambo@gmail.com';
  $subject = 'New Message from Contact Form';
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $name <$email>";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you for your message!';
  } else {
    echo 'Sorry, there was an error sending your message.';
  }
}
?>
