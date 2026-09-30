function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let pixels = []
  pixels[0] = [color(255),color(255),color(255),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255),color(255),color(255),color(255)]
  pixels[1] = [color(255),color(255),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255)]
  pixels[2] = [color(255),color(255),color(150,65,57),color(150,65,57),color(150,65,57),color(255,200,159),color(255,200,159),color(255,200,159),color(0),color(255),color(255),color(255),color(255)]
  pixels[3] = [color(255),color(150,65,57),color(255,200,159),color(150,65,57),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(0),color(255,200,159),color(255,200,159),color(255,200,159),color(255)]
  pixels[4] = [color(255),color(150,65,57),color(255,200,159),color(150,65,57),color(150,65,57),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(0),color(255,200,159),color(255,200,159),color(255,200,159)]
  pixels[5] = [color(255),color(150,65,57),color(150,65,57),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(0),color(0),color(0),color(0),color(255)]
  pixels[6] = [color(255),color(255),color(255),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255,200,159),color(255),color(255)]
  pixels[7] = [color(255),color(255),color(255,0,0),color(255,0,0),color(0,0,255),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255),color(255),color(255),color(255)]
  pixels[8] = [color(255),color(255,0,0),color(255,0,0),color(255,0,0),color(0,0,255),color(255,0,0),color(255,0,0),color(0,0,255),color(255,0,0),color(255,0,0),color(255,0,0),color(255),color(255)]
  pixels[9] = [color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(255,0,0),color(255,0,0),color(255,0,0),color(255,0,0),color(255)]
  pixels[10] = [color(255,200,159),color(255,200,159),color(255,0,0),color(0,0,255),color(255,255,0),color(0,0,255),color(0,0,255),color(255,255,0),color(0,0,255),color(255,0,0),color(255,200,159),color(255,200,159),color(255)]
  pixels[11] = [color(255,200,159),color(255,200,159),color(255,200,159),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(255,200,159),color(255,200,159),color(255,200,159),color(255)]
  pixels[12] = [color(255,200,159),color(255,200,159),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(0,0,255),color(255,200,159),color(255,200,159),color(255)]
  pixels[13] = [color(255),color(255),color(0,0,255),color(0,0,255),color(0,0,255),color(255),color(255),color(0,0,255),color(0,0,255),color(0,0,255),color(255),color(255),color(255)]
  pixels[14] = [color(255),color(150,65,57),color(150,65,57),color(150,65,57),color(255),color(255),color(255),color(255),color(150,65,57),color(150,65,57),color(150,65,57),color(255),color(255)]
  pixels[15] = [color(150,65,57),color(150,65,57),color(150,65,57),color(150,65,57),color(255),color(255),color(255),color(255),color(150,65,57),color(150,65,57),color(150,65,57),color(150,65,57),color(255)]
  strokeWeight(0)
  for (i = 0; i < 13; i++) {
    for (j = 0; j < 16; j++) {
      fill(pixels[j][i]);
      square(i * 10 + 10, j * 10 + 10,10);
    }
  }

}
