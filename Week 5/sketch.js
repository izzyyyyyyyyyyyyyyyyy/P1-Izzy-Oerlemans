let slides = []
slides = ["Welcome to the impossible quiz.",
  "How many letters does this have?",
  "Pick the fourth option.",
  "Pick the 'fourth' option.",
  `Are zebras black with white stripes, 
  or white with black stripes?`,
  `What is 120 / 23 + 15.260 - 214.5003
  / π * (50% / 21.523%)? (rounded)`,
  "How many fish are here right now?",
  "Is twitter a reliable news source?",
  `Is this project a 10/10?
  (I'm watching you.)`,
  `When crossing the road, you look...
  (fill in the blank)`,
  "Click the dot.",
  `You have a 1/4 chance to get this one
  right lol.`]

let slide_count = 1;

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  let answers = []
  answers[1] = ["7.", "4.", "Seven.", "3."]
  answers[2] = ["the fourth", "the fourth option.", "option", "fish"]
  answers[3] = ["fourth", "the second option", "the fourth option", "pick me"]
  answers[4] = ["black with white", "white with black", "both", "the fourth option"]
  answers[5] = ["4", "-138.14", "-138.4", "-138.15"]
  answers[6] = ["3.5 trillion~", "14", "3", "enough"]
  answers[7] = ["no", "no", "no", "yeah :D"]
  answers[8] = ["yes", "of course", "absolutely", "positive"]
  answers[9] = ["right and left", "both ways", "why did the chicken cross?", "left and right"]
  answers[10] = ["the dot", "the", ".", "dot"]
  answers[11] = ["pick me!", "no me!", "PICK ME", "Please pick me."]
  background(200)
  fill(0)
  textSize(70)
  text(slides[slide_count], 10, 60)
  if (slide_count > 0) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        fill(255)
        rect(i * 595 + 10, j * 110 + 580, 585, 100)
        fill(0)
        text(answers[slide_count][i], i * 595 + 10, j * 110 + 660)
      }
    }
  }
}
