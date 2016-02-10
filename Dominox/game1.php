<!DOCTYPE html>
<html>

<head>
    <title>DominoX</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/stylee.css">
</head>

<body>

<body>
   <div id="logoZone">
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
    
   </div>
    
<div id="gameZone">
    
    

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
        

    </div>
    
    <div id="cardsContainer" class="jumbotron gameZone">
          <button type="button" id="skip_button" class="btn btn-primary">Skip</button>
    </div>


</div>
  <div id="saveZone">
    
    <button type="button" class="btn btn-primary" onclick="save()">Save</button>
    
    </div>
    


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
</body>

</html>