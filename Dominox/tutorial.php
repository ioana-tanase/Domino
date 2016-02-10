<?php session_start();?>

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
<li  class = "active" ><a href = "tutorial.php">TUTORIAL</a></li>
<li><a href = "statistics.php">STATISTICS</a></li>
<li><a href = "settings.php">SETTINGS</a></li>
<?php if(isset($_SESSION['user_id'])){
  echo '<li><a href = "account.php">MY ACCOUNT</a></li>
    <li><a href = "logout.php"><span class="glyphicon glyphicon-log-in"></span> LOGOUT </a></li>';
}elseif(!isset($_SESSION['user_id'])){
  echo '<li><a href = "register.php">REGISTER</a></li>
    <li><a href = "login.php"><span class="glyphicon glyphicon-log-in"></span> LOGIN </a></li>';
}
?>
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
<h4 style="color:#cc3300" class="text-left "> HOW TO PLAY DOMINOES </h4>
<hr>
<h4 style="color:#cc3300"><b>Starting</b></h4>
<p>Put the dominoes face down on the table and mix them up. </p>
<p>Each player takes 6 dominos; for a game with more than 3 players, each player should draw 3 dominos. </p>
<p>The remaining dominoes are left on the table (these are the "sleeping" dominoes). Don't let the other players see your dominos. </p>
<p>The youngest player goes first (or you can go in alphabetical or reverse alphabetical order). In traditional dominoes, the person with the highest double starts. </p>
<h4 style="color:#cc3300"><b>Playing</b></h4>
<p>The first player places one of their dominoes (right-side up) on the table.</p>
<p>The second player tries to put a domino on the table that matches one side of what's already there. If a player cannot go, the player picks a domino from the pile and skips that turn. </p>
<p>The chain of the played dominoes develops randomly, and can look a lot like a snake. </p>
<p>Continue taking turns putting dominoes on the board (or picking one from the pile if you cannot go) until someone wins. In regular dominoes, the best strategy is to get rid of doubles first. </p>
<h4 style="color:#cc3300"><b>Winning</b></h4>
<p> The winner is the first person to get rid of all of their dominoes. But if no one can go out, then the person with the fewest dominos left is the winner. </p>
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