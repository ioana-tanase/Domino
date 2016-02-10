var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var WINDOW_WIDTH = window.innerWidth;

var dragok = false;
var startX;
var startY;

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;
//canvas.onclick = myClick;
//canvas.ondblclick = myDblClick;

var pieces = [];
pieces.push({
	img: document.getElementById("0_1.svg"),
	x: 50,
	y: 50,
	width: 0.03*WINDOW_WIDTH,
	height: 0.04*WINDOW_WIDTH,
	isDragging: false
});
/*pieces.push({
	img: document.getElementById("0_2.svg"),
	x: 100,
	y: 75,
	width: 0.03*WINDOW_WIDTH,
	height: 0.04*WINDOW_WIDTH,
	isDragging: false
});
pieces.push({
	img: document.getElementById("0_3.svg"),
	x: 200,
	y: 150,
	width: 0.03*WINDOW_WIDTH,
	height: 0.04*WINDOW_WIDTH,
	isDragging: false
});
pieces.push({
	img: document.getElementById("0_4.svg"),
	x: 300,
	y: 225,
	width: 0.03*WINDOW_WIDTH,
	height: 0.04*WINDOW_WIDTH,
	isDragging: false
});
pieces.push({
	img: document.getElementById("0_5.svg"),
	x: 400,
	y: 300,
	width: 0.03*WINDOW_WIDTH,
	height: 0.04*WINDOW_WIDTH,
	isDragging: false
});*/

console.log(pieces);

init();
console.log("init");

function init(){
	ctx.fillStyle = "#d9c6ae";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	draw();
}

function clear() {
   ctx.clearRect(0, 0, WIDTH, HEIGHT);
   ctx.fillStyle = "#d9c6ae";
   ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function draw(){
	var i;
	var l = pieces.length;
	var p;
	for(i = 0; i < l; i++){
		p = pieces[i];
		ctx.drawImage(p.img, p.x, p.y, p.width, p.height);
	}
}

function drawPiece(img, x, y, w, h){
	clear();
	ctx.drawImage(img, x, y, w, h);
}

function myDown(e){
    e.preventDefault();
    e.stopPropagation();

    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    dragok = false;
    for (var i = 0; i < pieces.length; i++) {
        var p = pieces[i];
        if (mx > p.x && mx < p.x + p.width && my > p.y && my < p.y + p.height) {
            dragok = true;
            p.isDragging = true;
        }
    }

    startX = mx;
    startY = my;
}

function myUp(e){
    e.preventDefault();
    e.stopPropagation();

    dragok = false;
    for (var i = 0; i < pieces.length; i++) {
        pieces[i].isDragging = false;
    }
}

function myMove(e){

    if (dragok) {

        e.preventDefault();
        e.stopPropagation();

        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        var dx = mx - startX;
        var dy = my - startY;

        for (var i = 0; i < pieces.length; i++) {
            var p = pieces[i];
            if (p.isDragging) {
                p.x += dx;
                p.y += dy;
            }
        }

        clear();
        draw();

        startX = mx;
        startY = my;

    }
}


function myClick(e){

}

function myDblClick(e){

}