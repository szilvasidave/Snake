let snake, apple;
let blockSize;
let xLen, yLen;
let score, gameOver;
let customFrameRate;

function setup() {
  blockSize = floor(windowWidth * windowHeight / 20000);
  xLen = floor(windowWidth / blockSize);
  yLen = floor(windowHeight / blockSize);
  createCanvas(xLen * blockSize, yLen * blockSize);

  snake = new Snake();
  apple = new Apple();

  score = 0;
  gameOver = false;
  customFrameRate = 5;
  frameRate(customFrameRate);
  loop();
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(width * height / 25000);
  fill(255);
  text(score, width / 2, height / 20);

  apple.checkIfEaten(snake);
  snake.show();
  snake.update();
  apple.show();

  if (gameOver) {
    textAlign(CENTER, CENTER);
    textSize(height / 20);
    fill('red');
    text('Game Over', width / 2, height / 2);
    noLoop();
  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.changeDir(createVector(-1, 0));
  } else if (keyCode === RIGHT_ARROW) {
    snake.changeDir(createVector(1, 0));
  } else if (keyCode === UP_ARROW) {
    snake.changeDir(createVector(0, -1));
  } else if (keyCode === DOWN_ARROW) {
    snake.changeDir(createVector(0, 1));
  }

  if (keyCode === 32) {
    setup();
  }

}