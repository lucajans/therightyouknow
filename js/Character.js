class Character {
  constructor() {
    this.maxLeft = 0;
    this.maxRight = 865;
    this.x = 50;
    this.y = 0;
    this.floor = 570;
    this.width = 90;
    this.height = 150;
    this.velocity = 0;
    this.jumpcount = 0;
    this.direction = "right";
  }

  keyPressed() {
    // if (keyIsDown(RIGHT_ARROW)) {
    //   this.moveRight();
    // }
    // if (keyIsDown(LEFT_ARROW)) {
    //   this.moveLeft();
    // }
    if (keyCode === 38) {
      this.jump();
    }
  }

  // moveRight() {
  //   this.x += 25;
  //   if (this.x >= this.maxRight) {
  //     this.x = this.maxRight;
  //   }
  // }

  // moveLeft() {
  //   this.x -= 25;
  //   if (this.x <= this.maxLeft) {
  //     this.x = this.maxLeft;
  //   }
  // }

  jump() {
    if (this.jumpcount === 2) {
      return;
    }
    this.jumpcount++;
    this.y -= 10;
    this.velocity -= 5;
  }

  draw() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 1;
      this.direction = "right";
      if (this.x >= this.maxRight) {
        this.x = this.maxRight;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 1;
      this.direction = "left";
      if (this.x <= this.maxLeft) {
        this.x = this.maxLeft;
      }
    }

    this.velocity += GRAVITY;

    this.y += this.velocity;
    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpcount = 0;
    }
    image(
      this.direction === "right" ? theBoyStandingRight : theBoyStandingLeft,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
