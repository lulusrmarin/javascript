//Sets a string variable for the canvas
//This script ties everything to the same canvas element
//This allows us to set it just once
var canvasId = "canvas";

//Use previously set "canvasId" to load canvas from document
//document.getElementId returns an Element Object representing an element with the specified ID
//(Usually from your HTML page), returns null if no elements with the specified ID exists
var canvas = document.getElementById(canvasId);

//.getContext is string representing one of the following four values:  2d, webgl, webgl2, or bitmaprenderer.
//For most of my demo purposes and games I use 2d.
var ctx = canvas.getContext("2d");

//These two variables below automatically set a canvasWidth and Height element
//Pulling these two values from the canvas itself
var canvasWidth = document.getElementById(canvasId).offsetWidth;
var canvasHeight = document.getElementById(canvasId).offsetHeight;

//Limit can be considered the difficulty, this variable is used in the random
//generation of integers in this project, the higher this number is, the higher the integers
//generated
var limit = 10;

//Solution is for the actual answer to the function.
//Declared here so it can pass between functions.
var solution = 0;

//This is a general sleep function.  Should start to be in my lib.js files
//As to prevent my copy/pasting it everywhere.
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//This function clears the canvas and puts up a random math problem
function printProblem() {
	//Generate two random integers from 1 - the previously specified 'limit'
	var int1 = Math.floor((Math.random() * limit) + 1); 
	var int2 = Math.floor((Math.random() * limit) + 1);

	//Display the equation onscreen
	var text = int1 + " + " + int2;
	//Store the actual answer to solution variable
	solution = int1 + int2;

	//Align the text in the center
	ctx.textAlign="center"; 
	//Declare font face and size
	ctx.font = "30px Arial";
	//Clear canvas.  Starts at 0,0, stretches to canvasWidth/Height.
	ctx.clearRect(0,0,canvasWidth,canvasHeight);	
	//Draw text right in the center of the canvas
	ctx.fillText(text,(canvasWidth / 2),(canvasHeight / 2));
}

//This function requires you have a text form of some kind
//with the id "answerField" to take an input.
function checkAnswer() {
	//answer is taken from answer field.
	var answer = document.getElementById("answerField");
	//clear canvas
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	//Align text in center
	ctx.textAlign="center"; 
	//Set font and size
	ctx.font = "30px Arial";
	
	//If the solution is correct, print correct
	if (answer.value == solution) {
		ctx.fillText("Correct!",(canvasWidth / 2),(canvasHeight / 2));
	}
	//Otherwise the solution was incorrect
	else {
		ctx.fillText("Incorrect!",(canvasWidth / 2),(canvasHeight / 2));
	}
	
	//Sleep for one second then print a new problem.
	sleep(1000).then(() => {
		printProblem(); }
	)
}

//Start off this loop.
printProblem();
