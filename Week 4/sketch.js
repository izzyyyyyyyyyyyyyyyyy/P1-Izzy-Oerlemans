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
  randomShapeCount = round(random(70,100))
  for (let p = 0; p < 80; p++) {
    randomSterrenX.push(round(random(-100,900)))
    randomSterrenY.push(round(random(-100,700)))
    randomSterrenSpeed.push(round(random(5,12)))
  }
  for (let o = 0; o < randomShapeCount; o++) {
    randomX.push(round(random(-100,900)))
    randomY.push(round(random(-100,700)))
    randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
    randomSize.push(round(random(20,130)))
    randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    randomGlowColor.push(color(random(0,255),random(0,255),random(0,255)))
    randomOutlineSize.push(round(random(2,20)))
    randomShape.push(round(random(0,2)))
  }
  speedControl = 130
}

function draw() {
  background(0);
  if (mouseY > 560 && mouseY < 600 && mouseX > 29 && mouseX < 800)
  speedControl = mouseX - 30
  if (frameCount % 30 === 0) {
    randomGlowColor.splice(0,randomShapeCount)
    for (let o = 0; o < randomShapeCount; o++) {
      randomGlowColor.push(color(random(0,255),random(0,255),random(0,255)))
    }
  }

  for (let j = 0; j < 80; j++) {
    fill(255)
    drawingContext.shadowColor = color(255)
    stroke(255)
    strokeWeight(5)
    line(randomSterrenX[j],randomSterrenY[j],randomSterrenX[j] - 70,randomSterrenY[j] - 70)
    randomSterrenX[j] = randomSterrenX[j] + randomSterrenSpeed[j]
    randomSterrenY[j] = randomSterrenY[j] + randomSterrenSpeed[j]

    if (randomSterrenX[j] >= 930) {
      randomSterrenX[j] = -130
    }
    if (randomSterrenY[j] >= 730) {
      randomSterrenY[j] = -130
    }
  }
  for (let i = 0; i < randomShapeCount; i++) {
    fill(randomColor[i])
    drawingContext.shadowBlur = 50
    drawingContext.shadowColor = randomGlowColor[i]
    stroke(randomOutlineColor[i])
    strokeWeight(randomOutlineSize[i])
    if (randomShape[i] == 0) {
      circle(randomX[i],randomY[i],randomSize[i])
    }
    if (randomShape[i] == 1) {
      square(randomX[i],randomY[i],randomSize[i])
    }
    if (randomShape[i] == 2) {
      triangle(randomX[i],randomY[i],randomX[i] + randomSize[i] / 2,randomY[i] - 0.9 * randomSize[i],randomX[i] + randomSize[i],randomY[i])
    }
    randomX[i] = randomX[i] - randomSize[i] / 18 * (speedControl / 100)
    randomY[i] = randomY[i] - randomSize[i] / 13
    
    if (randomX[i] <= -130) {
      randomX[i] = 930
    }
    if (randomY[i] <= -130) {
      randomY[i] = 780
    }
  }
  if (speedControl > 760) {
    speedControl = 740
  }
  if (speedControl < 0) {
    speedControl = 0
  }
  fill(255,255)
  strokeWeight(2)
  stroke(randomGlowColor)
  text("Speed Slider",290,545)
  textSize(40)
  rect(10,560,780,30)
  fill(0,255)
  square(10 + speedControl,555,40)
}

function keyPressed() {
  if (keyCode === 32) {
    randomX = []
    randomY = []
    randomColor = []
    randomShape = []
    randomShapeCount = round(random(70,100))
    randomSize = []
    randomOutlineColor = []
    randomOutlineSize = []
    randomSterrenX = []
    randomSterrenY = []
    randomSterrenSpeed = []
    for (let o = 0; o < randomShapeCount; o++) {
    randomX.push(round(random(-100,900)))
    randomY.push(round(random(-100,700)))
    randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
    randomShape.push(round(random(0,2)))
    randomSize.push(round(random(20,130)))
    randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    randomOutlineSize.push(round(random(2,20)))
    }
    for (let p = 0; p < 80; p++) {
    randomSterrenX.push(round(random(-100,900)))
    randomSterrenY.push(round(random(-100,700)))
    randomSterrenSpeed.push(round(random(5,12)))
    }
  }
  if (keyCode === 8) {
    randomColor = []
    randomOutlineColor = []
    
    for (let o = 0; o < randomShapeCount; o++) {
      randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
      randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    }
  }
}
