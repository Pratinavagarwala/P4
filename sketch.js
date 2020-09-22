var canvas;
var w = window.innerWidth;
var h = window.innerHeight;
var jew1;
var oil1;
//var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
//var database;

var form;

function preload(){
  immunity=loadImage("images/commodity.jpg");
}



function setup(){
  canvas = createCanvas(w,h);
  
  form=new Form();
  form.display();
}




function draw(){
  //background(immunity);
 
  
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}
