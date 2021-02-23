class Heart {
  constructor() {
    this.x = 750;
    this.y = 50;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    image(heart, this.x, this.y, this.width, this.height);
    image(heart, this.x + this.width, this.y, this.width, this.height);
    image(heart, this.x + this.width * 2, this.y, this.width, this.height);
  }
}
