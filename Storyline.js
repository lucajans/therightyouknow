//Create a variable to keep track of the current section of the story.
let current;

function setup() {
  createCanvas(400, 400);
  createStory();

  current = beginning;
  console.log(current)
}

function draw() {
  background(220);

  fill(255, 0, 0);
  
  // Draw the text for the current option on the screen
  text(current.text, 50, 50);

  text(current.option1, 50, 200);

  text(current.option2, 200, 200);

}

// Simple keymapping to options. 
function keyPressed() {
  if (key == 'a') {
    if (current.target1 != null) { // Make sure a valid option exists.
      current = current.target1;   // Advance to next story section
    }
  }
  if (key == 'b') {
    if (current.target1 != null) { // Make sure a valid option exists
      current = current.target2;   // Advance to next story section
    }
  }
}

class StorySection {
  //Construct the object with necessary section info
  constructor(_text, _option1, _target1, _option2, _target2) {
    this.text = _text;
    this.option1 = _option1;
    this.target1 = _target1;
    this.option2 = _option2;
    this.target2 = _target2;
  }
}


//// STORY ////

//In your final game this bit could live in a separate file
function createStory() {
  // In this example you need to initialise these in reverse order, so that 
  // when you assign a target it already exists. I.e., start at the end!
  
  showerQuick = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )
  showerLong = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )
  
  instagramStay = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )
  

  instagramLogoff = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )

  instagram = new StorySection(
    "Insta!", //Descrption for scene
    "(a) Log off?", //Text for option 1
    instagramLogoff, //Object target for option 1
    "(b) Stay on?", //Text for option 1
    instagramStay //Object target for option 2
  )

  shower = new StorySection(
    "Shower!", //Description for scene
    "(a) Take your time?", //Text for option 1
    showerLong, //Object target for option 1
    "(b) Rush?", //Text for option 1
    showerQuick //Object target for option 2
  )

  beginning = new StorySection(
    "You wake up!", //Descrption for scene
    "(a) Instagram?", //Text for option 1
    instagram, //Object target for option 1
    "(b) Shower?", //Text for option 1
    shower //Object target for option 2
  )

}