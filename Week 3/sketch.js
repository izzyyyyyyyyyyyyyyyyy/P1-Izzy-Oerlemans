let vakje1;
let vakje1_state = 1;
let vakje2;
let vakje2_state = 1;
let vakje3;
let vakje3_state = 1;
let vakje4;
let vakje4_state = 1;
let vakje5;
let vakje5_state = 1;
let vakje6;
let vakje6_state = 1;
let vakje7;
let vakje7_state = 1;
let vakje8;
let vakje8_state = 1;
let vakje9;
let vakje9_state = 1;
let background_color;
let turn = 1;
let play_button_opac = 0;
let endscreen_text;
let game_start = 3;
let offset = 0;
let from;
let to;
let background_transition = 0;
let text_rainbow;
let text_trans;
let p1_color;
let p2_color;

function setup() {
  createCanvas(1020, 840);
  vakje1 = color(230);
  vakje2 = color(230);
  vakje3 = color(230);
  vakje4 = color(230);
  vakje5 = color(230);
  vakje6 = color(230);
  vakje7 = color(230);
  vakje8 = color(230);
  vakje9 = color(230);
  text_trans = 0;
}

function draw() {

  //bg color transition setup
  if (game_start == 3) {  
    from = color(255,0,0)
    to = color(0,0,255)
    background_color = lerpColor(from,to,0 + background_transition)
    colorMode(RGB)
    background(background_color);
  }
  //rainbow text functionality
  colorMode(HSB)
  text_rainbow = color(text_trans,100,100)
  text_trans += 1
  stroke(255)
  strokeWeight(2)
  textSize(75)
  fill(text_rainbow)
  text("Drie op een rij!",265,75)

  if (text_trans > 360) {
    text_trans = 0
  }  
  colorMode(RGB)
  //board visuals
  if (game_start == 2) {
    fill(0)
    strokeWeight(0)
    square(200,100,620,40)
    fill(vakje1)
    square(220,120,180)
    fill(vakje2)
    square(420,120,180)
    fill(vakje3)
    square(620,120,180)
    fill(vakje4)
    square(220,320,180)
    fill(vakje5)
    square(420,320,180)
    fill(vakje6)
    square(620,320,180)
    fill(vakje7)
    square(220,520,180)
    fill(vakje8)
    square(420,520,180)
    fill(vakje9)
    square(620,520,180)
  }

  //main menu
  colorMode(RGB)
  if (game_start == 3) {
    textSize(50)
    fill(255)
    stroke(0)
    strokeWeight(3)
    text("Player 1 color",10,150)
    text("Player 2 color",700,150)
    fill(255,0,0)
    square(10,200,100)
    fill("pink")
    square(120,200,100)
    fill("purple")
    square(10,310,100)
    fill("orange")
    square(120,310,100)
    fill(0,255,0)
    square(10,420,100)
    fill("dark green")
    square(120,420,100)
    fill(0,0,255)
    square(910,200,100)
    fill(0,255,255)
    square(800,200,100)
    fill(255,255,0)
    square(910,310,100)
    fill(197, 110, 255)
    square(800,310,100)
    fill(255, 0, 85)
    square(910,420,100)
    fill(0, 255, 102)
    square(800,420,100)
    fill(200)
    rect(310,600,400,100)
    fill(0)
    text("START",430,670)
  }

  //als alle vakje gevult zijn en er geen drie op een rij gedetecteerd word is het gelijk spel
  if (vakje1_state !== 1 && vakje2_state !== 1 && vakje3_state !== 1 && vakje4_state !== 1 && vakje5_state !== 1 && vakje6_state !== 1 && vakje7_state !== 1 && vakje8_state !== 1 && vakje9_state !== 1 && vakje1_state !== 2 && vakje2_state !== 2 && vakje3_state !== 2 && vakje4_state !== 2 && vakje5_state !== 2 && vakje6_state !== 2 && vakje7_state !== 2 && vakje8_state !== 2 && vakje9_state !== 2 && game_start == 2) {
    play_button_opac = 255
    endscreen_text = "Nobody "
    game_start = 1;
    offset = 65
  }

  //endscreen viuals
  fill(200,play_button_opac) //-- "playbutton opac" controleerd wanneer de knoppen zichtbaar zijn
  strokeWeight(4)
  stroke(0,play_button_opac)
  rect(360,500,300,150)
  fill(0,play_button_opac)
  textSize(50)
  strokeWeight(0)
  text("play again",400,590)
  textSize(100)
  fill(255,play_button_opac)
  strokeWeight(10)
  text(endscreen_text + "wins!",300 - offset,400)

  //turns cyclen tussen 1 en 2
  if (turn > 2) {
    turn = 1
  }

  //background transition code
  if (background_transition > 1) {
    background_transition = 1
  }

  if (background_transition < 0) {
    background_transition = 0
  }

  if (turn == 1) {
    background_transition -= 0.1
  } else {
    background_transition += 0.1
  }

  //vakje 1
  //code om het vakje grijs te maken wanneer de muis er over heen zit
  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 120 && mouseY <= 300) {
    if (vakje1_state == 1) {
      vakje1_state = 2
    }
  } else if (vakje1_state !== 3 && vakje1_state !== 4) {
    vakje1_state = 1
  }

  //states van het vakje (kleur)
  if (vakje1_state == 1) {
    vakje1 = color(255)
  }

  if (vakje1_state == 2) {
    vakje1 = color(230)
  }

  if (vakje1_state == 3) {
    vakje1 = color(235,0,0)
  }

  if (vakje1_state == 4) {
    vakje1 = color(0,0,235)
  }

  //vakje 2 (alle vakjes werken precies hetzelfde als vakje 1)

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 120 && mouseY <= 300) {
    if (vakje2_state == 1) {
      vakje2_state = 2
    }
  } else if (vakje2_state !== 3 && vakje2_state !== 4) {
    vakje2_state = 1
  }

  if (vakje2_state == 1) {
    vakje2 = color(255)
  }

  if (vakje2_state == 2) {
    vakje2 = color(230)
  }

  if (vakje2_state == 3) {
    vakje2 = color(235,0,0)
  }

  if (vakje2_state == 4) {
    vakje2 = color(0,0,235)
  }

  //vakje 3

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 120 && mouseY <= 300) {
    if (vakje3_state == 1) {
      vakje3_state = 2
    }
  } else if (vakje3_state !== 3 && vakje3_state !== 4) {
    vakje3_state = 1
  }

  if (vakje3_state == 1) {
    vakje3 = color(255)
  }

  if (vakje3_state == 2) {
    vakje3 = color(230)
  }

  if (vakje3_state == 3) {
    vakje3 = color(235,0,0)
  }

  if (vakje3_state == 4) {
    vakje3 = color(0,0,235)
  }

  //vakje 4

  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 320 && mouseY <= 500) {
    if (vakje4_state == 1) {
      vakje4_state = 2
    }
  } else if (vakje4_state !== 3 && vakje4_state !== 4) {
    vakje4_state = 1
  }

  if (vakje4_state == 1) {
    vakje4 = color(255)
  }

  if (vakje4_state == 2) {
    vakje4 = color(230)
  }

  if (vakje4_state == 3) {
    vakje4 = color(235,0,0)
  }

  if (vakje4_state == 4) {
    vakje4 = color(0,0,235)
  }

  //vakje 5

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 320 && mouseY <= 500) {
    if (vakje5_state == 1) {
      vakje5_state = 2
    }
  } else if (vakje5_state !== 3 && vakje5_state !== 4) {
    vakje5_state = 1
  }

  if (vakje5_state == 1) {
    vakje5 = color(255)
  }

  if (vakje5_state == 2) {
    vakje5 = color(230)
  }

  if (vakje5_state == 3) {
    vakje5 = color(235,0,0)
  }

  if (vakje5_state == 4) {
    vakje5 = color(0,0,235)
  }

  //vakje 6

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 320 && mouseY <= 500) {
    if (vakje6_state == 1) {
      vakje6_state = 2
    }
  } else if (vakje6_state !== 3 && vakje6_state !== 4) {
    vakje6_state = 1
  }

  if (vakje6_state == 1) {
    vakje6 = color(255)
  }

  if (vakje6_state == 2) {
    vakje6 = color(230)
  }

  if (vakje6_state == 3) {
    vakje6 = color(235,0,0)
  }

  if (vakje6_state == 4) {
    vakje6 = color(0,0,235)
  }

  //vakje 7

  if (mouseX >= 220 && mouseX <= 400 && mouseY >= 520 && mouseY <= 700) {
    if (vakje7_state == 1) {
      vakje7_state = 2
    }
  } else if (vakje7_state !== 3 && vakje7_state !== 4) {
    vakje7_state = 1
  }

  if (vakje7_state == 1) {
    vakje7 = color(255)
  }

  if (vakje7_state == 2) {
    vakje7 = color(230)
  }

  if (vakje7_state == 3) {
    vakje7 = color(235,0,0)
  }

  if (vakje7_state == 4) {
    vakje7 = color(0,0,235)
  }

  //vakje 8

  if (mouseX >= 420 && mouseX <= 600 && mouseY >= 520 && mouseY <= 700) {
    if (vakje8_state == 1) {
      vakje8_state = 2
    }
  } else if (vakje8_state !== 3 && vakje8_state !== 4) {
    vakje8_state = 1
  }

  if (vakje8_state == 1) {
    vakje8 = color(255)
  }

  if (vakje8_state == 2) {
    vakje8 = color(230)
  }

  if (vakje8_state == 3) {
    vakje8 = color(235,0,0)
  }

  if (vakje8_state == 4) {
    vakje8 = color(0,0,235)
  }

  //vakje 9

  if (mouseX >= 620 && mouseX <= 800 && mouseY >= 520 && mouseY <= 700) {
    if (vakje9_state == 1) {
      vakje9_state = 2
    }
  } else if (vakje9_state !== 3 && vakje9_state !== 4) {
    vakje9_state = 1
  }

  if (vakje9_state == 1) {
    vakje9 = color(255)
  }

  if (vakje9_state == 2) {
    vakje9 = color(230)
  }

  if (vakje9_state == 3) {
    vakje9 = color(235,0,0)
  }

  if (vakje9_state == 4) {
    vakje9 = color(0,0,235)
  }

  //endscreen
  strokeWeight(25)
  stroke(255)
  //(hij checkt elke speciefieke combinatie van vakjes)
  if (vakje1_state == 3 && vakje2_state == 3 && vakje3_state == 3) {
    play_button_opac = 255
    line(310,210,710,210)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje4_state == 3 && vakje5_state == 3 && vakje6_state == 3) {
    play_button_opac = 255
    line(310,410,710,410)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje7_state == 3 && vakje8_state == 3 && vakje9_state == 3) {
    play_button_opac = 255
    line(310,610,710,610)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje1_state == 3 && vakje4_state == 3 && vakje7_state == 3) {
    play_button_opac = 255
    line(310,210,310,610)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje1_state == 3 && vakje5_state == 3 && vakje9_state == 3) {
    play_button_opac = 255
    line(310,210,710,610)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje3_state == 3 && vakje5_state == 3 && vakje7_state == 3) {
    play_button_opac = 255
    line(710,210,310,610)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje2_state == 3 && vakje5_state == 3 && vakje8_state == 3) {
    play_button_opac = 255
    line(510,210,510,610)
    endscreen_text =  "Red "
    game_start = 1;
  }

  if (vakje3_state == 3 && vakje6_state == 3 && vakje9_state == 3) {
    play_button_opac = 255
    line(710,210,710,610)
    endscreen_text =  "Red "
    game_start = 1;
  }


  if (vakje1_state == 4 && vakje2_state == 4 && vakje3_state == 4) {
    play_button_opac = 255
    line(310,210,710,210)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje4_state == 4 && vakje5_state == 4 && vakje6_state == 4) {
    play_button_opac = 255
    line(310,410,710,410)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje7_state == 4 && vakje8_state == 4 && vakje9_state == 4) {
    play_button_opac = 255
    line(310,610,710,610)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje1_state == 4 && vakje4_state == 4 && vakje7_state == 4) {
    play_button_opac = 255
    line(310,210,310,610)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje1_state == 4 && vakje5_state == 4 && vakje9_state == 4) {
    play_button_opac = 255
    line(310,210,710,610)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje3_state == 4 && vakje5_state == 4 && vakje7_state == 4) {
    play_button_opac = 255
    line(710,210,310,610)
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje2_state == 4 && vakje5_state == 4 && vakje8_state == 4) {
    play_button_opac = 255
    endscreen_text =  "Blue "
    game_start = 1;
  }

  if (vakje3_state == 4 && vakje6_state == 4 && vakje9_state == 4) {
    play_button_opac = 255
    line(510,210,510,610)
    endscreen_text =  "Blue "
    game_start = 1;
  }
}

//muis input voor de verandering van de kleur
function mouseClicked() {

  if (game_start == 2) { //<-- zorgt ervoor dat de game niet meer werkt als de endscreen er is
    if (mouseButton === LEFT) {

      //vakje 1
      if (mouseX >= 220 && mouseX <= 400 && mouseY >= 120 && mouseY <= 300) {
        if (turn == 1) {
          if (vakje1_state !== 4 && vakje1_state !== 3) {
            vakje1_state = 3
            turn += 1
          }
        } else {
          if (vakje1_state !== 4 && vakje1_state !== 3) {
            vakje1_state = 4
            turn += 1
          }
        }
      }

      //vakje 2
      if (mouseX >= 420 && mouseX <= 600 && mouseY >= 120 && mouseY <= 300) {
        if (turn == 1) {
          if (vakje2_state !== 4 && vakje2_state !== 3) {
            vakje2_state = 3
            turn += 1
          }
        } else {
          if (vakje2_state !== 4 && vakje2_state !== 3) {
            vakje2_state = 4
            turn += 1
          }
        }
      }

      //vakje 3
      if (mouseX >= 620 && mouseX <= 800 && mouseY >= 120 && mouseY <= 300) {
        if (turn == 1) {
          if (vakje3_state !== 4 && vakje3_state !== 3) {
            vakje3_state = 3
            turn += 1
          }
        } else {
          if (vakje3_state !== 4 && vakje3_state !== 3) {
            vakje3_state = 4
            turn += 1
          }
        }
      }

      //vakje 4
      if (mouseX >= 220 && mouseX <= 400 && mouseY >= 320 && mouseY <= 500) {
        if (turn == 1) {
          if (vakje4_state !== 4 && vakje4_state !== 3) {
            vakje4_state = 3
            turn += 1
          }
        } else {
          if (vakje4_state !== 4 && vakje4_state !== 3) {
            vakje4_state = 4
            turn += 1
          }
        }
      }

      //vakje 5
      if (mouseX >= 420 && mouseX <= 600 && mouseY >= 320 && mouseY <= 500) {
        if (turn == 1) {
          if (vakje5_state !== 4 && vakje5_state !== 3) {
            vakje5_state = 3
            turn += 1
          }
        } else {
          if (vakje5_state !== 4 && vakje5_state !== 3) {
            vakje5_state = 4
            turn += 1
          }
        }
      }

      //vakje 6
      if (mouseX >= 620 && mouseX <= 800 && mouseY >= 320 && mouseY <= 500) {
        if (turn == 1) {
          if (vakje6_state !== 4 && vakje6_state !== 3) {
            vakje6_state = 3
            turn += 1
          }
        } else {
          if (vakje6_state !== 4 && vakje6_state !== 3) {
            vakje6_state = 4
            turn += 1
          }
        }
      }

      //vakje 7
      if (mouseX >= 220 && mouseX <= 400 && mouseY >= 520 && mouseY <= 700) {
        if (turn == 1) {
          if (vakje7_state !== 4 && vakje7_state !== 3) {
            vakje7_state = 3
            turn += 1
          }
        } else {
          if (vakje7_state !== 4 && vakje7_state !== 3) {
            vakje7_state = 4
            turn += 1
          }
        }
      }

      //vakje 8
      if (mouseX >= 420 && mouseX <= 600 && mouseY >= 520 && mouseY <= 700) {
        if (turn == 1) {
          if (vakje8_state !== 4 && vakje8_state !== 3) {
            vakje8_state = 3
            turn += 1
          }
        } else {
          if (vakje8_state !== 4 && vakje8_state !== 3) {
            vakje8_state = 4
            turn += 1
          }
        }
      }

      //vakje 9
      if (mouseX >= 620 && mouseX <= 800 && mouseY >= 520 && mouseY <= 700) {
        if (turn == 1) {
          if (vakje9_state !== 4 && vakje9_state !== 3) {
            vakje9_state = 3
            turn += 1
          }
        } else {
          if (vakje9_state !== 4 && vakje9_state !== 3) {
            vakje9_state = 4
            turn += 1
          }
        }
      }
    }
  }

  if (game_start == 3) {
    if (mouseButton === LEFT) {
      if (mouseX >= 310 && mouseX <= 710 && mouseY >= 600 && mouseY <= 700) {
        game_start = 2
      }
    }
  }
  
  //game reset
  if (game_start == 1 && mouseX >= 360 && mouseX <= 660 && mouseY >= 500 && mouseY <= 650) {
    if (mouseButton === LEFT) {
      turn = 1
      play_button_opac = 0
      vakje1_state = 1
      vakje2_state = 1
      vakje3_state = 1
      vakje4_state = 1
      vakje5_state = 1
      vakje6_state = 1
      vakje7_state = 1
      vakje8_state = 1
      vakje9_state = 1
      game_start = 3
    }
  }
}