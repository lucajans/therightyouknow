class Weapon {
  constructor(characterX) {
    this.width = 50;
    this.height = 50;
    this.y = 600;
    this.x = characterX + 10;
  }

  draw() {
    this.x += 4;
    image(weapon, this.x, this.y, this.width, this.height);
  }
}
