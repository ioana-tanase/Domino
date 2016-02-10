var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

init();
player_bars();

function init(){
	ctx.fillStyle = "#09b8c1";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function player_bars(){
	ctx.fillStyle= "#96b2d0";
	roundedRect(ctx, 50, 50, WIDTH-100, HEIGHT-100, 10, true, false);
	ctx.fillStyle= "#002851";
	roundedRect(ctx, (WIDTH/2) - (WIDTH/8), HEIGHT-100, (WIDTH/4), 100, 10, true, true);
	roundedRect(ctx, (WIDTH/2) - (WIDTH/16), 0, (WIDTH/8), 100, 10, true, true);
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