<?php
// Check for empty fields
include 'class.phpmailer.php';
include 'class.smtp.php';

if(empty($_POST['email'])  		||
   empty($_POST['name']) 		||
   empty($_POST['message']))
   {
	echo "No arguments Provided!";
	return false;
   }

$email_address = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];


$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Set the hostname of the mail server
$mail->Host = "mail.priorweb.be";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "info@twigs.eu";
//Password to use for SMTP authentication
$mail->Password = "Tw12345678";
//Set who the message is to be sent from
$mail->setFrom('website@spiceagency.be', 'Spice Website');
//Set an alternative reply-to address
$mail->addReplyTo('website@spiceagency.be', 'Spice Website');
//Set who the message is to be sent to
$mail->addAddress('righard@spiceagency.be', 'Righard Bruyns');
//Set the subject line
$mail->Subject = 'Contact Website';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("You have received a new message from your website contact form.<br/>"."Here are the details:<br/>Email: $email_address<br/>Subject: $subject<br/>Message:<br/>$message");
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    //echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    //echo "Message sent!";
}

header("Location: ../contacts.php?sent=true");
?>