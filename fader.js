/*
Random Javascript Background Fader v1.0
Last updated 2014-10-7
by Robert Marin

Script uses window.setInterval along with the 'updateBg' 
function to randomly increment/decrement the individual 
RGB values of the target, in this case the background.

The script can be re-appropriated for instance with document.getElementById
to change any aspect of the page to use the same color fade.

This script also outputs the current RGB values to the console.
It may make sense in the future to enable toggling of this feature
*/

console.log("Random Javascript Background Fader v1.0 \n Last updated 2014-10-7 \n by Robert Marin ")

var updateInterval = 10; //Update speed/ms
window.setInterval(function(){updateBg();}, updateInterval);

//Values of red/green/blue, can be set to any initial conditions
var red = 0;
var green = 0;
var blue = 0;

//Values used to determine when 255 or 0 has been hit.
var redLimit = false;
var blueLimit = false;
var greenLimit = false;

var changeInc = 3; //Increment of change applied in changeRGB loop

function randomThree() {
 //Generate a decimal value 0-2
 var random = (Math.random() * 10);
 random = Math.round(random, -1);
 return random;
}

function changeRGB() {
 var random = randomThree();

 //Color increase section
 if ( random < 3.3 && redLimit == false ) { 
  red += changeInc;
  if ( red >= 255 ) { redLimit = true; } 
 }
 else if ( random > 6.6 && blueLimit == false ) { 
  blue += changeInc;
  if ( blue >= 255 ) { blueLimit = true; } 
 }
 else if ( random > 3.3 && random < 6.666 && greenLimit == false ) { 
  green += changeInc;
  if ( green >= 255 ) { greenLimit = true; } 
 }

 //Color decrease section
 if ( random < 3.3 && redLimit == true ) { 
  red -= changeInc;
  if ( red <= 0 ) { redLimit = false; } 
 }
 else if ( random > 6.6 && blueLimit == true ) { 
  blue -= changeInc;
  if ( blue <= 0 ) { blueLimit = false; } 
 }
 else if ( random > 3.3 && random < 6.666 && greenLimit == true ) { 
  green -= changeInc;
  if ( green <= 0 ) { greenLimit = false; } 
 }

}

function updateBg() {
 changeRGB();
 console.log("Red: " + red + '\n' + "Green: " + green + '\n' + "Blue: " + blue);
 var hexString = "rgb(" + red + "," + green + "," + blue + ")";
 document.body.style.backgroundColor = hexString;
}

//©2014