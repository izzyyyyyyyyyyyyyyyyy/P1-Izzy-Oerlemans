let compensate = 0;
let optellen = [3,55,93,20,102,6]
let optellen2 = [14,22,80,5]
let result = 0
let woord = ["Ove", "rhe", "idsfinancie", "ringstekort"]
let alfabetisch = ["red", "green", "blue", "purple", "yellow"]
let random_kleuren;
let random_getallen = [round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100)),round(random(0,100))]
function setup() {
  createCanvas(400, 400);
  //definieerd de random kleuren
  random_kleuren = [color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255))]
}

function draw() {
  let colors = ["red", "green", "blue", "purple", "yellow"]
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
  background(220);
  textSize(12)
  fill(0)
  stroke(255)
  text("1.",20,15)
  text("2.",20,100)
  text("3.",20,190)
  text("4.",20,250)
  text("5.",120,15)
  text("6.",120,100)
  text("7.",120,190)
  text("8.",120,280)
  text("9.",240,15)

  //1. kleuren in een array
  for (i = 0; i < 5; i++) {
    stroke(colors[0 + i])
    fill(colors[0 + i])
    text(colors[0 + i],40,15 + i * 12)
  }


  //2. pas de array aan met shift en push
  colors.shift();
  colors.push("red");
  for (o = 0; o < 5; o++) {
    stroke(colors[0 + o]);
    fill(colors[0 + o]);
    text(colors[0 + o],40,100 + o * 12);
  }
  //3. twee kleuren weg halen
  colors.splice(1,2)
  for (u = 0; u < 3; u++) {
    stroke(colors[0 + u])
    fill(colors[0 + u]);
    text(colors[0 + u],40,190 + u * 12);
  }
  //4. getallen filteren
  fill(0)
  stroke(255)
  for (p = 0; p < 10; p++) {
    if (numbers[p] < 300) {
      text(numbers[p], 40,250 + p * 12 - compensate)
    }
    if (p == 0) {
      compensate = 12
    }
    if (p == 3) {
      compensate = 24
    }
  }
  //5. meerdere arrays optellen bij elkaar
  fill(0)
  stroke(255)
  textSize(75)
  for (t = 0; t < 10; t++) {
    result = optellen [0] + optellen[1] + optellen [2] + optellen[3] + optellen [4] + optellen[5] + optellen2[0] + optellen2[1] + optellen2[2] + optellen2[3]
    text(result,120,80)
  }

  //6. letters tellen
  for (r = 0; r < 4; r++) {
    text(woord.length + "x",140,170)
  }
  //7. alfabetische volgorde
  textSize(12)
  for(q = 0; q < 5; q++) {
    alfabetisch.sort()
    stroke(alfabetisch[q])
    fill(alfabetisch[q])
    text(alfabetisch[q],140,190 + 12 * q)
  }
  //8. random kleuren op een rij
  stroke(0)
  for (c = 0; c < 5; c++) {
    fill(random_kleuren[c])
    square(c * 50 + 120,290,50)
  }
  //9. random getallen en hun gemiddelde
  for (g = 0; g < 12; g++) {
    text(random_getallen[g],240,25)s
  }
}
