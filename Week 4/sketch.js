let randomX = []
let randomY = []
let randomColor = []
let randomShape = []
let randomShapeCount;
let randomSize = []
let randomOutlineColor = []
let randomOutlineSize = []
let randomGlowColor = []
let randomSterrenX = []
let randomSterrenY = []
let randomSterrenSpeed = []
let speedControl;

function setup() {
  createCanvas(800, 600);
  //dit stukje genereert alle random getallen voor kleur, vorm, etc...
  //sterren:
  randomShapeCount = round(random(70, 100))
  for (let p = 0; p < 80; p++) {
    randomSterrenX.push(round(random(-100, 900)))
    randomSterrenY.push(round(random(-100, 700)))
    randomSterrenSpeed.push(round(random(5, 12)))
  }
  //vormen:
  for (let o = 0; o < randomShapeCount; o++) {
    randomX.push(round(random(-100, 900)))
    randomY.push(round(random(-100, 700)))
    randomColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255)), round(random(100, 200))))
    randomSize.push(round(random(20, 130)))
    randomOutlineColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255))))
    randomGlowColor.push(color(random(0, 255), random(0, 255), random(0, 255)))
    randomOutlineSize.push(round(random(2, 20)))
    randomShape.push(round(random(0, 2)))
  }
  //zet de speed van de vormen zodat ze niet verdwijnen wanneer je de code opstart
  speedControl = 130
}

function draw() {
  background(0);
  //controleerd of de muis over de slider heen hovert
  if (mouseY > 560 && mouseY < 600 && mouseX > 29 && mouseX < 800) {
    speedControl = mouseX - 28
  }
  //zorgt ervoor dat de glow elke halve seconde verandert van kleur
  if (frameCount % 30 === 0) {
    randomGlowColor.splice(0, randomShapeCount)
    for (let o = 0; o < randomShapeCount; o++) {
      randomGlowColor.push(color(random(0, 255), random(0, 255), random(0, 255)))
    }
  }
  //tekent de sterren:
  for (let j = 0; j < 80; j++) {
    fill(255)
    drawingContext.shadowColor = color(255)
    stroke(255)
    strokeWeight(5)
    //sterren beweging
    line(randomSterrenX[j], randomSterrenY[j], randomSterrenX[j] - 70, randomSterrenY[j] - 70)
    randomSterrenX[j] = randomSterrenX[j] + randomSterrenSpeed[j]
    randomSterrenY[j] = randomSterrenY[j] + randomSterrenSpeed[j]
    //sterren warping
    if (randomSterrenX[j] >= 930) {
      randomSterrenX[j] = -130
    }
    if (randomSterrenY[j] >= 730) {
      randomSterrenY[j] = -130
    }
  }
  //tekent de shapes:
  for (let i = 0; i < randomShapeCount; i++) {
    fill(randomColor[i])
    drawingContext.shadowBlur = 50
    drawingContext.shadowColor = randomGlowColor[i]
    stroke(randomOutlineColor[i])
    strokeWeight(randomOutlineSize[i])
    //bepaalt de vorm:
    if (randomShape[i] == 0) {
      circle(randomX[i], randomY[i], randomSize[i])
    }
    if (randomShape[i] == 1) {
      square(randomX[i], randomY[i], randomSize[i])
    }
    if (randomShape[i] == 2) {
      triangle(randomX[i], randomY[i], randomX[i] + randomSize[i] / 2, randomY[i] - 0.9 * randomSize[i], randomX[i] + randomSize[i], randomY[i])
    }
    //de beweging van de shapes
    randomX[i] = randomX[i] - randomSize[i] / 13 * (speedControl / 100)
    randomY[i] = randomY[i] - randomSize[i] / 13 * (speedControl / 100)
    //shape warping
    if (randomX[i] <= -130) {
      randomX[i] = 930
    }
    if (randomY[i] <= -130) {
      randomY[i] = 780
    }
  }
  //deze code geeft de slider zijn limieten
  if (speedControl > 760) {
    speedControl = 740
  }
  if (speedControl < 0) {
    speedControl = 0
  }
  //de slider tekenen
  fill(255, 255)
  strokeWeight(2)
  stroke(randomGlowColor)
  textFont("Courier New")
  text("Speed Slider", 258, 545)
  textSize(40)
  rect(10, 560, 780, 30)
  fill(0, 255)
  square(10 + speedControl, 555, 40)
}

function keyPressed() {
  //hij doet hier eigenlijk alles wat hij ook in de setup doet
  if (keyCode === 32) {
    randomX = []
    randomY = []
    randomColor = []
    randomShape = []
    randomShapeCount = round(random(70, 100))
    randomSize = []
    randomOutlineColor = []
    randomOutlineSize = []
    randomSterrenX = []
    randomSterrenY = []
    randomSterrenSpeed = []
    for (let o = 0; o < randomShapeCount; o++) {
      randomX.push(round(random(-100, 900)))
      randomY.push(round(random(-100, 700)))
      randomColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255)), round(random(100, 200))))
      randomShape.push(round(random(0, 2)))
      randomSize.push(round(random(20, 130)))
      randomOutlineColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255))))
      randomOutlineSize.push(round(random(2, 20)))
    }
    for (let p = 0; p < 80; p++) {
      randomSterrenX.push(round(random(-100, 900)))
      randomSterrenY.push(round(random(-100, 700)))
      randomSterrenSpeed.push(round(random(5, 12)))
    }
  }
  //verandert de kleur wanneer je op backspace drukt
  if (keyCode === 8) {
    randomColor = []
    randomOutlineColor = []
    
    for (let o = 0; o < randomShapeCount; o++) {
      randomColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255)), round(random(100, 200))))
      randomOutlineColor.push(color(round(random(0, 255)), round(random(0, 255)), round(random(0, 255))))
    }
  }
}
