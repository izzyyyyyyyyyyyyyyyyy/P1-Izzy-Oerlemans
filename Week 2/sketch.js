let circle_movement = 50;
let circle_direction = 0.4


function setup() {
  createCanvas(800, 600);
}

function draw() {
  //background
  background(100,200,255);
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

  circle(circle_movement,350,112)

  if (frameCount += 60) {
  circle_direction = circle_direction * -1;
  }

  circle_movement += circle_direction;
  
}