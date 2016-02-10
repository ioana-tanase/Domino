var images = [];
var canvas = document.getElementById('canvas');
var canvasX = canvas.width;
var canvasY = canvas.height;
var timer = null;
var m_lastX = 0;
var m_lastY = 0;
var M_SPACE = 24;
var B_VMIN = 2;
var B_VMAX = 2;
var B_WIDTH = 13;
var B_HEIGHT = 13;

function rnd(n) {
  return Math.random()*n;
}

function rndI(n) {
  return parseInt(rnd(n));
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBall(oParent) {
  var min = 0;
  var max = images.length;
  oParent.appendChild(images[getRandomIntInclusive(min, max)].cloneNode(true));
  initBall(images[images.length-1]);
  window.status = images.length;
}

function createBallAtMouse(e) {
  e = e?e:event;
  createBall(document.getElementById('images-container'));
  with (images[images.length-1]) {
    _x = e.clientX;
    _y = e.clientY;
  }
}

function initBall(oBall) {
  oBall._x = rnd(canvasX);
  oBall._y = rnd(canvasY);
  oBall._vX = B_VMIN+rnd(B_VMAX)*(Math.random()>0.5?1:-1);
  oBall._vY = B_VMIN+rnd(B_VMAX);
}

function moveBall(oBall) {
  oBall._x += oBall._vX;
  oBall._y += oBall._vY;
  oBall.style.left = oBall._x+'px';
  oBall.style.top = oBall._y+'px';
  if ((oBall._vX>0 && oBall._x+oBall._vX+B_WIDTH>canvasX) || (oBall._vX<0 && oBall._x+oBall._vX<0)) oBall._vX *= -1;
  if ((oBall._vY>0 && oBall._y+oBall._vY+B_HEIGHT>canvasY) || (oBall._vY<0 && oBall._y+oBall._vY<0)) oBall._vY *= -1;
}

function animateStuff() {
  for (var i=images.length; i--;) {
    moveBall(images[i]);
  }
}

function startAnimation() {
  if (!timer) timer = setInterval(animateStuff,20);
}

function stopAnimation() {
  if (!timer) return false;
  clearInterval(timer);
  timer = null;
}

function mouseDown(e) {
  e = e?e:event;
  m_lastX = e.clientX;
  m_lastY = e.clientY;
  document.onmousemove = mouseMove;
  document.onmouseup = mouseUp;
}

function mouseMove(e) {
  e = e?e:event;
  if (Math.abs(e.clientX-m_lastX)>M_SPACE || Math.abs(e.clientY-m_lastY)>M_SPACE) {
    m_lastX = e.clientX;
    m_lastY = e.clientY;
    createBallAtMouse(e);
  }
  return false;
}

function mouseUp() {
  document.onmousemove = null;
  document.onmouseup = null;
}

function init() {
  images = document.getElementById('images-container').getElementsByTagName('img');
  for (var i=images.length; i--;) {
    initBall(images[i]);
  }
  getWindowCoords();
  startAnimation();
  document.onmousedown = mouseDown;
}

getWindowCoords =function() {
  canvasX = document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth;
  canvasX = canvasX-canvasX*0.13;
  console.log(canvasX);
  canvasY = document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight;
  canvasY = canvasY-canvasY*0.4;
}


window.onresize = getWindowCoords;
window.onload = init;
