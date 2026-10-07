//variabelen en arrays
let knoppen = [];
let dierKnoppen = [];
let bgColor = "white";
let bestanden = [];
bestanden[0] = ["elephant", "giraffe", "hippo", "monkey", "panda"];
bestanden[1] = ["parrot", "penguin", "pig", "rabbit", "snake"];
let kleuren = ["cyan", "blue", "purple", "yellow", "orange", "red"];
let kleurFuncties = [setCyan, setBlue, setPurple, setYellow, setOrange, setRed];
let imageFuncties = [setElephant, setGiraffe, setHippo, setMonkey, setPanda, setParrot, setPenguin, setPig, setRabbit, setSnake];
let images = [];
let currentImage = 0;

function preload() {
  //laad de images
  for (let i = 0; i < 5; i++) {
    let img = loadImage(bestanden[0][i] + ".png")
    images.push(img)
  }
  for (let i = 0; i < 5; i++) {
    let img = loadImage(bestanden[1][i] + ".png")
    images.push(img)
  }
}

function setup() {
  createCanvas(800, 400);
  //laad de kleur knoppen
  for (let i = 0; i < 6; i++) {
    let button = createButton(kleuren[i])
    button.position(i * 120 + 10, 50)
    button.style('background-color', kleuren[i])
    button.style('font-size', '20px')
    button.mousePressed(kleurFuncties[i])
    knoppen.push(button)
  }
  //laad de dier knoppen
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      let button = createButton(bestanden[j][i])
      button.position(i * 120 + 10, j * 50 + 100)
      button.style("background-color", "white")
      button.style("font-size", "20px")
      button.mousePressed(imageFuncties[j * 5 + i])
      dierKnoppen.push(button)
    }
  }
}

function draw() {
  //achtergrondkleur wordt veranderd
  background(bgColor);
  //image word veranderd
  image(images[currentImage], 10, 10)
  //checkt wat de achtergrond kleur is om de juiste knop te laten verdwijnen
  if (bgColor !== "cyan") {
    knoppen[0].show()
  } else {
    knoppen[0].hide()
  }

  if (bgColor !== "blue") {
    knoppen[1].show()
  } else {
    knoppen[1].hide()
  }

  if (bgColor !== "purple") {
    knoppen[2].show()
  } else {
    knoppen[2].hide()
  }

  if (bgColor !== "yellow") {
    knoppen[3].show()
  } else {
    knoppen[3].hide()
  }

  if (bgColor !== "orange") {
    knoppen[4].show()
  } else {
    knoppen[4].hide()
  }

  if (bgColor !== "red") {
    knoppen[5].show()
  } else {
    knoppen[5].hide()
  }

  //imageknoppen hiden en showen
  if (currentImage !== 0) {
    dierKnoppen[0].show()
  } else {
    dierKnoppen[0].hide()
  }

  if (currentImage !== 1) {
    dierKnoppen[2].show()
  } else {
    dierKnoppen[2].hide()
  }

  if (currentImage !== 2) {
    dierKnoppen[4].show()
  } else {
    dierKnoppen[4].hide()
  }

  if (currentImage !== 3) {
    dierKnoppen[6].show()
  } else {
    dierKnoppen[6].hide()
  }

  if (currentImage !== 4) {
    dierKnoppen[8].show()
  } else {
    dierKnoppen[8].hide()
  }

  if (currentImage !== 5) {
    dierKnoppen[1].show()
  } else {
    dierKnoppen[1].hide()
  }

  if (currentImage !== 6) {
    dierKnoppen[3].show()
  } else {
    dierKnoppen[3].hide()
  }

  if (currentImage !== 7) {
    dierKnoppen[5].show()
  } else {
    dierKnoppen[5].hide()
  }

  if (currentImage !== 8) {
    dierKnoppen[7].show()
  } else {
    dierKnoppen[7].hide()
  }

  if (currentImage !== 9) {
    dierKnoppen[9].show()
  } else {
    dierKnoppen[9].hide()
  }

}
//functies voor de achtergrond van kleur veranderen
function setCyan() {
  bgColor = "cyan";
}

function setBlue() {
  bgColor = "blue";
}

function setPurple() {
  bgColor = "purple";
}

function setYellow() {
  bgColor = "yellow";
}

function setOrange() {
  bgColor = "orange";
}

function setRed() {
  bgColor = "red";
}

//functies om de image te setten
function setElephant() {
  currentImage = 0
}

function setGiraffe() {
  currentImage = 1
}

function setHippo() {
  currentImage = 2
}

function setMonkey() {
  currentImage = 3
}

function setPanda() {
  currentImage = 4
}

function setParrot() {
  currentImage = 5
}

function setPenguin() {
  currentImage = 6
}

function setPig() {
  currentImage = 7
}

function setRabbit() {
  currentImage = 8
}

function setSnake() {
  currentImage = 9
}