function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //stap 1 & 2
  let greeting = "Hello world!";
  let x = 100;
  text(x,20,20);
  text(greeting,20,60);
  //stap 3
  let a = 20;
  let b = 10;
  let optellen = a + b;
  let aftrekken = a - b;
  let vermenigvuldigen = a * b;
  let delen = a / b;
  //stap 4
  let y = 80;
  text(optellen,20,y);
  y += 20;
  text(aftrekken,20,y);
  y += 20;
  text(vermenigvuldigen,20,y);
  y += 20
  text(delen,20,y);
  




  noLoop()
}
