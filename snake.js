class Snake {
  constructor() {
    this.pos = createVector(0, 0);
    this.dir = createVector(0, 0);
    this.color = color('white');
    this.tail = [this.pos];
  }

  show() {
    this.tail.forEach(element => {
      fill(this.color);
      rect(element.x, element.y, blockSize, blockSize);
    })
  }

  update() {
    this.pos.add(this.dir);

    if (this.pos.x < 0) {
      this.pos.x = width - blockSize;
    } else if (this.pos.x >= width) {
      this.pos.x = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height - blockSize;
    } else if (this.pos.y >= height) {
      this.pos.y = 0;
    }

    this.tail.forEach(element => {
      if (element != this.tail[this.tail.length - 1]) {
        if (element.x == this.pos.x && element.y == this.pos.y) {
          gameOver = true;
        }
      }
    })

    this.tail.push(this.pos.copy());
    this.tail.shift();
  }

  changeDir(direction) {
    if (direction.x * blockSize != -this.dir.x || direction.y * blockSize != -this.dir.y) {
      this.dir.set(direction.x * blockSize, direction.y * blockSize);
    } else {
      this.tail.reverse();
      this.pos.set(this.tail[this.tail.length - 1]);
      this.dir.set(direction.x * blockSize, direction.y * blockSize);
    }
  }

}