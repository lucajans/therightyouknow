class Zombie {
  constructor() {
    this.x = 1000;
    this.y = 555;
    this.floor = 880;
    this.width = 90;
    this.height = 150;
    this.warning =
      "Puny millennial! I want your brain so I can bind it into an eternal internship. \n \nSee if you can avoid the skulls of those who I have already sucked dry.";
  }
  draw() {
    if (this.x >= 850) {
      this.x -= 0.3;
      image(zombieFacingLeft, this.x, this.y, this.width, this.height);
    } else {
      image(zombieFacingLeft, this.x, this.y, this.width, this.height);
      rect(680, 450, 220, 105);
      text(this.warning, 690, 460, 210, 100);
    }
  }
}
