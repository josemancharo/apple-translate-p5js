/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  color = 250;

  applePos = {
    x: 100,
    y: 100
  };
}

// function preload() {
//   apple = loadImage("apple2.jpg");
// }

function draw() {
  background(255);
  fill("#FF0000");
  stroke(0, 1);
  circle(applePos.x, applePos.y, 60);
  fill("#00FF00");
  triangle(
    applePos.x,
    applePos.y - 40,
    applePos.x + 1,
    applePos.y - 30,
    applePos.x + 19,
    applePos.y - 50
  );

  if (keyIsPressed) {
    switch (keyCode) {
      case RIGHT_ARROW:
        applePos.x++;
        break;
      case LEFT_ARROW:
        applePos.x--;
        break;
      case UP_ARROW:
        applePos.y--;
        break;
      case DOWN_ARROW:
        applePos.y++;
        break;
      default:
        break;
    }
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
