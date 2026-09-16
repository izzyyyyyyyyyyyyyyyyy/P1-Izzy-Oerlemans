let transparency_square = 0;
let cijfer = 0;
let red_light = 160;
let green_light = 160;
let orange_light = 160;
let stoplicht_volgorde = 1;
let eight_ball_x = 0;
let eight_ball_y = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  strokeWeight(0)
  textSize(12)
  fill(0)
  text("1. Houd B ingedrukt om dit blokje te laten verschijnen.",5,40)
  text("2. Druk op spatie om het getal op 0 te zetten.",5,110)
  text("3. ")
  text("x: " + mouseX,10,10);
  text("y: " + mouseY,10,20); 
  textSize(50)
  text(cijfer,10,160)
  fill(0,transparency_square);
  rect(5,50,40,40);
  //stoplicht
  strokeWeight(2)
  fill(175)
  rect(30,180,60,180)
  rect(45,360,30,50)

  fill(red_light,0,0)
  circle(60,210,50)
  fill(orange_light,100,0)
  circle(60,270,50)
  fill(0,green_light,0)
  circle(60,330,50)
  //8-ball
  fill(0)
  circle(400 + eight_ball_x,100 + eight_ball_y,100)
  fill(255)
  circle(400 + eight_ball_x,100 + eight_ball_y,60)
  fill(0)
  text("8",386 + eight_ball_x,116 + eight_ball_y)

  cijfer = cijfer + 1

  if (cijfer > 500) {
    cijfer = 0
  }

  if (stoplicht_volgorde == 1) {
    red_light = 255
    orange_light = 160
    green_light = 160
  }

  if (stoplicht_volgorde == 2) {
    red_light = 160
    orange_light = 255
    green_light = 160
  }

  if (stoplicht_volgorde == 3) {
    red_light = 160
    orange_light = 160
    green_light = 255
  }

  if (keyIsPressed === true) {
    if (keyCode === 66) {
      transparency_square = 255
    }
  } else {
    transparency_square = 0
  }

  if (stoplicht_volgorde > 3) {
    stoplicht_volgorde = 1
  }

  if (keyIsPressed === true) {
    if (keyCode === 87) {
      eight_ball_y -= 1
    }

    if (keyCode === 83) {
      eight_ball_y += 1
    }

    if (keyCode === 65) {
      eight_ball_x -= 1
    }

    if (keyCode === 68) {
      eight_ball_x += 1
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    cijfer = 0
  }

  if (keyCode === 13) {
    stoplicht_volgorde += 1
  }
}
