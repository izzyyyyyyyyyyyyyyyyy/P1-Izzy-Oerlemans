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
  sky_color = lerpColor(from,to,0 + sky_transition)
  wolken_kleur1 = lerpColor(wolken_kleur_dag1,wolken_kleur_nacht1,0 + wolken_transition)
  wolken_kleur2 = lerpColor(wolken_kleur_dag2,wolken_kleur_nacht2,0 + wolken_transition)
  noStroke()
  fill(sky_color)
  rect(0,0,800,600)


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