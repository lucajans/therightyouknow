const game = new Game();

function preload() {
  cityBackground = loadImage("./assets/background.jpg");
  theBoyStandingRight = loadImage("./The_boy/Stand_right.png");
  theBoyStandingLeft = loadImage("./The_boy/Stand_left.png");
}
function draw() {
  clear();
  game.draw();
  game.character.draw();
}
function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.keyPressed();
}
