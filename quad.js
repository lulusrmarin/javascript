var canvas = document.getElementById('polygoncanvas');
var context = canvas.getContext('2d');

//function to create random min/max
function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

//Sort an array by Y value
function compareY(a,b) {
 if (a[1] === b[1]) {
 return 0;
 }
else {
 return (a[1] < b[1]) ? -1 : 1;
 }
}

//Sort an array by X value
function compareX(a,b) {
 if (a[0] === b[0]) {
 return 0;
 }
else {
 return (a[0] < b[0]) ? -1 : 1;
 }
}

//Determine Distance using two points/arrays
function getDistance(point0,point1) {
 var distance = ( Math.sqrt( Math.pow( ( point0[0] - point1[0]),2 ) + Math.pow( ( point0[1] - point1[1]),2) ) );
 return distance;
}

 //Determine Slope
 //takes two arrays(X and Y coordinates) and runs a slope formula on them to determine the order to draw the lines
 //this function returns the slope for comparison purposes
 function getSlope(point0,point1) {
  var slope = ( ( (-1 * point1[1]) - (-1 * point0[1]) ) / ( point1[0] - point0[0] ) );
  return slope;
 }
 
//Get intercept 
function getIntercept(point,slope) {
//y=mx+b
// b = y - mx
 var intercept = -point[1] - (point[0] * slope);
 return intercept;
}

//Gift wrapping is used so the polygons stay essentially paralell and the line rendering the polygon doesn't cross itself.
function giftWrap(pointA,pointB,pointC,pointD ) {
 var coordArray = [pointA,pointB,pointC,pointD];

 coordArray.sort(compareY); //sort array by smallest to largest y values
 console.log(coordArray);

 //Assign point coordinates to easier matricies
 var pointTop = coordArray[0];
 var pointTwo = coordArray[1];
 var pointThree = coordArray[2];
 var pointBottom = coordArray[3];

 var slopeAcross = getSlope( pointTop,pointBottom );
 var intercept = getIntercept (pointTop,slopeAcross);
 var intercept2 = getIntercept (pointBottom,slopeAcross);
 console.log("Slope Across: " + slopeAcross);
 console.log("Intercept: " + intercept);
 console.log("Intercept2: " + intercept2);

 context.moveTo( pointTop[0],pointTop[1] );  console.log("Point Top: " + pointTop);
 context.lineTo( pointTwo[0],pointTwo[1] ); console.log("Point Two: " + pointTwo);

 //This extremely long if statement decides to only write to point three first
 //if it is on the same side as point two relative to the line from the top to bottom of the shape
 //This guarantees no misformed quadrilaterals are created
 if( ( ((-pointThree[1]) > (pointThree[0] * slopeAcross) + intercept)
 && ((-pointTwo[1]) > (pointTwo[0] * slopeAcross) + intercept))
 || ( ((-pointThree[1]) < (pointThree[0] * slopeAcross) + intercept)
 && ((-pointTwo[1]) < (pointTwo[0] * slopeAcross) + intercept)) ) {
  context.lineTo( pointThree[0],pointThree[1]) ; console.log("Point Right: " + pointThree);
  context.lineTo( pointBottom[0],pointBottom[1] ); console.log("Point Bottom: " + pointBottom);
 }
 else {
  context.lineTo( pointBottom[0],pointBottom[1] ); console.log("Point Bottom: " + pointBottom);
  context.lineTo( pointThree[0],pointThree[1]) ; console.log("Point Right: " + pointThree);
 }
  context.lineTo( pointTop[0],pointTop[1] ); 
}

//Ranges, size of canvas
var minX = 0;
var maxX = 640;
var minY = 0;
var maxY = 480;

//Create points
var pointA = [getRandomInt(minX, maxX), getRandomInt(minY,maxY)];
var pointB = [getRandomInt(minX, maxX), getRandomInt(minY,maxY)];
var pointC = [getRandomInt(minX, maxX), getRandomInt(minY,maxY)];
var pointD = [getRandomInt(minX, maxX), getRandomInt(minY,maxY)];

//Log points
console.log ("Point A: " + pointA);
console.log ("Point B: " + pointB);
console.log ("Point C: " + pointC);
console.log ("Point D: " + pointD);

//Draw points in an ARBITRARY fashion in white
context.strokeStyle = '#ffffff';
context.beginPath();
//Use giftWrap() function to draw all lines, then stroke them.
giftWrap(pointA,pointB,pointC,pointD);
context.stroke();