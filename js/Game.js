class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    this.zombie = new Zombie();
    this.skulls = [];
  }
  setup() {}

  keyPressed() {
    this.character.keyPressed();
  }

  draw() {
    clear();
    this.background.draw();
    this.character.draw();
    this.zombie.draw();
    if (frameCount % 150 === 0) {
      this.skulls.push(new Skull());
    }
    this.skulls.forEach((skull, index) => {
      skull.draw();
      if (skull.x <= -skull.width) {
        this.skulls.splice(index, 1);
      }
      if (this.collisionCheck(this.character, skull)) {
        console.log("You got hit by a skull.");
      }
    });
  }

  collisionCheck(character, skull) {
    const characterTopArea = character.y;
    const characterLeftArea = character.x;
    const characterRightArea = character.x + character.width;
    const characterBottomArea = character.y + character.height;

    const skullTopArea = skull.y;
    const skullLeftArea = skull.x;
    const skullRightArea = skull.x + skull.width;
    const skullBottomArea = skull.y + skull.height;

    const isTouchingOnLeft = skullRightArea > characterLeftArea;
    const isTouchingOnBottom = skullTopArea < characterBottomArea;
    const isTouchingOnRight = skullLeftArea < characterRightArea;
    const isTouchingOnTop = skullBottomArea > characterTopArea;

    return (
      isTouchingOnLeft &&
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom
    );
  }
}
