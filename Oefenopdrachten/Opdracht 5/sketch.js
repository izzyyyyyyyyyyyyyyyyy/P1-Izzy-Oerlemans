let square_shade = 0
let afname = 0

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  //labels
  fill(0)
  text("1.",10,30)
  text("2.",20,105)
  text("3.",80,105)
  text("4.",80,205)
  text("5.",540,20)
  text("6.",350,105)
  text("7.",625,105)
  strokeWeight(1)

  //1. 10 blokjes op een rij
  for (i = 0; i < 7; i++) {
    fill(255)
    square(5 * i * 10,40,50)
  }

  for (i = 6; i < 7; i++) {
    fill(0,0,255)
    square(5 * i * 10,40,50)
  }

  for (i = 7; i < 10; i++) {
    fill(255)
    square(5 * i * 10,40,50)
  }

  //2. 5 blokjes onder elkaar
  for (e = 0; e < 5; e++) {
    fill(63.75 * e)
    square(10,120 + e * 50,50)
  }

  //3. 4 blokes naast elkaar
  for (j = 0; j < 4; j++) {
    fill(0,85 * j,0)
    rect(afname + 80,115,(1 + j) * 25,50)
    if (j == 0) {
      afname = 25
    }
    if (j == 1) {
      afname = 75
    }
    if (j == 2) {
      afname = 150
    }
    if (j == 3) {
      afname = 0
    }
  }

  //4. 4 blouwe blokjes naast elkaar
  for (b = 0; b < 4; b++) {
    fill(0,0,255 - 85 * b)
    rect(afname + 80,215,(1 + b) * 25,b * 25 + 50)
    if (b == 0) {
      afname = 25
    }
    if (b == 1) {
      afname = 75
    }
    if (b == 2) {
      afname = 150
    }
    if (b == 3) {
      afname = 0
    }
  }

  //5. cirkels naast elkaar
  fill(255)
  for (c = 0; c < 5; c++) {
    strokeWeight(4 * c)
    circle(c * 55 + 550,50, 35)
  }

  //6. bullseye
  strokeWeight(1)
  for (n = 0; n < 10; n++) {
    if (n == 0 || n == 2 || n == 4 || n == 6 || n == 8) {
      fill(255,0,0)
      circle(470,230,250 - n * 25)
    } else {
      fill(255)
      circle(470,230,250 - n * 25 + 3.125)
    }
  }

  //7. accordeon
  for (m = 0; m < 21; m++) {
    if (m == 0 || m == 2 || m == 4 || m == 6 || m == 8 || m == 10) {
      fill(140)
      rect(625,115 + m * 10,10 + m * 10,10)
    } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 9) {
      fill(255)
      rect(625,115 + m * 10,10 + m * 10,10)
    }

    if (m == 12 || m == 14 || m == 16 || m == 18 || m == 20) {
      fill(140)
      rect(625,115 + m * 10,110 - (m - 10) * 10,10)
    } else if (m == 11 || m == 13 || m == 15 || m == 17 || m ==19) {
      fill(255)
      rect(625,115 + m * 10,110 - (m - 10) * 10,10)
    }
  }
}
