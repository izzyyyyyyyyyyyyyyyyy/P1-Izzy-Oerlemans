let coors = [
  0b111110100,
  0b100101100,
  0b10010110,
  0b1010001010,
  0b111000010,
  0b101011110,
  0b11001000,
  0b1100100000,
  0b101000101,
  0b1000001101,
  0b1111000,
  0b1001011000,
  0b110010
];

let CORRECTOR = 1000;

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(250);
  
  // Style for the shapes/points
  fill("white");
  stroke(0);
  strokeWeight(2);
  
  // Loop through the flat array 2 elements at a time (X and Y pairs)
  // We use coors.length - 1 to ensure we have a valid pair to read
  for (let i = 0; i < coors.length - 1; i += 2) {
    // 1. Get the raw normalized values (0 to 1000)
    let rawX = coors[i];
    let rawY = coors[i + 1];
    
    // 2. Modulate by CORRECTOR to get a 0.0 - 1.0 ratio
    let ratioX = rawX / CORRECTOR;
    let ratioY = rawY / CORRECTOR;
    
    // 3. Scale up to the actual canvas width (1000) and height (700)
    let posX = ratioX * width;
    let posY = ratioY * height;
    
    // 4. Draw your coordinates (e.g., as circles)
    ellipse(posX, posY, 20, 20);
  }
}
