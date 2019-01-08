<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$date = $_POST['date'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  				// Specify main and backup SMTP servers
//$mail->Host = 'aspmx.l.google.com';  				// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'evg.demura@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'evg21051984'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров
//$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('evg.demura@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('evg.demura@yandex.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Lambda';
$mail->Body    = '' .$name . ' оставил заявку; <br> Когда: ' .$date. '; <br> Почта этого пользователя: ' .$email. ';<br> Номер заказа :' .$number;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}
 else {
  header('location: index.html');
 }
?>
