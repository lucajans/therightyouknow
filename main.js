const game = new Game();

function preload() {
  cityBackground = loadImage("./assets/background.jpg");
  theBoyStandingRight = loadImage("./The_boy/Stand_right.png");
  theBoyStandingLeft = loadImage("./The_boy/Stand_left.png");
  theBoyLyingDown = loadImage("./The_boy/Liedown.png");
  zombieFacingLeft = loadImage("./assets/zombie.png");
  skullForAttack = loadImage("./assets/skull.png");
}
function draw() {
  clear();
  game.draw();
  game.character.draw();
  game.zombie.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.keyPressed();
}
