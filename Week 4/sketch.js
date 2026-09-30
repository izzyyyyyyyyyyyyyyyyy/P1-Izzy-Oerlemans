let randomX = []
let randomY = []
let randomColor = []
let randomShape = []
let randomCount;
let randomSize = []
let randomOutlineColor = []
let randomOutlineSize = []
let randomGlowColor = []

function setup() {
  createCanvas(800, 600);
  randomCount = round(random(80,121))
  for (let o = 0; o < randomCount; o++) {
    randomX.push(round(random(0,800)))
    randomY.push(round(random(0,600)))
    randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
    randomShape.push(random("Square","Circle"))
    randomSize.push(round(random(40,100)))
    randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    randomGlowColor.push(color(random(0,255),random(0,255),random(0,255)))
    randomOutlineSize.push(round(random(2,40)))
  }
}

function draw() {
  background(0);
  if (frameCount % 30 === 0) {
    randomGlowColor.splice(0,randomCount)
    for (let o = 0; o < randomCount; o++) {
      randomGlowColor.push(color(random(0,255),random(0,255),random(0,255)))
    }
  }

  for (let i = 0; i < randomCount; i++) {
    fill(randomColor[i])
    drawingContext.shadowBlur = 50
    drawingContext.shadowColor = randomGlowColor[i]
    stroke(randomOutlineColor[i])
    strokeWeight(randomOutlineSize[i])
    circle((randomX[i]),(randomY[i]),randomSize[i])
    randomX[i] = randomX[i] - randomSize[i] / 15
    randomY[i] = randomY[i] - randomSize[i] / 10
    if (randomX[i] <= -130) {
      randomX[i] = 930
    }
    if (randomY[i] <= -130) {
      randomY[i] = 780
    }
  }
  
}

function keyPressed() {
  if (keyCode === 32) {
    randomX = []
    randomY = []
    randomColor = []
    randomShape = []
    randomCount = round(random(80,121))
    randomSize = []
    randomOutlineColor = []
    randomOutlineSize = []
    for (let o = 0; o < randomCount; o++) {
    randomX.push(round(random(0,800)))
    randomY.push(round(random(0,600)))
    randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
    randomShape.push(random("square", "circle"))
    randomSize.push(round(random(40,100)))
    randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    randomOutlineSize.push(round(random(2,40)))
    }
  }
  if (keyCode === 8) {
    randomColor = []
    randomOutlineColor = []
    
    for (let o = 0; o < randomCount; o++) {
      randomColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255)),round(random(100,200))))
      randomOutlineColor.push(color(round(random(0,255)),round(random(0,255)),round(random(0,255))))
    }
  }
}
