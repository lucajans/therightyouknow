class Skull {
  constructor() {
    this.x = WIDTH;
    this.width = random(50, 70);
    this.height = random(50, 70);
    this.y = random(570, 700);
  }

  draw() {
    this.x -= 2;
    image(skullForAttack, this.x, this.y, this.width, this.height);
  }
}
