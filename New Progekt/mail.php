<?php

$recepient = "Your_email@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["fname"]);
$Cname = trim($_POST["lastname"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$message= trim($_POST["message"]);
$message = "First Name: $fname \nLast Name: $lastname \nEmail: $email \nSubject: $subject \nMessage: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");