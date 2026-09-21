let vakje1;
let vakje2;
let vakje3;
let vakje4;
let vakje5;
let vakje6;
let vakje7;
let vakje8;
let vakje9;
let turn = 1;
let background_color;

function setup() {
  createCanvas(1020, 840);
  vakje1 = color(230);
  vakje2 = color(230);
  vakje3 = color(230);
  vakje4 = color(230);
  vakje5 = color(230);
  vakje6 = color(230);
  vakje7 = color(230);
  vakje8 = color(230);
  vakje9 = color(230);
  background_color = color(255,0,0)
}

function draw() {
  background(background_color);

  fill(0)
  textSize(25)
  text(mouseX,10,40)
  text(mouseY,10,80)
  
  square(200,100,620,40)
  fill(vakje1)
  square(220,120,180)
  fill(vakje2)
  square(420,120,180)
  fill(vakje3)
  square(620,120,180)
  fill(vakje4)
  square(220,320,180)
  fill(vakje5)
  square(420,320,180)
  fill(vakje6)
  square(620,320,180)
  fill(vakje7)
  square(220,520,180)
  fill(vakje8)
  square(420,520,180)
  fill(vakje9)
  square(620,520,180)

  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 120 && mouseY <= 300) {
    vakje1 = color(200)
  } else {
    vakje1 = color(230)
  }

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 120 && mouseY <= 300) {
    vakje2 = color(200)
  } else {
    vakje2 = color(230)
  }

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 120 && mouseY <= 300) {
    vakje3 = color(200)
  } else {
    vakje3 = color(230)
  }

  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 320 && mouseY <= 500) {
    vakje4 = color(200)
  } else {
    vakje4 = color(230)
  }

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 320 && mouseY <= 500) {
    vakje5 = color(200)
  } else {
    vakje5 = color(230)
  }

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 320 && mouseY <= 500) {
    vakje6 = color(200)
  } else {
    vakje6 = color(230)
  }

  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 520 && mouseY <= 700) {
    vakje7 = color(200)
  } else {
    vakje7 = color(230)
  }

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 520 && mouseY <= 700) {
    vakje8 = color(200)
  } else {
    vakje8 = color(230)
  }

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 520 && mouseY <= 700) {
    if (mouseIsPressed === true) {
      if (mouseButton.left) {
        vakje9 = color(255,0,0)
      }
    } else {
      vakje9 = color(200)
    }
      
  } else {
    vakje9 = color(230)
  }

  if (turn == 1) {
    background_color = color(255,0,0)
  } else {
    background_color = color(0,0,255)
  }
}


