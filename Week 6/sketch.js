let images = ["shop", "living-room", "arcade", "bedroom", "pouy", "snake-background", "apple", "asteroid", "bedroom-sleep", "pou-sleep", "pills", "energy-drink", "spaghetti"]
let loadedImages = []
let itemImages = []
let item = 0;
let buttons = []
let imageCount = 0;
let rainbow = 0;
let food = 200;
let energy = 200;
let happyness = 200;
let health = 200;
let money = 0;
let itemsOwned = []
let holdingItem = false
let heldItem = 0;
let petX = 320
let petY = 350
let petWidth = 300;
let sounds = ["balatro-main", "buy-sound", "click-sound", "chomp", "no-money", "coins-drop", "awh", "+point", "you-lose", "hit-the-jackpot"]
let loadedSounds = []
let game_state = 0;
let deathCause = ["it starved", "it got too obese and its heart stopped", "it got so tired it entered a coma and died", "it got too depressed and commited suicide", "it got deathly ill and died"]
let deathCauseID = 0;
let minigameActive = false
let snakeDirection = 4;
let snakeGameState = 0;
let snakeAppleCount = 0;
let snakeApplePosX = []
let snakeApplePosY = []
let snakeAsteroidCount = 1;
let snakeAsteroidsX = []
let snakeAsteroidsY = []
let snakeScore = 0;
let snakeX = 400;
let snakeY = 300;
let snakeSpeed = 0;
let snakeScoreMult = 1;
let darknessOpac = 0;
let vid;
let watching = false;
let moneySoundMilestone = 0;
let sleeping = false

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < 10; i++) {
    let button = createButton("<")
    button.position(10, 10)
    button.size(45, 715)
    button.style("font-size", "35px")
    buttons.push(button)
  }
  for (let i = 0; i < 10; i++) {
    snakeApplePosX.push(round(random(200, 620)))
    snakeApplePosY.push(round(random(110, 690)))
    snakeAsteroidsY.push(round(random(110, 690)))
    snakeAsteroidsX.push(150)
  }
  loadedSounds[0].setVolume(0.65)
  loadedSounds[2].setVolume(0.2)
  loadedSounds[4].setVolume(0.4)
  loadedSounds[6].setVolume(5)
  loadedSounds[8].setVolume(4)
  loadedSounds[7].setVolume(0.15)
  loadedSounds[9].setVolume(0.3)
  loadedSounds[5].setVolume(0.5)
  if (getItem("food")==null) {
    food = 200;
  }
  else {
    food = getItem("food");
  }
  if (getItem("happyness")==null) {
    happyness = 200;
  }
  else {
    happyness = getItem("happyness");
  }
  if (getItem("energy")==null) {
    energy = 200;
  }
  else {
    energy = getItem("energy");
  }
  if (getItem("health")==null) {
    health = 200;
  }
  else {
    health = getItem("health");
  }
  if (getItem("money")==null) {
    money = 0;
  }
  else {
    money = getItem("money");
  }
  if (getItem("petWidth")==null) {
    petWidth = 300;
  }
  else {
    petWidth = getItem("petWidth");
  }
  if (getItem("itemsOwned")==null) {
    itemsOwned = [];
  }
  else {
    itemsOwned = getItem("itemsOwned");
  }
  if (getItem("moneySoundMilestone")==null) {
   moneySoundMilestone = [];
  }
  else {
    moneySoundMilestone = getItem("moneySoundMilestone");
  }
}

function preload() {
  vid = createVideo("mark.mp4")
  vid.position(60, 250)
  vid.size(580, 400)
  for (let i = 0; i < 10; i++) {
    let img = loadImage(images[i] + ".png")
    console.log("loaded " + images[i])
    loadedImages.push(img)
  }
  for (let i = 10; i < 13; i++) {
    console.log(images[i])
    let img = loadImage(images[i] + ".png")
    itemImages.push(img)
  }
  for (let i = 0; i < 10; i++) {
    let sound = loadSound(sounds[i] + ".mp3")
    console.log("loaded " + sounds[i])
    loadedSounds.push(sound)
  }

function draw() {
  storeItem("food",food)
  storeItem("energy",energy)
  storeItem("happyness",happyness)
  storeItem("money",money)
  storeItem("health",health)
  storeItem("petWidth",petWidth)
  storeItem("itemsOwned",itemsOwned)
  storeItem("moneySoundMilestone",moneySoundMilestone)
  background(220);

  if (snakeScoreMult == 1) {
    if (money >= moneySoundMilestone + 30 && money > 0) {
      loadedSounds[5].play()
      moneySoundMilestone += 30
    }
  } else if (snakeScoreMult == 2) {
    if (money >= moneySoundMilestone + 60 && money > 0) {
      loadedSounds[5].play()
      moneySoundMilestone += 60
    }
  } else if (snakeScoreMult == 3) {
    if (money >= moneySoundMilestone + 120 && money > 0) {
      loadedSounds[5].play()
      moneySoundMilestone += 120
    }
  } else if (snakeScoreMult == 4) {
    if (money >= moneySoundMilestone + 210 && money > 0) {
      loadedSounds[5].play()
      moneySoundMilestone += 210
    }
  }
  if (snakeScoreMult >= 3 && snakeGameState == 0 && minigameActive == true) {
    if (!loadedSounds[9].isPlaying()) loadedSounds[9].play()
  } else if (loadedSounds[9].isPlaying()) {
    loadedSounds[9].stop()
    loadedSounds[0].pause()
  }

  if (food > 200) {
    food = 200
  }
  if (food < 0) {
    food = 0
  }
  if (food < 20) {
    if (frameCount % 100 === 0) {
      petWidth -= 5
      health -= 10
    }
  }
  if (petWidth < 150) {
    deathCauseID = 0
    game_state = 1
  }
  if (petWidth > 500) {
    deathCauseID = 1
    game_state = 1
  }

  if (energy > 200) {
    energy = 200
  }
  if (energy < 0) {
    deathCauseID = 2
    game_state = 1
  }

  if (happyness > 200) {
    happyness = 200
  }
  if (happyness < 0) {
    deathCauseID = 3
    game_state = 1
  }

  if (health > 200) {
    health = 200
  }
  if (health < 0) {
    deathCauseID = 4
    game_state = 1
  }

  if (game_state == 0) {
    imageMode(CORNER)
    if (!loadedSounds[0].isPlaying()) {
      loadedSounds[0].loop(); // restarts automatically when it ends
    }
    if (imageCount == 1) {
      buttons[7].show()
      if (watching == true) {
        vid.show()
      } else if (watching == false) {
        vid.hide()
      }
    } else {
      buttons[7].hide()
      vid.hide()
    }
    buttons[0].show()
    buttons[1].show()
    buttons[1].position(1240, 10)
    buttons[1].html(">")
    buttons[0].mousePressed(previousScene)
    buttons[1].mousePressed(nextScene)
    buttons[2].position(60, 660)
    buttons[2].size(100, 50)
    buttons[2].html("BUY")
    buttons[2].mousePressed(buyFoodItem)
    buttons[3].hide()
    buttons[5].hide()
    buttons[4].hide()
    buttons[4].position(305, 370)
    buttons[4].size(205, 100)
    buttons[4].html("Retry")
    buttons[4].mousePressed(retrySnake)
    buttons[5].html("Snake Xtreme")
    buttons[5].position(70, 50)
    buttons[5].size(100, 100)
    buttons[5].style("font-size", "20px")
    buttons[7].html("watch tv")
    buttons[7].size(100, 100)
    buttons[7].position(540, 620)
    buttons[8].position(200, 660)
    buttons[8].size(100, 50)
    buttons[8].html("BUY")
    buttons[8].mousePressed(buyMonsterEnergy)
    buttons[9].position(340, 660)
    buttons[9].size(100, 50)
    buttons[9].html("BUY")
    buttons[9].mousePressed(buyPills)

    if (watching == false) {
      buttons[7].mousePressed(watch)
    } else if (watching == true) {
      loadedSounds[0].stop()
      buttons[7].mousePressed(stopWatching)
      if (frameCount % 50 === 0) {
        happyness = happyness + 5
        health = health - 0.5
      }
    }

    if (!buttons[6].elt.matches(':active')) {
      sleeping = false
      if (frameCount % 90 === 0) {
        energy -= 2
      }
      darknessOpac = 0;
      if (frameCount % 30 === 0) {
        food -= 1
      }
      if (frameCount % 120 === 0) {
        happyness -= round(random(0, 3))
        health -= round(random(0, 2))
      }
    } else {
      sleeping = true
      if (frameCount % 60 === 0) {
        food -= 1
        happyness -= round(random(0, 3))
        health -= round(random(0, 2))
      }
    }

    rainbow += 1
    if (rainbow > 360) [
      rainbow = 0
    ]
    colorMode(HSB)
    if (imageCount > 3) {
      imageCount = 0
    } else if (imageCount < 0) {
      imageCount = 3
    }
    image(loadedImages[imageCount], 0, 0, 680, 720)
    textSize(70)
    textAlign(CENTER, CENTER)
    stroke(rainbow, 100, 100)
    strokeWeight(10)
    fill(255)
    text(images[imageCount], 320, 60)
    colorMode(RGB)
    strokeWeight(10)
    stroke(43, 24, 12)
    fill(77, 43, 21)
    rect(640, 5, 630, 710)
    imageMode(CENTER)
    if (sleeping == false) {
      image(loadedImages[4], petX, petY, petWidth, 250)
    } else {
      image(loadedImages[9], petX, petY, petWidth, 250)
    }
    imageMode(CORNER)
    fill(255)
    textSize(30)
    stroke(0)
    strokeWeight(5)
    text("Food:", 900, 50)
    text("Energy:", 900, 150)
    text("Happiness:", 900, 250)
    text("Health:", 900, 350)
    textSize(50)
    text("inventory " + itemsOwned.length + "/4", 930, 460)
    strokeWeight(5)
    fill(255)
    rect(697.5, 67.5, 405, 55)
    rect(697.5, 167.5, 405, 55)
    rect(697.5, 267.5, 405, 55)
    rect(697.5, 367.5, 405, 55)
    rect(650, 490, 550, 215)
    strokeWeight(0)
    fill("orange")
    rect(700, 70, food * 2, 50)
    fill("yellow")
    rect(700, 170, energy * 2, 50)
    fill("lime")
    rect(700, 270, happyness * 2, 50)
    fill("green")
    rect(700, 370, health * 2, 50)
    fill(0, 255, 0)
    stroke(255)
    strokeWeight(5)
    textSize(40)
    text(money + " $", 730, 30)
    if (imageCount == 0) {
      fill(190)
      stroke(0)
      strokeWeight(5)
      rect(0, 500, 640, 218)
      image(itemImages[2],40,500,120,150)
      fill(0,255,0)
      stroke(255)
      textSize(30)
      text("120$",130,620)
      image(itemImages[1],180,500,120,140)
      text("150$",270,620)
      image(itemImages[0],320,510,120,140)
      text("300$",410,620)
      buttons[2].show()
      buttons[8].show()
      buttons[9].show()
    } else {
      buttons[2].hide()
      buttons[8].hide()
      buttons[9].hide()
    }

    for (let i = 0; i < itemsOwned.length; i++) {
      image(itemImages[itemsOwned[i]], 665 + i * 130, 500, 130, 130)
      if (mouseIsPressed === true) {
        if (mouseX >= 665 + i * 130 && mouseX <= 795 + i * 130 && mouseY >= 480 && mouseY <= 610) {
          heldItem = itemsOwned[i]
          item = i
          pickup()
        }
      }
    }
    if (holdingItem == true) {
      imageMode(CENTER)
      image(itemImages[heldItem], mouseX, mouseY, 160, 160)
    } else {

    }
  }

  if (game_state == 1) {
    background(0)
    loadedSounds[0].stop()
    buttons[0].hide()
    buttons[1].hide()
    buttons[2].hide()
    buttons[4].hide()
    buttons[5].hide()
    buttons[6].hide()
    buttons[7].hide()
    textSize(50)
    fill("red")
    textAlign(CENTER, CENTER)
    text("your pet died", 640, 200)
    text(deathCause[deathCauseID], 640, 300)
    buttons[3].show()
    buttons[3].html("Retry")
    buttons[3].position(440, 500)
    buttons[3].size(400, 100)
    buttons[3].mousePressed(restart)
    buttons[8].hide()
    buttons[9].hide()
  }
  if (imageCount == 3) {
    buttons[6].show()
    buttons[6].html("sleep")
    buttons[6].position(440, 620)
    buttons[6].size(200, 100)
    fill(0, darknessOpac)
    strokeWeight(0)
    rect(0, 0, 640, 1000)
    if (buttons[6].elt.matches(':active')) {
      if (frameCount % 5 === 0) {
        energy++
      }
      darknessOpac = 120
    }
  } else {
    buttons[6].hide()
  }
  if (imageCount == 2) {
    buttons[5].show()
    buttons[5].mousePressed(activateMinigameSnake)
    if (minigameActive == true) {
      if (frameCount % 20 === 0) {
        happyness++
        energy--
      }
      fill(255)
      stroke(0)
      rect(180, 100, 450, 600)
      stroke(255)
      fill(0)
      text("Snake Xtreme", 400, 130)
      if (snakeGameState == 0) {
        if (frameCount % 270 == 0) {
          if (snakeAsteroidCount < 30) {
            snakeAsteroidCount += 1
          }
        }
        if (frameCount % 80 === 0) {
          if (snakeAppleCount < 11) {
            snakeAppleCount += 1
          }
        }
        if (snakeX < 165 || snakeX + 30 > 640 || snakeY < 85 || snakeY + 30 > 715) {
          snakeGameState = 1
          loadedSounds[6].play()
          loadedSounds[8].play()
          loadedSounds[9].stop()
          snakeScoreMult = 1
        }
        if (snakeDirection == 0) {
          snakeX -= 3 + snakeSpeed
          snakeY += 0
        }
        if (snakeDirection == 1) {
          snakeX += 0
          snakeY += 3 + snakeSpeed
        }
        if (snakeDirection == 2) {
          snakeX += 0
          snakeY -= 3 + snakeSpeed
        }
        if (snakeDirection == 3) {
          snakeX += 3 + snakeSpeed
          snakeY += 0
        }
        if (snakeDirection == 4) {
          snakeX += 0
          snakeY += 0
        }
        image(loadedImages[5], 180, 100, 450, 600)
        fill(0, 255, 0)
        strokeWeight(0)
        square(snakeX, snakeY, 30)
        for (let i = 0; i < snakeAsteroidCount; i++) {
          strokeWeight(0)
          imageMode(CENTER)
          image(loadedImages[7], snakeAsteroidsX[i]++, snakeAsteroidsY[i], 60, 60)
          if (snakeAsteroidsX[i] > 650) {
            snakeAsteroidsX[i] = 150
            snakeAsteroidsY[i] = round(random(110, 690))
          }
          if (snakeX < snakeAsteroidsX[i] + 15 && snakeX + 30 > snakeAsteroidsX[i] - 15 && snakeY < snakeAsteroidsY[i] + 15 && snakeY + 30 > snakeAsteroidsY[i] - 15) {
            snakeGameState = 1
            loadedSounds[6].play()
            loadedSounds[8].play()
            loadedSounds[9].stop()
            snakeScoreMult = 1
          }
        }

        for (let i = 0; i < snakeAppleCount; i++) {
          fill("red")
          stroke(0)
          imageMode(CENTER)
          image(loadedImages[6], snakeApplePosX[i], snakeApplePosY[i], 40, 40)
          if (snakeX < snakeApplePosX[i] + 20 && snakeX + 30 > snakeApplePosX[i] - 20 && snakeY < snakeApplePosY[i] + 20 && snakeY + 30 > snakeApplePosY[i] - 20) {
            snakeApplePosX[i] = (round(random(200, 620)))
            snakeApplePosY[i] = (round(random(110, 690)))
            snakeSpeed += 0.1
            snakeScore = snakeScore + 1 * snakeScoreMult
            money = money + round(random(1, 10)) * snakeScoreMult
            loadedSounds[7].play()
          }
        }
        fill(0)
        textSize(40)
        strokeWeight(5)
        stroke(255)
        text("score: " + snakeScore, 270, 140)
        colorMode(HSB)
        fill(rainbow, 100, 100)
        text("MULTIPLIER: " + snakeScoreMult + "x", 350, 670)
        colorMode(RGB)
        if (snakeScore >= 15 && snakeScore < 30) {
          snakeScoreMult = 2
        } else if (snakeScore >= 30 && snakeScore < 100) {
          snakeScoreMult = 3
        } else if (snakeScore >= 100) {
          snakeScoreMult = 4
        }

      } else if (snakeGameState == 1) {
        buttons[4].show()
        buttons[7].hide()
        fill(0)
        strokeWeight(4)
        stroke(255)
        rect(200, 200, 410, 400)
        fill("red")
        textSize(80)
        text("game over", 405, 300)
        fill(0)
        textSize(40)
        strokeWeight(5)
        stroke(255)
        text("score: " + snakeScore, 300, 550)
      }
    }
  }
}

function activateMinigameSnake() {
  if (minigameActive == false) {
    minigameActive = true
  } else if (minigameActive == true) {
    minigameActive = false
  }
  loadedSounds[2].play()
}

function nextScene() {
  imageCount += 1
  loadedSounds[2].play()
}

function previousScene() {
  imageCount -= 1
  loadedSounds[2].play()
}

function buyFoodItem() {
  if (money >= 120 && itemsOwned.length < 4) {
    itemsOwned.push(2)
    money -= 20
    loadedSounds[1].play()
  } else {
    loadedSounds[4].play()
  }
}

function buyMonsterEnergy() {
  if (money >= 150 && itemsOwned.length < 4) {
    itemsOwned.push(1)
    money -= 30
    loadedSounds[1].play()
  } else {
    loadedSounds[4].play()
  }
}

function buyPills() {
  if (money >= 300 && itemsOwned.length < 4) {
    itemsOwned.push(0)
    money -= 100
    loadedSounds[1].play()
  } else {
    loadedSounds[4].play()
  }
}

function backToInvent() {
  holdingItem = false
}

function feed() {
  health -= 1
  food += 40
  itemsOwned.splice(item, 1)
  holdingItem = false
  if (food >= 185) {
    petWidth += 15
  }
  loadedSounds[3].play()
}

function drink() {
  health -= 15
  food -= 5
  energy += 40
  itemsOwned.splice(item, 1)
  holdingItem = false
}

function meds() {
  food -= 5
  energy -= round(random(5, 20))
  happyness -= round(random(5, 20))
  health += 40
  itemsOwned.splice(item, 1)
  holdingItem = false
}

function retrySnake() {
  for (let i = 0; i < snakeAsteroidCount; i++) {
    snakeAsteroidsX[i] = 150
    snakeAsteroidsY[i] = round(random(110, 690))
  }
  snakeGameState = 0;
  snakeX = 400;
  snakeY = 300;
  snakeAppleCount = 0;
  snakeScore = 0;
  snakeSpeed = 0;
  snakeAsteroidCount = 1;
  snakeDirection = 4;
  snakeScoreMult = 1;
  loadedSounds[2].play()
}
function watch() {
  vid.play()
  watching = true
  loadedSounds[2].play()
}

function stopWatching() {
  watching = false
  vid.stop()
  loadedSounds[2].play()
}
function restart() {
  itemsOwned = 0
  petWidth = 300
  food = 200
  energy = 200
  happyness = 200
  health = 200
  itemsOwned = 0
  game_state = 0
  snakeSpeed = 0
  itemsOwned = []
  money = 0
  snakeScoreMult = 1
  snakeScore = 0
}

function pickup() {
  holdingItem = true
}

function mouseClicked() {
  userStartAudio()
  if (mouseButton === LEFT) {
    if (holdingItem == true) {
      if (mouseX >= petX - petWidth / 2 && mouseX <= petX + petWidth / 2 && mouseY >= petY - 125 && mouseY <= petY + 125) {
        if (heldItem == 2) {
          feed()
        }
        if (heldItem == 1) {
          drink()
        }
        if (heldItem == 0) {
          meds()
        }
      }
    }
  }
}

function keyPressed() {
  if (minigameActive == true) {

    if (keyCode === 37 || keyCode === 65) {
      snakeDirection = 0
    }
    if (keyCode === 40 || keyCode === 83) {
      snakeDirection = 1
    }
    if (keyCode === 38 || keyCode === 87) {
      snakeDirection = 2
    }
    if (keyCode === 39 || keyCode === 68) {
      snakeDirection = 3
    }  
  }
}
}
