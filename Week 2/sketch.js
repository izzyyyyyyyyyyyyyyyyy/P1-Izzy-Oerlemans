let sky_color;
let from;
let to;
let wolken_move = 0
let wolken_move2 = 200
let wolken_move3 = 500
let wolken_move4 = 800
let zon_move = -820
let sky_transition = 1;
let maan_move = 0
let wolken_kleur_dag1;
let wolken_kleur_nacht1;
let wolken_kleur_dag2;
let wolken_kleur_nacht2;
let wolken_kleur1;
let wolken_kleur2;
let wolken_transition = 1;
let nacht_darkness_trans = 0;
let sterrenkleur1 = 255;
let sterrenkleur2 = 200;
let sterren_trans = 1
let sterren_opac = 255

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
  sky_color = lerpColor(from,to,0 + sky_transition);
  wolken_kleur1 = lerpColor(wolken_kleur_dag1,wolken_kleur_nacht1,0 + wolken_transition)
  wolken_kleur2 = lerpColor(wolken_kleur_dag2,wolken_kleur_nacht2,0 + wolken_transition)
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
  //LEAVES

  //layer1
  fill(0,240,0)


  //layer4
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

  fill(0,nacht_darkness_trans)
  rect(0,0,1000,1000)

  //nacht shade

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

  wolken_move = wolken_move + 0.5
  if (wolken_move >= 1100) {
    wolken_move = 1
  }

  wolken_move2 = wolken_move2 + 0.5
  if (wolken_move2 >= 1100) {
    wolken_move2 = 1
  }

  wolken_move3 = wolken_move3 + 0.5
  if (wolken_move3 >= 1100) {
    wolken_move3 = 1
  }

  wolken_move4 = wolken_move4 + 0.5
  if (wolken_move4 >= 1100) {
    wolken_move4 = 1
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


  //auto's

}