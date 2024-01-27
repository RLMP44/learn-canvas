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

// // Lines
// ctx.beginPath();
// // starting point
// ctx.moveTo(50, 300);
// // state where we want the line to go to
// ctx.lineTo(300, 100);
// ctx.lineTo(400,300);
// // customize line
// ctx.strokeStyle = "#fa34a3";
// // draw the line
// ctx.stroke();

// Arc / Circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// creating multiple circles
// set i variable, increment i every time it is run
// for (var i = 0; i < 10; i++) {
//   // returns a number anywhere from 0 - 1
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;

//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = "rgba(" + Math.random() * 251 + ", " + Math.random() * 251 + ", " + Math.random() * 251 + ", 0.5)";
//   ctx.stroke();
// }

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
// var minRadius = 2;

var colorArray = [
  '#caf0f8',
  '#ade8f4',
  '#90e0ef',
  '#48cae4',
  '#00b4d8',
  '#0096c7',
  '#0077b6',
  '#023e8a',
  '#03045e'
];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

// call resize every time the browser changes
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth;

  init();
})

// -------------- Make multiple moving circles ------------------ //

// create a JavaScript Object
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  // set min radius as original radius so it goes back to original size
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // get random color from array by getting random number and rounding down
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.strokeStyle = "rgb(3,84,128)";
    // ctx.stroke();
  }

  this.update = function() {
    // get circle to bounce left and right
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { // add/sub radius so circle bounces off its edge
      this.dx *= -1;
    }
    // get circle to bounce vertically
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) { // add/sub radius so circle bounces off its edge
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }

    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}
var circleArray = [];

function init() {
  // reset circle array so there are no memory leaks
  circleArray = [];

  // create for loop to make multiple circles
  for (var i = 0; i < 800; i++) {
    // make a moving circle
    var radius = Math.random() * 6 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius; // Math.random generates a random value between 0 and 1
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = ((Math.random() - 0.5) * 0.60);  // dx is standard for "velocity"
    var dy = ((Math.random() - 0.5) * 0.60);  // -0.5 to make sure we get either a pos or neg num
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate () {
  requestAnimationFrame(animate); // takes another function as an argument
  // clear canvas before each render
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
init();



// ---------------------- Code for Seat Sensei -------------------------- //

// var max_seats = 25;
// var columns = 3;
// var rows = 5;
// var working_width = window.innerWidth / (columns * 2 + 1);
// var working_height = window.innerHeight / (rows * 2 + 1);
// var x_coor = working_width;
// var y_coor = working_height;

// function generateDesks() {
//   if (rows < columns) {
//     console.log("condition 1")
//     for (var c = 0; c < columns; c++) {
//       generateRow(rows, x_coor, y_coor);
//       y_coor += working_height * 2;
//     }
//   } else {
//     console.log("condition 2")
//     for (var r = 0; r < rows; r++) {
//       generateColumn(columns, x_coor, y_coor);
//       x_coor += working_width * 2;
//     }
//   }
// }

// function generateRow(rows, x_coor, y_coor) {
//   for (var r = 0; r < rows; r++) {
//     console.log("generating row");
//     ctx.fillStyle = "black";
//     ctx.fillRect(x_coor, y_coor, working_width, working_height);
//     x_coor += working_width * 2;
//   }
// }

// function generateColumn(columns, x_coor, y_coor) {
//   for (var c = 0; c < columns; c++) {
//     console.log("generating column");
//     ctx.fillStyle = "black";
//     ctx.fillRect(x_coor, y_coor, working_width, working_height);
//     console.log(x_coor)
//     y_coor += working_height * 2;
//   }
// }

// generateDesks();
