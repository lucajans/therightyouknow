class Game {
  constructor() {
    this.background = new Background();
    this.character = new Character();
    this.zombie = new Zombie();
    this.weapon = new Weapon();
    // this.heart = new Heart();
    this.skulls = [];
    this.weapons = [];
    this.hearts = [];
    this.counter = 0;
    this.gameover = "YOU LOST!";
  }
  setup() {
    let currentX = 750;
    while (this.hearts.length < 3) {
      this.hearts.push(new Heart(currentX));
      // if (this.hearts.length > 0) {
      currentX += 50;
      // }
    }
  }

  keyPressed() {
    this.character.keyPressed();
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
    this.skulls.forEach((skull, indexOfSkull) => {
      skull.draw();
      this.weapons.forEach((weapon, indexOfWeapon) => {
        if (this.collisionCheckTwo(weapon, skull)) {
          console.log("The weapon is successful!");
          this.skulls.splice(this.skulls[indexOfSkull], 1);
          this.weapons.splice(this.weapons[indexOfWeapon], 1);
        }
      });
      if (skull.x <= -skull.width) {
        this.skulls.splice(indexOfSkull, 1);
      }
      if (this.collisionCheck(this.character, skull)) {
        console.log("You got hit by a skull.");
        this.skulls.splice(this.skulls[indexOfSkull], 1);
        this.counter++;
        this.hearts.pop(Heart);
      }
    });

    this.hearts.forEach((heart) => {
      heart.draw();
    });
    if (this.counter === 3) {
      rect(300, 300, 400, 150);
      textFont(zombieFont);
      textSize(100);
      text(this.gameover, 325, 310, 400, 270);
      // button.position(400, 400);
    }
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
