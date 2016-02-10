//canvasul
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

//toate piesele
var pieces = [];
//piesele 1-ului player
var player1_tiles = [];
//piesele celui de-al doilea player
var player2_tiles = [];

//true = tura primului player, false otherwise
var player1_turn = true;
//nu trebuie rasturnata piesa
var needsSwitch = false;
//lista locurilor libere
var tiles = [];

function createTiles(){
	for(var i = 0; i < 28; i++){
		tiles.push({
		id:'e' + (i),
		pid:'',
		left:'e' + (i-1),
		right:'e' + (i+1)
		});
	}
}

createTiles();

startGame();

function startGame(){
	pushPieces();
	random7(player1_tiles);
	console.log(player1_tiles);
	random7(player2_tiles);
	console.log(player2_tiles);
	flipTurn();
}

//fondul
function init(){
	ctx.fillStyle = "#09b8c1";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

//style pt tura p1
function player1_bars(){
	ctx.fillStyle= "#96b2d0";
	roundedRect(ctx, 50, 50, WIDTH-100, HEIGHT-100, 10, true, false);
	ctx.fillStyle= "#002851";
	roundedRect(ctx, (WIDTH/2) - (WIDTH/8), HEIGHT-100, (WIDTH/4), 100, 10, true, true);
	roundedRect(ctx, (WIDTH/2) - (WIDTH/16), 0, (WIDTH/8), 100, 10, true, true);
}

//style pt tura p2
function player2_bars(){
	ctx.fillStyle= "#96b2d0";
	roundedRect(ctx, 50, 50, WIDTH-100, HEIGHT-100, 10, true, false);
	ctx.fillStyle= "#002851";
	roundedRect(ctx, (WIDTH/2) - (WIDTH/16), HEIGHT-100, (WIDTH/8), 100, 10, true, true);
	roundedRect(ctx, (WIDTH/2) - (WIDTH/8), 0, (WIDTH/4), 100, 10, true, true);
}

function roundedRect(ctx, x, y, width, height, radius, fill, stroke){
  if (typeof stroke === "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height-radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width-radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width-radius, y, radius);
  ctx.lineTo(x+radius,y);
  ctx.arcTo(x,y,x,y+radius,radius);
   if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  } 
}

//crearea id-urilor pieselor
function pushPieces(){
	for(var i = 0; i < 7; i++){
		for(var j = i; j < 7; j++){
			pieces.push(i + '_' + j);
		}
	}
}

//alege random 7 piese din toate si le pune intr-un array
function random7(array){
	for(var i = 0; i < 7; i++){
		array.push(randomPiece());
	}
}

//alege random o piesa
function randomPiece(){
	var min = 0;
	var max = pieces.length;
	var random = Math.random() * max;
	var randomInt = Math.floor(random);
	var result = pieces[randomInt];
	pieces.splice(randomInt, 1);
	return result;
}

//schimba clasa html a unui element dat cu id
function changeClassName(id, className){
	var targ = document.getElementById(id);
	targ.className = className;
}

//adauga dragme pieselor
function drawPieces(array){
	for(var i = 0; i < array.length; i++){
		changeClassName(array[i], 'dragme');
	}
}

//deseneaza piesele adversarului pe tura ta
function drawBlank(array){
	var blanktiles = document.getElementById('blanktiles');
	var blanks = blanktiles.children;
	for(var i = 0; i < array.length; i++){
		blanks[i].className = "blank";
	}
}

//redeseneaza piesele albe
function resetBlank(array){
	var blanktiles = document.getElementById('blanktiles');
	var blanks = blanktiles.children;
	for(var i = 0; i < array.length; i++){
		blanks[i].className = "";
	}
}

function moveBlank(top){
	var blanktiles = document.getElementById('blanktiles');
	blanktiles.style.top = top + "%";
}

function moveDragme(top){
	var dragtiles = document.getElementById('dragtiles');
	dragtiles.style.top = top + "%";
}

//ascunde piesele tale
function hidePieces(array){
	for(var i = 0; i < array.length; i++){
		changeClassName(array[i], 'ghost');
	}
}

//@unused
function addDragmeCSS(){
	var dragme = document.createElement('link');
	dragme.setAttribute('type', 'text/css');
	dragme.setAttribute('rel', 'stylesheet');
	dragme.setAttribute('href', '../css/dragme.css');
	insertAfter(dragme, document.getElementById('startgame'));
}

//insereaza un nod dupa altul
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//schimba tura intre playeri
function flipTurn(){
	if(player1_turn){
		init();
		player1_bars();
		resetBlank(player1_tiles);
		drawBlank(player2_tiles);
		moveBlank(0);
		hidePieces(player2_tiles);
		drawPieces(player1_tiles);
		moveDragme(90);
	}else{
		init();
		player2_bars();
		resetBlank(player2_tiles);
		drawBlank(player1_tiles);
		moveBlank(90);
		hidePieces(player1_tiles);
		drawPieces(player2_tiles);
		moveDragme(0);
	}
}

//apelata la inceput de drag = ondragstart
function startDrag(e){
	var targ = e.target.id;
	e.dataTransfer.setData('text', targ);
}

//apelata ondragover
function dragover(e){
	e.preventDefault();
}

//apelata ondragenter
function dragenter(e){
	e.preventDefault();
}

//apelata ondrop
function dropped(e){
	e.preventDefault();
	//imaginea de unde porneste dragul
	var sid = e.dataTransfer.getData('text');
	var ssid = sid;
	//imaginea target
	var tid = e.target.id;
	var tidlength = tid.length;
	var i = parseInt(tid.substring(1, tidlength));
	
	//nu este prima mutare a jocului
	if(!isFirstMove()){
		//verificam daca putem muta
		var result = isValid(sid, tid);
		//nu se poate muta la locul dorit
		if(result === 0){
			console.log('nu se poate muta');
			return;
		}else{
			//se poate muta
			console.log('se muta cu ' + result);
			if(result === -1){
				ssid = switchId(sid);
				needsSwitch = true;
			}/*else if(result === -1){
				
			}*/
		}
	}

	positionPiece(sid, tid, needsSwitch);

	console.log(ssid);
	tiles[i].pid = ssid;
	console.log(tiles[i]);
	player1_turn = !player1_turn;
	flipTurn();

}

function positionPiece(sid, tid, needsSwitch){
	var source = document.getElementById(sid);
	var sourceClassName = source.className;
	var targ = document.getElementById(tid);
	var targClassName = targ.className;

	if(needsSwitch){
		var degrees = targClassName.split("rotate");
        degrees = degrees[1];
        degrees = (180 + parseInt(degrees)) % 360;
        targClassName = "rotate" + degrees + " " + targClassName.substring(targClassName.indexOf(" "), targClassName.length);
        needsSwitch = false;
	}
	targ.src = source.src;
	source.className = 'ghost';
	if(player1_turn){
		//scoatem piesa din vectorul playerilor
		var position = searchPiece(player1_tiles, sid);
		player1_tiles.splice(position, 1);
	}else{
		var position = searchPiece(player2_tiles, sid);
		player2_tiles.splice(position, 1);
	}

}

function searchPiece(array, id){
	var result;
	for(var i = 0; i < array.length; i++){
		if(array[i] === id){
			result = i;
		}
	}
	return result;
}

function isFirstMove(){
	for(var i = 0; i < tiles.length; i++){
		if(tiles[i].pid != ''){
			return false;
		}
	}
	return true;
}

function switchId(id){
	var value1 = id.substring(0, 1);
	var value2 = id.substring(2, 3);
	var aux = value1;
	value1 = value2;
	value2 = aux;
	return value1 + '_' + value2;
}


function isValid(sid, tid){
	var tidlength = tid.length;
	var i = parseInt(tid.substring(1, tidlength)) + 1;
	var left = tiles[i].left;
	var right = tiles[i].right;

	
	var i = parseInt(left.substring(1, left.length)) - 1;
	var leftpid = tiles[i].pid;
	console.log(i + " leftpid");


	var i = parseInt(right.substring(1, right.length)) - 1;
	var rightpid = tiles[i].pid;
	console.log(i + " rightpid");
	
	if(leftpid === '' && rightpid === ''){
		console.log('prima ramura ' + left + " " + right);
		return 0;
	}
	if(leftpid != '' && rightpid != ''){
		console.log('a doua ramura');
		return 0;
	}
	if(leftpid != ''){
		var p2 = leftpid.substring(2, 3);
		var t1 = sid.substring(0, 1);
		var t2 = sid.substring(2, 3);
		console.log('left' + p2 + ',' + t1 + ',' + t2);
		if(t1 == p2){
			return 1;
		}else if(t2 == p2){
			return -1;
		}
	}
	if(rightpid != ''){
		var p1 = rightpid.substring(0, 1);
		var t1 = sid.substring(0, 1);
		var t2 = sid.substring(2, 3);
		console.log('right' + p1 + ',' + t1 + ',' + t2);
		if(t1 == p1){
			return -1;
		}else if(t2 == p1){
			return 1;
		}
	}
		console.log('paaaa');

	return 0;
}

String.prototype.contains = function(it) { 
	return this.indexOf(it) != -1; 
};


//unused code

/*		var empty = document.getElementsByClassName('empty');
		for(var i = 0; i < empty.length; i++){
			var parentCN = empty[i].parentNode.className;
			console.log(parentCN);
			if(parentCN != 'middle'){
				empty[i].style.width = "2%";
				empty[i].style.height = "2%";
			}
		}
		var middle = document.getElementsByClassName('middle');
		for(var i = 0; i < middle.length; i++){
			middle[i].style.top = "0%";
		}*/

/*
function addevents(){
console.log('addevents');
	var dragme = document.getElementsByClassName('dragme');
	for(var i = 0; i < dragme.length; i++){
		dragme[i].addEventListener('ondragstart', startDrag, false);
	}
	var empty = document.getElementsByClassName('empty');
	for(var i = 0; i < empty.length; i++){
		empty[i].addEventListener('ondrop', dropped, false);
		empty[i].addEventListener('ondragover', dragover, false);
		empty[i].addEventListener('ondragenter', dragenter, false);
	}
	console.log('addevents');
}
*/

	
	/*source.className = targClassName;
	//inlocuim piesa alba cu cea a playerului
	targ.src = source.src;
	source.className = 'ghost';
	if(player1_turn){
		//scoatem piesa din vectorul playerilor
		var position = searchPiece(player1_tiles, sid);
		player1_tiles.splice(position, 1);
	}else{
		var position = searchPiece(player2_tiles, sid);
		player2_tiles.splice(position, 1);
	}
	//calculam pozitia din tiles[i] = scadem 1 pt ca incepe de la 0
	var tidlength = tid.length;
	var i = parseInt(tid.substring(1, tidlength)) - 1;

	if(needsSwitch){
		sid = switchId(sid);
	}

	console.log('id-ul este ' + sid);
	tiles[i].pid = sid;	
	player1_turn = !player1_turn;
	flipTurn();*/
