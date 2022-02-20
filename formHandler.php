<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['Message'];



$email_form = 'www.Kabelotswidi@gmail.com';

$email_subject = 'New Form Submission';

$email_body =   "User name:  $name.\n".
                  "User Email:  $visitor_email.\n".
                   "Subject :  $subject.\n".
                    "User Message:  $message.\n";


$to = 'ofentselebogo@gmail.com';

$headers = "From:  $email_form \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);


header("Location:   contact.html");

?>