///////////////////
//Marin Library 0.1
///////////////////
//Math Functions
///////////////////

//Standard JS fare to create a minimum and maximum value for randomly generated numbers
//function to create random min/max
function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

//Algebra

//Determine Slope
//takes two arrays(X and Y coordinates) and runs a slope formula on them to determine the order to draw the lines
//this function returns the slope for comparison purposes
function determineSlope(point0,point1) {
 var slope = ( -1 * ( point0[1] - point1[1] ) / ( point0[0] - point1[0] ) );
 return slope;
}

//Determine Distance using two points/arrays
function determineDistance(point0,point1) {
 var distance = ( Math.sqrt( Math.pow( ( point0[0] - point1[0]),2 ) + Math.pow( ( point0[1] - point1[1]),2) ) );
 return distance;
}

//Geometry
//Function to Determine an Angle from Slope
function determineAngle(slope0,slope1) {
 if(slope0 > slope1) {
  var phi = (slope0 - slope1) / (1 + (slope0 * slope1) );
  var angle = Math.atan(phi);
 }
 else {
  var phi = (slope1 - slope0) / (1 + (slope0 * slope1) );
  var angle = Math.atan(phi);
 }
 return angle;
}