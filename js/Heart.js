class Heart {
  constructor(startingX) {
    this.x = startingX;
    this.y = 50;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    image(heart, this.x, this.y, this.width, this.height);
  }
}
