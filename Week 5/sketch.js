let slides = 0;
let answers = []
answers[0] = ["", "", "", ""]
answers[1] = ["7.", "4.", "seven.", "3."]
answers[2] = ["the fourth", "the fourth option", "option", "fish"]
answers[3] = ["fourth", "the second option", "the fourth option", "pick me!"]
answers[4] = ["both", "white with black", "black with white", "the fourth option"]
answers[5] = ["4", "-138.14", "-138.4", "-138.15"]
answers[6] = ["3.5 trillion~", "14", "3", "enough"]
answers[7] = ["no", "no", "no", "yes (i am stupid)"]
answers[8] = ["right and left", "both ways", "the chicken", "left and right then left again"]
answers[9] = ["the dot", "the", ".", "dot"]
answers[10] = ["yes", "yes", "yes", "yes"]
let buttonIDS_answers = []
let startButtonID = []
let results = 0;

function setup() {
  createCanvas(1200, 800);
  let button2 = createButton("START")
  button2.position(300, 600)
  button2.size(600, 100)
  button2.style("font-size", "90px")
  startButtonID.push(button2)
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      let button = createButton(answers[slides][j * 2 + i])
      button.position(i * 600 + 10, j * 100 + 600)
      button.style("background-color", "white")
      button.style("font-size", "55px")
      button.size(595, 100)
      buttonIDS_answers.push(button)
    }
  }
}

function draw() {
  background(220)
  if (results == 1) {
    background(0, 255, 0)
    startButtonID[0].mousePressed(nextSlide)
    startButtonID[0].html("NEXT")
    for (let i = 0; i < 4; i++) {
      buttonIDS_answers[i].hide()
      startButtonID[0].show()
    }
    fill(0)
    text("CORRECT", 100, 100)
  }
  if (results == 2) {
    background(255,0,0)
    startButtonID[0].mousePressed(restart)
    startButtonID[0].html("RESTART")
    for (let i = 0; i < 4; i++) {
      buttonIDS_answers[i].hide()
      startButtonID[0].show()
    }
  }

  if (results == 0) {
    startButtonID[0].mousePressed(nextSlide)
    startButtonID[0].html("START")
  }
  if (slides == 0) {
    textSize(75)
    if (results !== 1 && results !== 2) {
      text("Welcome to the impossible quiz.", 50, 100)
    }
    for (let i = 0; i < 4; i++) {
      buttonIDS_answers[i].hide()
    }
  }

  if (slides !== 0) {
    if (results !== 1 && results !== 2) {
      startButtonID[0].hide()
      for (let i = 0; i < 4; i++) {
        buttonIDS_answers[i].show()
        buttonIDS_answers[i].html(answers[slides][i])
        buttonIDS_answers[i].mouseOver(() => buttonIDS_answers[i].style("background-color", "#9e9e9e"))
        buttonIDS_answers[i].mouseOut(() => buttonIDS_answers[i].style("background-color", "white"))
      }
    }

  }
  if (slides == 3 || slides == 6 || slides == 7 || slides == 10) {
    buttonIDS_answers[0].mousePressed(correctAnswer)
  } else if (slides == 1 || slides == 2 || slides == 4 || slides == 5 || slides == 8 || slides == 9) [
    buttonIDS_answers[0].mousePressed(wrongAnswer)
  ]
  if (slides == 1 || slides == 4 || slides == 5 || slides == 7 || slides == 10) {
    buttonIDS_answers[1].mousePressed(correctAnswer)
  } else if (slides == 2 || slides == 3 || slides == 6 || slides == 8 || slides == 9) {
    buttonIDS_answers[1].mousePressed(wrongAnswer)
  }
  if (slides == 4 || slides == 7 || slides == 10) {
    buttonIDS_answers[2].mousePressed(correctAnswer)
  } else if (slides == 1 || slides == 2 || slides == 3 || slides == 5 || slides == 6 || slides == 8 || slides == 9) {
    buttonIDS_answers[2].mousePressed(wrongAnswer)
  }
  if (slides == 2 || slides == 8 || slides == 10) {
    buttonIDS_answers[3].mousePressed(correctAnswer)
  } else if (slides == 1 || slides == 3 || slides == 4 || slides == 5 || slides == 6 || slides == 7 || slides == 9) {
    buttonIDS_answers[3].mousePressed(wrongAnswer)
  }

}

function nextSlide() {
  slides += 1
  results = 0
}

function correctAnswer() {
  results = 1
}

function wrongAnswer () {
  results = 2
}

function restart() {
  slides = 0
  results = 0
}