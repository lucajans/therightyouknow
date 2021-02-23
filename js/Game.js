class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    this.zombie = new Zombie();
    this.weapon = new Weapon();
    this.heart = new Heart();
    this.skulls = [];
    this.weapons = [];
    this.hearts = [new Heart(), new Heart(), new Heart()];
  }
  setup() {
    while (this.hearts.length <= 3) {
      this.hearts.push();
    }
  }

  keyPressed() {
    this.character.keyPressed();
    this.weapon.keyPressed();
  }

  draw() {
    clear();
    this.background.draw();
    this.character.draw();
    this.zombie.draw();

    this.weapons.forEach((weapon, index) => {
      weapon.draw();
      if (weapon.characterPosition >= this.background.width) {
        this.weapons.splice(index, 1);
      }
    });
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
        this.skulls.splice(this.skulls.indexOf(skull), 1);
        this.hearts.pop(Heart);
      }
      if (this.collisionCheckTwo(this.weapon, skull)) {
        console.log("The weapon is successful!");
        this.skulls.splice(this.skulls.indexOf(skull), 1);
      }
    });

    this.hearts.forEach((heart) => {
      heart.draw();
    });
  }

  collisionCheck(character, skull) {
    const characterTopArea = character.y;
    const characterLeftArea = character.x;
    const characterRightArea = character.x + character.width - 5;
    const characterBottomArea = character.y + character.height;

    const skullTopArea = skull.y;
    const skullLeftArea = skull.x + 20;
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

  collisionCheckTwo(weapon, skull) {
    const weaponTopArea = weapon.y;
    const weaponLeftArea = weapon.x;
    const weaponRightArea = weapon.x + weapon.width;
    const weaponBottomArea = weapon.y + weapon.height;

    const skullTopAreaTwo = skull.y;
    const skullLeftAreaTwo = skull.x;
    const skullRightAreaTwo = skull.x + skull.width;
    const skullBottomAreaTwo = skull.y + skull.height;

    const isTouchingOnLeftTwo = skullRightAreaTwo > weaponLeftArea;
    const isTouchingOnBottomTwo = skullTopAreaTwo < weaponBottomArea;
    const isTouchingOnRightTwo = skullLeftAreaTwo < weaponRightArea;
    const isTouchingOnTopTwo = skullBottomAreaTwo > weaponTopArea;

    return (
      isTouchingOnLeftTwo &&
      isTouchingOnRightTwo &&
      isTouchingOnTopTwo &&
      isTouchingOnBottomTwo
    );
  }
}
