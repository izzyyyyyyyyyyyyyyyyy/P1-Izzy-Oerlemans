let sky_color;
let from;
let to;
let wolken_move = 0
let wolken_move2 = 200
let wolken_move3 = 500
let wolken_move4 = 800
let zon_move = 0
let sky_transition = 0;
let maan_move = -820
let wolken_kleur_dag1;
let wolken_kleur_nacht1;
let wolken_kleur_dag2;
let wolken_kleur_nacht2;
let wolken_kleur1;
let wolken_kleur2;
let wolken_transition = 0;
let nacht_darkness_trans = 0;
let sterrenkleur1 = 255;
let sterrenkleur2 = 200;
let sterren_trans = 1;
let sterren_opac = 0;
let red_light = 160;
let orange_light = 160;
let green_light = 160;
let stoplicht_volgorde = 1;
let car_move = 0;
let car_move2 = 0;
let car_color1 = 0;
let car_color2 = 0;
let car_color3 = 0;
let car2_color1 = 0;
let car2_color2 = 0;
let car2_color3 = 0;

function setup() {
  createCanvas(800, 600);
  from = color(100,200,255)
  to = color(29,4,87)
  wolken_kleur_dag1 = color(255)
  wolken_kleur_nacht1 = color(150)
  wolken_kleur_dag2 = color(225)
  wolken_kleur_nacht2 = color(120)
}

function draw() {
  //lerpcolor definitions
  sky_color = lerpColor(from,to,0 + sky_transition);
  wolken_kleur1 = lerpColor(wolken_kleur_dag1,wolken_kleur_nacht1,0 + wolken_transition)
  wolken_kleur2 = lerpColor(wolken_kleur_dag2,wolken_kleur_nacht2,0 + wolken_transition)

  //sky
  noStroke()
  fill(sky_color)
  rect(0,0,800,600)

  //zon
  drawingContext.shadowBlur = 80;
  drawingContext.shadowColor = color(252,104,133)
  fill("red")
  circle(50 + zon_move,70,95)
  fill("orange")
  circle(50 + zon_move,70,90)
  fill("yellow")
  circle(50 + zon_move,70,80)
  
  drawingContext.shadowBlur = 0

  //maan
  drawingContext.shadowBlur = 60
  drawingContext.shadowColor = color(0,108,171)
  fill(200)
  circle(50 + maan_move,70,95)
  fill(120)
  circle(50 + maan_move,70,90)
  fill(190)
  circle(50 + maan_move,70,80)
  drawingContext.shadowBlur = 0
  fill(210)
  circle(70 + maan_move,80,35)
  circle(25 + maan_move,70,27)
  circle(50 + maan_move,50,27)
  circle(55 + maan_move,95,20)
  fill(100)
  circle(70 + maan_move,80,30)
  circle(25 + maan_move,70,22)
  circle(50 + maan_move,50,22)
  circle(55 + maan_move,95,15)
  
  //sterren
  fill(sterrenkleur1)
  drawingContext.shadowBlur = 30
  drawingContext.shadowColor = color(166,200,255)
  strokeWeight(3)
  stroke(sterrenkleur1,sterren_opac)
  line(75,75,85,85)
  line(75,85,85,75)
  stroke(sterrenkleur2,sterren_opac)
  line(80,70,80,90)
  line(70,80,90,80)

  stroke(sterrenkleur1,sterren_opac)
  line(155,95,165,105)
  line(155,105,165,95)
  stroke(sterrenkleur2,sterren_opac)
  line(160,90,160,110)
  line(150,100,170,100)

  stroke(sterrenkleur1,sterren_opac)
  line(135,155,145,165)
  line(135,165,145,155)
  stroke(sterrenkleur2,sterren_opac)
  line(140,150,140,170)
  line(130,160,150,160)

  stroke(sterrenkleur1,sterren_opac)
  line(25,165,35,175)
  line(25,175,35,165)
  stroke(sterrenkleur2,sterren_opac)
  line(30,160,30,180)
  line(20,170,40,170)

  stroke(sterrenkleur1,sterren_opac)
  line(65,245,75,255)
  line(65,255,75,245)
  stroke(sterrenkleur2,sterren_opac)
  line(70,240,70,260)
  line(60,250,80,250)

  stroke(sterrenkleur1,sterren_opac)
  line(25,25,35,35)
  line(25,35,35,25)
  stroke(sterrenkleur2,sterren_opac)
  line(30,20,30,40)
  line(20,30,40,30)

  stroke(sterrenkleur1,sterren_opac)
  line(105,35,115,45)
  line(105,45,115,35)
  stroke(sterrenkleur2,sterren_opac)
  line(110,30,110,50)
  line(100,40,120,40)

  stroke(sterrenkleur1,sterren_opac)
  line(195,35,205,45)
  line(195,45,205,35)
  stroke(sterrenkleur2,sterren_opac)
  line(200,30,200,50)
  line(190,40,210,40)

  stroke(sterrenkleur1,sterren_opac)
  line(260,135,270,145)
  line(260,145,270,135)
  stroke(sterrenkleur2,sterren_opac)
  line(265,130,265,150)
  line(255,140,275,140)

  stroke(sterrenkleur1,sterren_opac)
  line(330,60,340,70)
  line(330,70,340,60)
  stroke(sterrenkleur2,sterren_opac)
  line(335,55,335,75)
  line(325,65,345,65)

  stroke(sterrenkleur1,sterren_opac)
  line(300,30,310,40)
  line(300,40,310,30)
  stroke(sterrenkleur2,sterren_opac)
  line(305,25,305,45)
  line(295,35,315,35)

  stroke(sterrenkleur1,sterren_opac)
  line(400,30,410,40)
  line(400,40,410,30)
  stroke(sterrenkleur2,sterren_opac)
  line(405,25,405,45)
  line(395,35,415,35)

  stroke(sterrenkleur1,sterren_opac)
  line(500,130,510,140)
  line(500,140,510,130)
  stroke(sterrenkleur2,sterren_opac)
  line(505,125,505,145)
  line(495,135,515,135)

  stroke(sterrenkleur1,sterren_opac)
  line(500,20,510,30)
  line(500,30,510,20)
  stroke(sterrenkleur2,sterren_opac)
  line(505,15,505,35)
  line(495,25,515,25)

  stroke(sterrenkleur1,sterren_opac)
  line(580,80,590,90)
  line(580,90,590,80)
  stroke(sterrenkleur2,sterren_opac)
  line(585,75,585,95)
  line(575,85,595,85)

  stroke(sterrenkleur1,sterren_opac)
  line(680,190,690,200)
  line(680,200,690,190)
  stroke(sterrenkleur2,sterren_opac)
  line(685,185,685,205)
  line(675,195,695,195)

  stroke(sterrenkleur1,sterren_opac)
  line(630,0,640,10)
  line(630,10,640,0)
  stroke(sterrenkleur2,sterren_opac)
  line(635,-5,635,15)
  line(625,5,645,5)

  stroke(sterrenkleur1,sterren_opac)
  line(730,100,740,110)
  line(730,110,740,100)
  stroke(sterrenkleur2,sterren_opac)
  line(735,95,735,115)
  line(725,105,745,105)

  stroke(sterrenkleur1,sterren_opac)
  line(670,120,680,130)
  line(670,130,680,120)
  stroke(sterrenkleur2,sterren_opac)
  line(675,115,675,135)
  line(665,125,685,125)

  stroke(sterrenkleur1,sterren_opac)
  line(760,20,770,30)
  line(760,30,770,20)
  stroke(sterrenkleur2,sterren_opac)
  line(765,15,765,35)
  line(755,25,775,25)

  stroke(sterrenkleur1,sterren_opac)
  line(760,220,770,230)
  line(760,230,770,220)
  stroke(sterrenkleur2,sterren_opac)
  line(765,215,765,235)
  line(755,225,775,225)

  if (frameCount % 20 === 0) {
    sterren_trans += 1
  }

  if (sterren_trans > 2) {
    sterren_trans = 1
  }


  if (sterren_trans == 1) {
    sterrenkleur1 = 255
    sterrenkleur2 = 200
  } else {
    sterrenkleur1 = 200
    sterrenkleur2 = 255
  }
  
  drawingContext.shadowBlur = 0

  //mountains
  stroke(0)
  strokeWeight(2)
  fill(120)
  triangle(100,460,400,50,700,460)
  fill(200)
  triangle(10,460,200,150,390,460)
  triangle(450,460,600,150,750,460)

  //grass
  strokeWeight(0)
  fill(0,100,0)
  rect(0,460,800,400)
  fill(0,170,0)
  rect(0,475,800,400)

  //road
  fill(110)
  rect(0,490,800,400)
  strokeWeight(10)
  stroke(200)
  line(20,535,80,535)
  line(120,535,180,535)
  line(220,535,280,535)
  line(320,535,380,535)
  line(420,535,480,535)
  line(520,535,580,535)
  line(620,535,680,535)
  line(720,535,780,535)
  line(820,535,880,535)

  //trees

  //trunks
  strokeWeight(0)
  let color_dark_brown = color(74,54,1)
  fill(color_dark_brown)
  rect(40,360,20,120)
  rect(160,360,20,120)
  rect(280,360,20,120)
  rect(400,360,20,120)
  rect(520,360,20,120)
  rect(640,360,20,120)
  rect(760,360,20,120)

  //leaves
  let color_dark_green = color(6,112,0)
  fill(color_dark_green)
  circle(50,350,112)
  circle(170,350,112)
  circle(290,350,112)
  circle(410,350,112)
  circle(530,350,112)
  circle(650,350,112)
  circle(770,350,112)

  //wolken
  strokeWeight(0)
  stroke(0)
  fill(wolken_kleur2)
  ellipse(-150 + wolken_move,50,100,50)
  ellipse(-120 + wolken_move,40,120,50)
  ellipse(-80 + wolken_move,60,120,50)
  fill(wolken_kleur1)
  ellipse(-150 + wolken_move,60,120,50)
  ellipse(-120 + wolken_move,50,120,50)
  ellipse(-80 + wolken_move,50,120,50)

  fill(wolken_kleur2)
  ellipse(-150 + wolken_move2,80,100,50)
  ellipse(-120 + wolken_move2,70,120,50)
  ellipse(-80 + wolken_move2,90,120,50)
  fill(wolken_kleur1)
  ellipse(-150 + wolken_move2,90,120,50)
  ellipse(-120 + wolken_move2,80,120,50)
  ellipse(-80 + wolken_move2,80,120,50)

  fill(wolken_kleur2)
  ellipse(-150 + wolken_move3,100,100,50)
  ellipse(-120 + wolken_move3,90,120,50)
  ellipse(-80 + wolken_move3,110,120,50)
  fill(wolken_kleur1)
  ellipse(-150 + wolken_move3,110,120,50)
  ellipse(-120 + wolken_move3,100,120,50)
  ellipse(-80 + wolken_move3,100,120,50)

  fill(wolken_kleur2)
  ellipse(-150 + wolken_move4,80,100,50)
  ellipse(-120 + wolken_move4,70,120,50)
  ellipse(-80 + wolken_move4,90,120,50)
  fill(wolken_kleur1)
  ellipse(-150 + wolken_move4,90,120,50)
  ellipse(-120 + wolken_move4,80,120,50)
  ellipse(-80 + wolken_move4,80,120,50)

  //stoplicht
  strokeWeight(2)
  fill(120)
  rect(600,365,30,80)
  rect(607.5,445,15,40)
  fill(red_light,0,0)
  strokeWeight(1)
  circle(615,380,25)
  fill(0,green_light,0)
  circle(615,430,25)
  fill(orange_light,100,0)
  circle(615,405,25)

  //auto's

  fill(car_color1,car_color2,car_color3)
  rect(100 + car_move,460,120,40)
  rect(130 + car_move,420,60,40)
  fill(0,200,255)
  rect(145 + car_move,425,40,35)
  fill(0)
  circle(120 + car_move,500,40)
  circle(200 + car_move,500,40)

  fill(car2_color1,car2_color2,car2_color3)
  rect(300 + car_move2,460,120,40)
  rect(330 + car_move2,420,60,40)
  fill(0,200,255)
  rect(345 + car_move2,425,40,35)
  fill(0)
  circle(320 + car_move2,500,40)
  circle(400 + car_move2,500,40)

  fill(0,nacht_darkness_trans)
  rect(0,0,1000,1000)

  //auto snelheid scripts en stoplicht scripts
  if (stoplicht_volgorde == 1) {
    red_light = 255;
    orange_light = 160;
    green_light = 160;
    car_move += 0;
    car_move2 += 0;
  }

  if (stoplicht_volgorde == 2) {
    red_light = 160
    orange_light = 255
    green_light = 160
    car_move += 1
    car_move2 += 1.2
  }

  if (stoplicht_volgorde == 3) {
    red_light = 160
    orange_light = 160
    green_light = 255
    car_move += 2
    car_move2 += 3
  }

  //car warping and color scripts
  if (car_move >= 830) {
    car_move = random(-800,-250)
    car_color1 = random(255)
    car_color2 = random(255)
    car_color3 = random(255)
  }

  if (car_move2 >= 530) {
    car_move2 = random(-1200,-550)
    car2_color1 = random(255)
    car2_color2 = random(255)
    car2_color3 = random(255)
  }

  if (stoplicht_volgorde > 3) {
    stoplicht_volgorde = 1
  }

  //nacht shade en sterren transitie

  if (zon_move < -50) {
    nacht_darkness_trans += 1
    sterren_opac += 2
  } else {
    nacht_darkness_trans -= 1
    sterren_opac -= 2
  }

  if (nacht_darkness_trans >= 100) {
    nacht_darkness_trans = 100
  }

  if (nacht_darkness_trans <= 0) {
    nacht_darkness_trans = 0
  }

  if (sterren_opac > 255) {
    sterren_opac = 255
  }

  if (sterren_opac < 0) {
    sterren_opac = 0
  }

  //beweging wolken

  wolken_move = wolken_move + -0.5
  if (wolken_move <= 1) {
    wolken_move = 1100
  }

  wolken_move2 = wolken_move2 + -0.5
  if (wolken_move2 <= 1) {
    wolken_move2 = 1100
  }

  wolken_move3 = wolken_move3 + -0.5
  if (wolken_move3 <= 1) {
    wolken_move3 = 1100
  }

  wolken_move4 = wolken_move4 + -0.5
  if (wolken_move4 <= 1) {
    wolken_move4 = 1100
  }

  //beweging maan

  maan_move = maan_move + 0.25
  if (maan_move == 830) {
    maan_move = -830
  }

  //beweging zon + kleuren transitie tussen dag en nacht

  zon_move = zon_move + 0.25
  if (zon_move == 830) {
    zon_move = -830
  }

  if (zon_move >= 760) {
    sky_transition += 0.01
    wolken_transition += 0.01
  }

  if (zon_move <= 0 && zon_move >=-70) {
    sky_transition = sky_transition - 0.01
    wolken_transition = wolken_transition - 0.01
  }

}

//stoplicht controls

function keyPressed() {
  if (keyCode === 13) {
    stoplicht_volgorde += 1
  }
}
