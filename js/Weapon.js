class Weapon {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.y = 570;
    this.x = 50;
  }
  keyPressed() {
    if (keyCode === 32) {
      game.weapons.push(new Weapon());
    }
  }

  draw() {
    this.x += 4;
    image(weapon, this.x, this.y, this.width, this.height);
  }
}
