var canvas = document.querySelector("canvas");
// get browser's width and height and set canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c or ctx in canvas refers to "context"
// gets us access to all functions, etc
var ctx = canvas.getContext("2d");

// (x, y, width, height)
ctx.fillRect(300, 234, 233, 89);
ctx.fillRect(32, 90, 434, 100);
ctx.fillRect(90, 321, 100, 100);
ctx.fillRect(300, 3, 23, 533);
