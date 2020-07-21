class Apple {
  constructor() {
    this.pos = this.calculateNewPos();
    this.color = color('red');
  }

  show() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, blockSize, blockSize);
  }

  calculateNewPos() {
    this.chosenX = floor(random(xLen)) * blockSize;
    this.chosenY = floor(random(yLen)) * blockSize;

    snake.tail.forEach(element => {
      if (this.chosenX == element.x && this.chosenY == element.y) {
        this.calculateNewPos();
        return;
      }
    })
    return createVector(this.chosenX, this.chosenY);
  }

  checkIfEaten(snake) {
    if (snake.pos.x == this.pos.x && snake.pos.y == this.pos.y) {
      this.pos = this.calculateNewPos();
      snake.tail.unshift(snake.pos.copy());
      score++;
      customFrameRate += 10;
    }
  }

}