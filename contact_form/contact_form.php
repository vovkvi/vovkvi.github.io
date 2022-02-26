<?php

// configure
$from = 'Contact form <yourmail@domain.com>';
$sendTo = 'vetalvovk@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Сообщение отправлено! Я отвечу на Вам в ближайщее время.';
$errorMessage = 'Произошла ошибка. Пожалуйста повторите попытку позже.';

// let's do the sending

try
{
    $emailText = nl2br("You have new message from Contact Form\n");

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= nl2br("$fields[$key]: $value\n");
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

$encoded = json_encode($responseArray);
header('Content-Type: application/json');
echo $encoded;

?>