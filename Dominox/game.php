<?php  
  session_start();
  $register_token = md5( uniqid('auth', true) );
  $_SESSION['register_token'] = $register_token;
?>

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
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/stylee.css">

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
						<ul class = "nav navbar-nav">
							<li><a href = "tutorial.php">TUTORIAL</a></li>
							<li><a href = "statistics.php">STATISTICS</a></li>
							<li><a href = "settings.php">SETTINGS</a></li>
							<li ><a href = "register.php">REGISTER</a></li>
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
<h4 style="color:#cc3300" class="text-left "> PLAY </h4>
<hr>
<div class="container">
 <div id="saveZone">
    
    <button type="button" class="btn btn-primary" onclick="save()">Save</button>
    
    </div>
    
		
    
    
<div id="gameZone">
       <div id="playersContainer" class="jumbotron gameZone">

        <div id="player1container"  style="display:inline-block;margin-right:25px;">
        <span>
            <img src="images/avatar.svg" alt="img" class="avatar">
            <span id="player1Score" class="label label-primary">0</span>
        </span>
    
        <div id="player1Name" class="label label-info playerName"></div>
        </div>
    

        
        <div id="player2container"  style="display:inline-block">
        <span>
            <img src="images/avatar.svg" alt="img" class="avatar">
            <span id="player2Score" class="label label-primary">0</span>
        </span>
    
     <div id="player2Name" class="label label-info playerName"></div>
    
     </div>

        <div id="newGame">
            <button type="button" id="new_game_button" class="btn btn-primary">New game</button>
        </div>

    </div>
    

    <div id="gameTable" class="jumbotron gameZone">
    
    
        <table>
            <tr>
                <td><img src="images/free_space.svg" id="cell_1" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_2" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_3" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_4" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_5" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_6" class="rotate90" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_7" class="rotate90" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img src="images/free_space.svg" class="rotate0" id="cell_24" onclick="onClickDiv(this)"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="images/free_space.svg" class="rotate180" id="cell_8" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img src="images/free_space.svg" class="rotate0" id="cell_23" onclick="onClickDiv(this)"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="images/free_space.svg" class="rotate180" id="cell_9" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img src="images/free_space.svg" class="rotate0" id="cell_22" onclick="onClickDiv(this)"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="images/free_space.svg" class="rotate180" id="cell_10" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img src="images/free_space.svg" class="rotate0" id="cell_21" onclick="onClickDiv(this)"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="images/free_space.svg" class="rotate180" id="cell_11" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img src="images/free_space.svg" class="rotate0" id="cell_20" onclick="onClickDiv(this)"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="images/free_space.svg" class="rotate180" id="cell_12" onclick="onClickDiv(this)"></td>
            </tr>
            <tr>
                <td><img class="rotate270" src="images/free_space.svg" id="cell_19" onclick="onClickDiv(this)"></td>
                <td><img class="rotate270" src="images/free_space.svg" id="cell_18" onclick="onClickDiv(this)"></td>
                <td><img class="rotate270" src="images/free_space.svg" id="cell_17" onclick="onClickDiv(this)"></td>
                <td><img class="rotate270" src="images/free_space.svg" id="cell_16" onclick="onClickDiv(this)"></td>
                <td><img class="rotate270" src="images/free_space.svg" id="cell_15" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_14" class="rotate270" onclick="onClickDiv(this)"></td>
                <td><img src="images/free_space.svg" id="cell_13" class="rotate270" onclick="onClickDiv(this)"></td>
            </tr>
        </table>
        

    
    
    <div id="cardsContainer" class="jumbotron gameZone">
          <button type="button" id="skip_button" class="btn btn-primary">Skip</button>
    </div>


</div>
 
	 
  </div>

</div> 


<hr>

</div>
</div>



</div>
</div>
</div>
</body>
<script src="js/game.js"></script>
<script>
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var pair = vars[0].split("=");
    pair = vars[2].split("=");
    if(pair[1] == "play") {
        getQueryVariable();
        initTable();
    } else if(pair[1] == "load") {
        getQueryVariable();
        load();
    } else {
        document.location = "index.php";
    }
</script>
<script type="text/javascript" src="js/animation.js"></script>
</html>