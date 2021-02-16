class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
  }
  setup() {}

  keyPressed() {
    this.character.keyPressed();
  }

  draw() {
    clear();
    this.background.draw();
    this.character.draw();
  }
}
