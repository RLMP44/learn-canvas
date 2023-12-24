var canvas = document.querySelector("canvas");
// get browser's width and height and set canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c or ctx in canvas refers to "context"
// gets us access to all functions, etc
var ctx = canvas.getContext("2d");

// //customize shapes
// ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// // (x, y, width, height)
// ctx.fillRect(300, 234, 89, 89);
// ctx.fillStyle = "rgba(150, 100, 50, 0.5)";
// ctx.fillRect(32, 90, 80, 100);
// ctx.fillStyle = "rgba(200, 100, 200, 0.5)";
// ctx.fillRect(90, 321, 100, 100);
// ctx.fillStyle = "rgba(0, 50, 50, 0.5)";
// ctx.fillRect(300, 3, 99, 70);

// Lines
ctx.beginPath();
// starting point
ctx.moveTo(50, 300);
// state where we want the line to go to
ctx.lineTo(300, 100);
ctx.lineTo(400,300);
// customize line
ctx.strokeStyle = "#fa34a3";
// draw the line
ctx.stroke();

// Arc / Circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// creating multiple circles
// set i variable, increment i every time it is run
for (var i = 0; i < 10; i++) {
  // returns a number anywhere from 0 - 1
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = "rgba(" + Math.random() * 251 + ", " + Math.random() * 251 + ", " + Math.random() * 251 + ", 0.5)";
  ctx.stroke();
}

var max_seats = 25
var columns = 5
var rows = 5
var working_width = window.innerWidth / (columns * 2 + 1)
var working_height = window.innerHeight / (rows * 2 + 1)
var x_coor = working_width
var y_coor = working_height
for (var i = 0; i < columns; i++) {
  for (var i = 0; i < rows; i++) {
    ctx.fillStyle = "black";
    ctx.fillRect(x_coor, y_coor, working_width, working_height);
    x_coor += working_width * 2;
  }
  y_coor += working_height * 2;
}
