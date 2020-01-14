<?php
  function check_url_file()
  {
    $path = pathinfo((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
    $check_file = array('login.php');
    if(in_array($path['basename'],$check_file))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/style.css?=<?=time();?>">
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Sarabun&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous">    <title>NameCard</title>
  </head>
  <body>
    <div class="container-fulid">
      <?php if(check_url_file() == true): ?>
      <div class="navbar-custom navbar-dark bg-primary">
        <div class="row d-flex justify-content-center">
          <img src="assets/img/logo-big.png" class="logo-big-img">
        </div>
      </div>
      <?php else: ?>
      <div class="navbar-custom navbar-dark bg-primary align-top">
        <div class="row d-flex justify-content-between">
          <div>
            <img src="assets/img/logo.png" class="logo-img">
          </div>
          <button class="navbar-toggler-custom" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      <?php endif; ?>