var canvas = document.getElementById('square');
var context = canvas.getContext('2d');

var canvasWidth = 640;
var canvasHeight = 480;
var squareX = 295;
var squareY = 215;
var squareWidth = 50;
var squareHeight = 50;
var moveSpeed = 10;

function drawSquare(x,y,width,height) {
 context.beginPath();
 context.rect(x,y,width,height);
 context.fillStyle = '#FF66FF';
 context.fill();
 context.lineWidth = 1;
 context.strokeStyle = 'black';
 context.stroke();
}

drawSquare(squareX,squareY,squareWidth,squareHeight);

document.addEventListener( 'keydown', function(event) {
    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
  if(event.keyCode == 37 && squareX > 0) {
   console.log("Left pressed");
   squareX -= moveSpeed;
   context.clearRect(0,0,canvasWidth,canvasHeight);
   drawSquare(squareX,squareY,squareWidth,squareHeight);
  }
  if(event.keyCode == 38 && squareY > 0) {
   console.log("Up pressed");
   squareY -= moveSpeed;
   context.clearRect(0,0,canvasWidth,canvasHeight);
   drawSquare(squareX,squareY,squareWidth,squareHeight);
  }
  if(event.keyCode == 39 && squareX < canvasWidth - squareWidth ) {
   console.log("Right pressed");
   squareX += moveSpeed;
   context.clearRect(0,0,canvasWidth,canvasHeight);
   drawSquare(squareX,squareY,squareWidth,squareHeight);
  }
  if(event.keyCode == 40 && squareY < canvasHeight - squareHeight ) {
   console.log("Down pressed");
   squareY += moveSpeed;
   context.clearRect(0,0,canvasWidth,canvasHeight);
   drawSquare(squareX,squareY,squareWidth,squareHeight);
  }
 });