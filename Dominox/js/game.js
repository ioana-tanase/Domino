function getQueryVariable() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var pair = vars[0].split("=");
    document.getElementById('player1Name').innerHTML = pair[1];
    pair = vars[1].split("=");
    document.getElementById('player2Name').innerHTML = pair[1];
}
var boneyard = [];
var firstPlayerHand = [];
var secondPlayerHand = [];
var turn = 0;
var leftSpace = 0;
var rightSpace = 0;
var rightValue = -1;
var leftValue = -1;
var boneClicked = false;
var elemClicked;
var game_table = new Array(25);
var set = false;
var imagesMap = ["0_0.svg", "0_1.svg", "0_2.svg", "0_3.svg", "0_4.svg", "0_5.svg", "0_6.svg", "1_1.svg", "1_2.svg", "1_3.svg", "1_4.svg", "1_5.svg", "1_6.svg", "2_2.svg", "2_3.svg", "2_4.svg", "2_5.svg", "2_6.svg", "3_3.svg", "3_4.svg", "3_5.svg", "3_6.svg", "4_4.svg", "4_5.svg", "4_6.svg", "5_5.svg", "5_6.svg", "6_6.svg"];
var lost = -1;
var skip_button = null;
var new_game_button = null;
var newGame = null;

function initTable() {
    console.log("called");
    console.log(turn);

    initButtons();
    boneyard = initBoneyard();
    game_table = init_game_table();
    initFirstPlayerHand();
    initSecondPlayerHand();
    updatePlayerHand(firstPlayerHand);
}

function initButtons() {
    var cardsContainer = document.getElementById("cardsContainer");

    if(skip_button == null) {
        skip_button = document.getElementById("skip_button");
        cardsContainer.removeChild(skip_button);
    }
    if(new_game_button == null) {
        new_game_button = document.getElementById("new_game_button");
    }
    if(newGame == null) {
        newGame = document.getElementById("newGame");
        var gameZone = document.getElementById("playersContainer");
        gameZone.removeChild(newGame);
    }

}

function init_game_table() {
    var array = new Array(25);
    for (var i = 0; i < array.length; i++)
        array[i] = 0;
    return array;
}

function initBoneyard() {
    var array = new Array(28);
    for (var i = 0; i < array.length; i++)
        array[i] = i;
    return array;
}

function initFirstPlayerHand() {
    var random;

    for (var i = 0; i < 7; i++) {
        random = Math.floor(Math.random() * (boneyard.length));
        firstPlayerHand.push(boneyard[random]);
        boneyard.splice(random, 1);
    }
}

function updatePlayerHand(playerHand) {

    checkWin(playerHand);
    var cardsContainer = document.getElementById("cardsContainer");

    while (cardsContainer.hasChildNodes()) {
        cardsContainer.removeChild(cardsContainer.lastChild);
    }
    if(lost == -1) {
        for (var i = 0; i < playerHand.length; i++) {
            var elem = document.createElement("img");
            var path = "bones/" + imagesMap[playerHand[i]];
            elem.setAttribute("src", path);
            elem.setAttribute("class", "card");
            var id = "card_" + i;
            elem.id = id;

            elem.onclick = function () {
                console.log("clock on card");
                boneClicked = true;
                elemClicked = this;
            };
            cardsContainer.appendChild(elem);
        }
    } else {

        skip_button.onclick = function () {
            turn++;
            if (turn % 2 == 0) {
                updatePlayerHand(firstPlayerHand)
            }
            else {
                updatePlayerHand(secondPlayerHand)
            }
        }
        cardsContainer.appendChild(skip_button);

    }


        if(turn % 2 == 0) {
            var elem = document.getElementById("player1container");
            elem.setAttribute("class", "act");
            var elem2 = document.getElementById("player2container");
            elem2.setAttribute("class", "");
        } else {
            var elem = document.getElementById("player1container");
            elem.setAttribute("class", "");
            var elem2 = document.getElementById("player2container");
            elem2.setAttribute("class", "act");
        }
		
    checkEndFlorin();
}
function checkEndFlorin(){
	//daca primul jucator a terminat
	var score=0;
	if (firstPlayerHand.length==0){
		score=calculateSecondPlayerSum();
		showWinner(document.getElementById("player1Name").innerHTML);
		update_score(1,score);
        shareOnFacebook(document.getElementById("player1Name").innerHTML, document.getElementById("player2Name").innerHTML, document.getElementById("player1Score").innerHTML, document.getElementById("player2Score").innerHTML);

    }
	//daca al doilea a terminat
	if (secondPlayerHand.length==0){
		score=calculateFirstPlayerSum();
		showWinner(document.getElementById("player2Name").innerHTML);
		update_score(2,score);
        shareOnFacebook(document.getElementById("player1Name").innerHTML, document.getElementById("player2Name").innerHTML, document.getElementById("player1Score").innerHTML, document.getElementById("player2Score").innerHTML);
    }
	var found = isBlocked();
    //daca sunt blocati
	if(found==false){
		var scoreP1=calculateFirstPlayerSum();
		console.log("lala1"+scoreP1);
		var scoreP2=calculateSecondPlayerSum();
		console.log("lala2"+scoreP2);
		if(scoreP1<scoreP2){
			showWinner(document.getElementById("player1Name").innerHTML);
			update_score(1,scoreP2-scoreP1);
		}
		else{
			showWinner(document.getElementById("player2Name").innerHTML);
			update_score(2,scoreP1-scoreP2);
		}
        shareOnFacebook(document.getElementById("player1Name").innerHTML, document.getElementById("player2Name").innerHTML, scoreP2-scoreP1, scoreP1-scoreP2);
	}
}
function isBlocked(){
	var found=false;
	if(leftValue == -1 && rightValue == -1) { found = true;}
    if(leftValue != -1 && rightValue != -1) {
        for(var i = 0; i < firstPlayerHand.length; i++) {
            var source = imagesMap[firstPlayerHand[i]];
            source = source.split(".");
            source = source[0].split("_");

            var left = source[0];
            var right = source[1];
            //console.log(left + " " + right + " " + leftValue + " " + rightValue);
            if(left == leftValue || right == rightValue || left == rightValue || right == leftValue) {
                found = true;
                break;
            }
        }
    }
    if(leftValue != -1 && rightValue != -1) {
        for(var i = 0; i < secondPlayerHand.length; i++) {
            var source = imagesMap[secondPlayerHand[i]];
            source = source.split(".");
            source = source[0].split("_");

            var left = source[0];
            var right = source[1];
            //console.log(left + " " + right + " " + leftValue + " " + rightValue);
            if(left == leftValue || right == rightValue || left == rightValue || right == leftValue) {
                found = true;
                break;
            }
        }
    }
	return found;
}
function calculateFirstPlayerSum(){
	var sum=0;
	for(var i = 0; i < firstPlayerHand.length; i++) {
            var source = imagesMap[firstPlayerHand[i]];
            source = source.split(".");
            source = source[0].split("_");

            sum=sum+parseInt(source[0])+parseInt(source[1])           
            }
	return sum;
}
function calculateSecondPlayerSum(){
	var sum=0;
	for(var i = 0; i < secondPlayerHand.length; i++) {
            var source = imagesMap[secondPlayerHand[i]];
            source = source.split(".");
            source = source[0].split("_");

            sum=sum+parseInt(source[0])+parseInt(source[1])           
            }
	return sum;
}
function showWinner(player){
	var cardsContainer = document.getElementById("cardsContainer");
        var gameContainer = document.getElementById("gameTable");
        while(gameContainer.hasChildNodes()) {
            gameContainer.removeChild(gameContainer.lastChild);
        }
        //
        new_game_button.onclick = function() {
        document.location = "game.html?Player1Name=" + document.getElementById('player1Name').innerHTML + "&Player2Name=" + document.getElementById('player2Name').innerHTML + "&option=play";
        };

        var cardsContainer = document.getElementById("cardsContainer");

        while (cardsContainer.hasChildNodes()) {
            cardsContainer.removeChild(cardsContainer.lastChild);
        }

        
		gameContainer.innerHTML=player+" WINS!";
        cardsContainer.appendChild(newGame);
}
function update_score(player,score){
	if(player==1){
		document.getElementById("player1Score").innerHTML=score;
		var elem = document.getElementById("player1container");
        elem.setAttribute("class", "act");
        var elem2 = document.getElementById("player2container");
        elem2.setAttribute("class", "");
	}
	else{
		document.getElementById("player2Score").innerHTML=score;
		var elem = document.getElementById("player1container");
            elem.setAttribute("class", "");
            var elem2 = document.getElementById("player2container");
            elem2.setAttribute("class", "act");
	}
}

function save() {

    var firstPlayer = document.getElementById('player1Name').innerHTML;
    var secondPlayer = document.getElementById('player2Name').innerHTML;
    var table = [];
    var imgClass = [];

    for(var i = 1; i <= 25; i++) {
        table.push(document.getElementById("cell_" + i).getAttribute("src"));
        imgClass.push(document.getElementById("cell_" + i).getAttribute("class"));
    }


    var game = {
        player1Hand: firstPlayerHand,
        player2Hand: secondPlayerHand,
        table: table,
        imgClass: imgClass,
        turn: turn,
        leftValue: leftValue,
        rightValue: rightValue,
        leftSpace: leftSpace,
        rightSpace: rightSpace,
        game_table: game_table,
        set: set
    }


    localStorage.setItem(firstPlayer + "_" + secondPlayer, JSON.stringify(game));

    game = localStorage.getItem(firstPlayer + "_" + secondPlayer);

    game = JSON.parse(game);

    console.log(game);
}

function load() {
    console.log("load");
    initButtons();
    var firstPlayer = document.getElementById('player1Name').innerHTML;
    var secondPlayer = document.getElementById('player2Name').innerHTML;
    game = localStorage.getItem(firstPlayer + "_" + secondPlayer);
    if(game != null) {
        game = JSON.parse(game);
        //console.log(game);
        for(var i = 0; i <= 24; i++) {
            document.getElementById("cell_" + (i + 1)).setAttribute("src", game.table[i]);
            document.getElementById("cell_" + (i + 1)).setAttribute("class", game.imgClass[i]);
        }
        turn = game.turn;
        firstPlayerHand = game.player1Hand;
        secondPlayerHand = game.player2Hand;
        leftValue = game.leftValue;
        rightValue = game.rightValue;
        leftSpace = game.leftSpace;
        rightSpace = game.rightSpace;
        game_table = game.game_table;
        set = game.set;
        console.log(leftValue + " " + rightValue);
        if (turn % 2 == 0) {
            updatePlayerHand(firstPlayerHand)
        }
        else {
            updatePlayerHand(secondPlayerHand)
        }
    } else {
        document.location = "index.html";
    }

}

function checkWin(playerHand) {

    if(leftValue != -1 && rightValue != -1) {
        var found = false;
        for(var i = 0; i < playerHand.length; i++) {
            var source = imagesMap[playerHand[i]];
            source = source.split(".");
            source = source[0].split("_");

            var left = source[0];
            var right = source[1];
            //console.log(left + " " + right + " " + leftValue + " " + rightValue);
            if(left == leftValue || right == rightValue || left == rightValue || right == leftValue) {
                found = true;
                break;
            }
        }
        if(found == false) {
            console.log("lost");
            lost = turn;
        } else {
            lost = -1;
        }
    }
}

function onClickDiv(thisImg) {
    console.log("click");
    var source = thisImg.src.split('/');
    source = source[source.length - 1];
    console.log(source);
    //verific daca s-a selectat un bone din mana si daca s-a dat click pe un spatiu liber
    if (boneClicked == true && source == 'free_space.svg') {

        if (set != false) {
            if (is_place_valid(elemClicked, thisImg)) {
                putOnTable(elemClicked, thisImg);
                update_available_positions(thisImg.id);
            }
        }
        else {
            update_available_positions_on_set(thisImg.id);
            update_values_on_set(thisImg.id, elemClicked);
            putOnTable(elemClicked, thisImg);
        }
    }
}

function update_available_positions_on_set(id) {
    id = id.split("_")
    id = id[1];
    if (id == 1)
        leftSpace = 24;
    else
        leftSpace = id - 1;
    rightSpace = id % 24 + 1;
}
function update_available_positions(id) {
    id = id.split("_")
    id = id[1];
    if (id == leftSpace) {
        if (id == 1)
            leftSpace = 24;
        else
            leftSpace = id - 1;
    }
    if (id == rightSpace) {
        rightSpace = id % 24 + 1;
    }
}
function update_values_on_set(id, imageElem) {
    id = id.split("_")
    id = id[1];
    var source = imageElem.src;
    source = source.split("bones/")
    source = source[1].split(".")
    source = source[0].split("_")

    leftValue = source[0];
    rightValue = source[1];

    console.log(leftValue + " " + rightValue);
}
function update_values(direction, value) {
    if (direction == 0)
        leftValue = value;
    else
        rightValue = value;
}
function is_place_valid(imageElem, spaceElem) {
    var source = imageElem.src
    var nextPointer = 0, previousPointer = 0;
    source = source.split("bones/")
    source = source[1].split(".")
    source = source[0].split("_")
    var numbersOnBone = source[0]
    var id = spaceElem.id
    id = id.split("_")
    id = id[1];
    //daca nu e una din spatiile alaturate
    if (id != leftSpace && id != rightSpace)
        return false;
    //daca s-a ales spatiul din stanga
    if (id == leftSpace) {
        //daca niciun numar de pe bone nu e acelasi cu valoarea vecina
        if (source[0] != leftValue && source[1] != leftValue)
            return false;
        else {
            if (source[0] == leftValue) {
                update_values(0, source[1])
                //spaceElem.className=spaceElem.className+" "+"rotateAnother180"
                var degrees = spaceElem.className.split("rotate");
                degrees = degrees[1];
                degrees = (180 + parseInt(degrees)) % 360;
                //console.log(degrees)
                spaceElem.className = "rotate" + degrees;
            }
            else if (source[1] == leftValue) {
                update_values(0, source[0])
                //spaceElem.className=spaceElem.className+" "+"rotateAnother180"
            }
        }
    }
    //daca s-a ales spatiul din dreapta
    if (id == rightSpace) {
        //daca niciun numar de pe bone nu e acelasi cu valoarea vecina
        if (source[0] != rightValue && source[1] != rightValue)
            return false;
        else {
            if (source[0] == rightValue) {
                update_values(1, source[1])

            }
            else if (source[1] == rightValue) {
                update_values(1, source[0])
                var degrees = spaceElem.className.split("rotate");
                degrees = degrees[1];
                degrees = (180 + parseInt(degrees)) % 360;
                //console.log(degrees)
                spaceElem.className = "rotate" + degrees;
            }
        }
    }

    return true
}
function update_table_array(id, image) {
    var source = image.src.split("bones/")
    source = source[1].split(".")
    id = id.split("_")
    id = id[1];
    game_table[id] = source[0]
    //console.log(game_table)
}
function putOnTable(imgSource, destination) {
    boneClicked = false;
    set = true;
    //preiau src de la bone-ul pe care s-a dat click
    var source = imgSource.src
    destination.src = source
    //scot din imagine functia on click
    imgSource.onclick = function () {
    };
    removeFromPlayerHand(imgSource, turn % 2 + 1);
    turn++;

    if (turn % 2 == 0) {
        updatePlayerHand(firstPlayerHand)
    }
    else {
        updatePlayerHand(secondPlayerHand)
    }
}
function removeFromPlayerHand(elem, player) {
    var cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.removeChild(elem);
    var order = elem.id.split("_")[1]
    if (player == 1)
        firstPlayerHand.splice(order, 1)
    else
        secondPlayerHand.splice(order, 1)

}
function initSecondPlayerHand() {
    var random;
    for (var i = 0; i < 7; i++) {
        random = Math.floor(Math.random() * (boneyard.length));
        secondPlayerHand.push(boneyard[random]);
        boneyard.splice(random, 1);
    }
}

function share() {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        var pair = vars[0].split("=");
        document.getElementById('player1').innerHTML = pair[1];
        pair = vars[1].split("=");
        document.getElementById('player2').innerHTML = pair[1];
        pair = vars[2].split("=");
        document.getElementById('score1').innerHTML = pair[1];
        pair = vars[3].split("=");
        document.getElementById('score2').innerHTML = pair[1];
}

function shareOnFacebook(player1, player2, score1, score2) {
    var cardsContainer = document.getElementById("cardsContainer");
    var elem = document.createElement("a");
    elem.innerHTML = "Share on facebook";
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    console.log(newURL);
    newURL = newURL.substr(0, newURL.lastIndexOf("/"));
    newURL = "https://www.facebook.com/sharer/sharer.php?u="+newURL+"/share.html?player1=" + player1 + "&player2=" + player2 + "&score1=" + score1 + "&score2=" + score2;
    console.log(newURL);
    elem.setAttribute("href", newURL);
    cardsContainer.appendChild(elem);
}