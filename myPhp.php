<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST["fname"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // You can add more validation and sanitation here

    // Send the email (replace with your own email handling logic)
    $to = "agabriel2811@yahoo.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Construct the email message
    $mailMessage = "Name: $name\n";
    $mailMessage .= "Email: $email\n";
    $mailMessage .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $mailMessage, $headers);

    // Optionally, you can redirect the user to a thank-you page
    //header("Location: thank-you.html");
    exit();
}
?>
