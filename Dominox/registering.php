<!DOCTYPE html>
<html>
<head>
<title> DominoX </title>
<meta charset = "utf-8">
<link rel="stylesheet" type="text/css" href="css/index.css">
<meta name = "viewport" content = "width=device-witdh, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body>
<div class="container-fluid">
   <div class="row">
     <div class="container">
      <div class="col-xs-12">
        <a href="https://www.facebook.com" class="social-button facebook pull-right" title="Dominox Facebook" target="_blank"><div class="fa fa-facebook-official"></div></a>
        <a href="https://plus.google.com" class="social-button google-plus pull-right" title="Dominox Google+" target="_blank"><div class="fa fa-google-plus"></div></a>
        <a href="https://www.youtube.com" class="social-button youtube pull-right" s title="Dominox Youtube" target="_blank"><div class="fa fa-youtube-play"></div></a>
     </div>
      </div>
   </div>
   
   <div class="row">
     <div class="container">
      <div class="col-xs-12">
   <nav class = "navbar navbar-inverse">

<div  class="navbar-header" >
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>                        
</button>

<a class="navbar-brand" href="index.php"><img src="images/logo.svg"  width="80" height="40" class = "img-responsive"></a>
</div>
<div class="collapse navbar-collapse" id="mainNavBar">
<ul  class = "nav navbar-nav">
<li><a href = "tutorial.php">TUTORIAL</a></li>
<li><a href = "statistics.php">STATISTICS</a></li>
<li><a href = "settings.php">SETTINGS</a></li>
<li class = "active"><a href = "register.php">REGISTER</a></li>
<li><a href = "login.php"><span class="glyphicon glyphicon-log-in"></span> LOGIN </a></li>
</ul>
</div>
</nav>
</div>
</div>
</div>

<div class="row">
<div class = "container-fluid">
<div class=" col col-xs-12">
  <div id="images-container" class="images">
  <canvas class="canvas" id="canvas" width="1230" height="400" >Your browser does not support canvases.</canvas>
	<img src="images/tiles/0_1.svg" id="0_1.svg" alt="" width="0" height="0">
	<img src="images/tiles/0_2.svg" id="0_2.svg" alt="" width="0" height="0">
	<img src="images/tiles/0_3.svg" id="0_3.svg" alt="" width="0" height="0">
	<img src="images/tiles/0_4.svg" id="0_4.svg" alt="" width="0" height="0">
	<img src="images/tiles/0_5.svg" id="0_5.svg" alt="" width="0" height="0">

    <button onclick="startAnimation()">Start</button>
    <button onclick="stopAnimation()">Stop</button>

</div>
</div>
</div>

</div>

<div class="row">
<div class="container">
<div class="col-xs-12">
<div class="col1" width="1000">
<h4 style="color:#cc3300" class="text-left "> REGISTER </h4>
<hr>
<div class="container">

	<div class="col-xs-6">
          <?php
				include "connect.php";
			?>
		<?php  
			session_start();
			if(empty($_POST['email'])  || empty($_POST['username'])  || empty($_POST['password'])  || empty($_POST['password_confirm'])  || empty($_POST['register_token']) || empty($_POST['sex'])){
				$message =  "All fields are required!";
			}
			elseif (strlen($_POST['username']) > 30 || strlen($_POST['username']) < 4)
			{
			    $message = 'Incorrect username length';
			}
			elseif (strlen($_POST['password']) > 30 || strlen($_POST['password']) < 4)
			{
			   $message = 'Incorrect password length';
			}
			elseif (ctype_alnum($_POST['username']) != true)
			{
			    $message = 'Username must be alphanumeric';
			}
			elseif (ctype_alnum($_POST['password']) != true)
			{
				$message = 'Password must be alphanumeric';
			}
			elseif ($_POST['password'] != $_POST['password_confirm']){
				$message = 'Passwords must match!';
			}
			else
			{
			$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
		    $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
		    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
		    $password = sha1($password);
		    $sex = filter_var($_POST['sex'], FILTER_SANITIZE_STRING);
		    try{
		    $dbh = new PDO('mysql:host=localhost;dbname=Domino', 'root', '');
		    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    $stmt = $dbh->prepare("INSERT INTO `Users`(`username`, `password`, `email`, `sex`) VALUES (:username,:password,:email,:sex)");
				$stmt->bindParam(':sex', $sex, PDO::PARAM_STR);
				$stmt->bindParam(':email', $email, PDO::PARAM_STR);
				$stmt->bindParam(':username', $username, PDO::PARAM_STR);
		        $stmt->bindParam(':password', $password, PDO::PARAM_STR);
		        $stmt->execute();
		        unset($_SESSION['register_token']);
		        $message = 'Registration succesful!';
		    }
		    catch(Exception $e)
		    {
		        if( $e->getCode() == 23000)
		        {
		            $message = 'Username already exists, please choose another one!';
		        }
		        else
		        {
		            $message = 'We were unable to process your request. Please try again later!'.$e;
		        }
		    }
			}
			echo $message;
		?>

    </div>
	 
</div> 

<hr>

</div>
</div>

</div>
</div>
</div>
</body>
<script type="text/javascript" src="js/drag-and-drop.js"></script>
<script type="text/javascript" src="js/animation.js"></script>
</html>


