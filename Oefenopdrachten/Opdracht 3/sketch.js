function setup() {
  createCanvas(400, 200);
}


function draw() {
  background(220);

  let score = random(100)
  
  noLoop()

  if (score >= 90) {
    fill(0,255,0)
    textSize(30)
    text("Uitstekend!",10,40)
  }

  if (score >= 70 && score <= 89) {
    fill(255,255,0)
    text("Goed gedaan!",10,40)
  }

  if (score >= 50 && score <= 69) {
    fill("orange")
    text("Voldoende.",10,40)
  }

  if (score < 50) {
    fill("red")
    text("Onvoldoende.",10,40)
  }
}
