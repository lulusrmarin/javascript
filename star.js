//Sleep Function to make life easier.
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

  //The ID of your canvas element from your HTML/CSS
	var canvasId = "canvas";
	//load that element into C.
	var c=document.getElementById(canvasId);
	//Set Context to 2d for ctx var
  var ctx=c.getContext("2d");
  //Get image by id, I used a CSS display:none to put the image in my page.
  var img=document.getElementById("star");
	
	//Get these automatically from the canvas element to use as boundaries
	var canvasWidth = document.getElementById(canvasId).offsetWidth;
	var canvasHeight = document.getElementById(canvasId).offsetHeight;
	
	//manually set the size of the star.
	var starWidth = 25;
	var starHeight = 25;
	
	//Changing these values changes the starting coordinates of the star
	var starX = 0;
	var starY = 0;
	
	// speed of the star
	var velocity = 3;
	var limit = 40;
	
	var down = true;
	var right = true;
	
	
function draw() {
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.drawImage(img,starX,starY,starWidth,starHeight);
}
	
function update() {
	if(right == true) { starX += velocity; }
	else  { starX -= velocity; }
	if(starX >= canvasWidth - starWidth) { right = false; }
	if(starX <= 0) { right = true; }
	
	if(down == true) { starY += velocity; }
	else  { starY -= velocity; }
	if(starY >= canvasHeight - starHeight) { down = false; }
	if(starY <= 0) { down = true; }	
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}
 
// Start things off
requestAnimationFrame(mainLoop);
