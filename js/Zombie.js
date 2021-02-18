class Zombie {
  constructor() {
    this.x = 1000;
    this.y = 555;
    this.floor = 880;
    this.width = 90;
    this.height = 150;
    this.warning =
      "Puny millennial! I want your brain so I can bind it into an eternal unpaid internship. \n \nSee if you can avoid the skulls of those whom I have already sucked dry.";
  }
  draw() {
    if (this.x >= 850) {
      this.x -= 0.3;
      image(zombieFacingLeft, this.x, this.y, this.width, this.height);
    } else {
      image(zombieFacingLeft, this.x, this.y, this.width, this.height);
      rect(250, 125, 425, 200);
      textFont(zombieFont);
      textSize(25);
      text(this.warning, 275, 140, 400, 290);
    }
  }
}
