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
let opac1 = 0;
let opac2 = 0;
let p1_color1_stroke;
let p1_color2_stroke;
let p1_color3_stroke;
let p1_color4_stroke;
let p1_color5_stroke;
let p1_color6_stroke;
let p2_color1_stroke;
let p2_color2_stroke;
let p2_color3_stroke;
let p2_color4_stroke;
let p2_color5_stroke;
let p2_color6_stroke;
let click_sound;
let select_sound;
let bg_music;

function preload() {
  bg_music = loadSound("balatro-main.mp3")
}

function setup() {
  createCanvas(1020, 840);
  select_sound = loadSound("audiomass-output2.mp3")
  click_sound = loadSound("audiomass-output.mp3")
  p1_color = color(255,0,0)
  p2_color = color(0,0,255)
  vakje1 = color(255);
  vakje2 = color(255);
  vakje3 = color(255);
  vakje4 = color(255);
  vakje5 = color(255);
  vakje6 = color(255);
  vakje7 = color(255);
  vakje8 = color(255);
  vakje9 = color(255);
  p1_color1_stroke = color(255)
  p1_color2_stroke = color(0)
  p1_color3_stroke = color(0)
  p1_color4_stroke = color(0)
  p1_color5_stroke = color(0)
  p1_color6_stroke = color(0)
  p2_color1_stroke = color(255)
  p2_color2_stroke = color(0)
  p2_color3_stroke = color(0)
  p2_color4_stroke = color(0)
  p2_color5_stroke = color(0)
  p2_color6_stroke = color(0)
  text_trans = 0;
}

function draw() {
  if (frameCount == 1) {
    bg_music.play()
  }

  if (frameCount % 14280 === 0) {
    bg_music.play()
  }

  if (game_start == 3) {
    opac1 = 255
    opac2 = 0
    play_button_opac = 0
    vakje1 = color(255,opac2);
    vakje2 = color(255,opac2);
    vakje3 = color(255,opac2);
    vakje4 = color(255,opac2);
    vakje5 = color(255,opac2);
    vakje6 = color(255,opac2);
    vakje7 = color(255,opac2);
    vakje8 = color(255,opac2);
    vakje9 = color(255,opac2);
  }

  if (game_start == 2) {
    opac1 = 0
    opac2 = 255
    play_button_opac = 0
    p1_color1_stroke = color(0,0)
    p1_color2_stroke = color(0,0)
    p1_color3_stroke = color(0,0)
    p1_color4_stroke = color(0,0)
    p1_color5_stroke = color(0,0)
    p1_color6_stroke = color(0,0)
    p2_color1_stroke = color(0,0)
    p2_color2_stroke = color(0,0)
    p2_color3_stroke = color(0,0)
    p2_color4_stroke = color(0,0)
    p2_color5_stroke = color(0,0)
    p2_color6_stroke = color(0,0)
  }

  if (game_start == 1) {
    opac1 = 0
    opac2 = 255
    play_button_opac = 255
    p1_color1_stroke = color(0,0)
    p1_color2_stroke = color(0,0)
    p1_color3_stroke = color(0,0)
    p1_color4_stroke = color(0,0)
    p1_color5_stroke = color(0,0)
    p1_color6_stroke = color(0,0)
    p2_color1_stroke = color(0,0)
    p2_color2_stroke = color(0,0)
    p2_color3_stroke = color(0,0)
    p2_color4_stroke = color(0,0)
    p2_color5_stroke = color(0,0)
    p2_color6_stroke = color(0,0)
  }

  //bg color transition setup
  from = p1_color
  to = p2_color
  background_color = lerpColor(from,to,0 + background_transition)
  colorMode(RGB)
  background(background_color);

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
  fill(0,0,0,opac2)
  strokeWeight(0)
  square(200,100,620,40)
  fill(vakje1)
  square(220,120,180)
  fill(vakje2)
  square(420,120,180)
  fill(vakje3,opac2)
  square(620,120,180)
  fill(vakje4,opac2)
  square(220,320,180)
  fill(vakje5,opac2)
  square(420,320,180)
  fill(vakje6,opac2)
  square(620,320,180)
  fill(vakje7,opac2)
  square(220,520,180)
  fill(vakje8,opac2)
  square(420,520,180)
  fill(vakje9,opac2)
  square(620,520,180)

  //main menu
  colorMode(RGB)
  textSize(50)
  fill(255,opac1)
  stroke(0,opac1)
  strokeWeight(3)
  text("Player 1 color",10,150)
  text("Player 2 color",700,150)
  fill(255,0,0,opac1)
  stroke(p1_color1_stroke)
  square(10,200,100)
  fill(255, 105, 227,opac1)
  stroke(p1_color2_stroke)
  square(120,200,100)
  fill(142, 0, 189,opac1)
  stroke(p1_color3_stroke)
  square(10,310,100)
  fill(255, 123, 0,opac1)
  stroke(p1_color4_stroke)
  square(120,310,100)
  fill(0,255,0,opac1)
  stroke(p1_color5_stroke)
  square(10,420,100)
  fill(0, 89, 10,opac1)
  stroke(p1_color6_stroke)
  square(120,420,100)
  fill(0,0,255,opac1)
  stroke(p2_color1_stroke)
  square(910,200,100)
  fill(0,255,255,opac1)
  stroke(p2_color2_stroke)
  square(800,200,100)
  fill(255,255,0,opac1)
  stroke(p2_color3_stroke)
  square(910,310,100)
  fill(197, 110, 255,opac1)
  stroke(p2_color4_stroke)
  square(800,310,100)
  fill(255, 0, 85,opac1)
  stroke(p2_color5_stroke)
  square(910,420,100)
  fill(0, 255, 102,opac1)
  stroke(p2_color6_stroke)
  square(800,420,100)
  fill(200,opac1)
  stroke(0,opac1)
  rect(310,600,400,100)
  fill(0,opac1)
  text("START",430,670)

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
  
  if (game_start == 2) {
    if (turn == 1) {
      background_transition -= 0.1
    } else {
      background_transition += 0.1
    }
  } else {
    background_color = color(255)
  }

  //vakje 1
  //code om het vakje grijs te maken wanneer de muis er over heen zit
  if (game_start == 2) {
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
      vakje1 = p1_color
    }

    if (vakje1_state == 4) {
      vakje1 = p2_color
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
      vakje2 = p1_color
    }

    if (vakje2_state == 4) {
      vakje2 = p2_color
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
      vakje3 = p1_color
    }

    if (vakje3_state == 4) {
      vakje3 = p2_color
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
      vakje4 = p1_color
    }

    if (vakje4_state == 4) {
      vakje4 = p2_color
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
      vakje5 = p1_color
    }

    if (vakje5_state == 4) {
      vakje5 = p2_color
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
      vakje6 = p1_color
    }

    if (vakje6_state == 4) {
      vakje6 = p2_color
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
      vakje7 = p1_color
    }

    if (vakje7_state == 4) {
      vakje7 = p2_color
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
      vakje8 = p1_color
    }

    if (vakje8_state == 4) {
      vakje8 = p2_color
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
      vakje9 = p1_color
    }

    if (vakje9_state == 4) {
      vakje9 = p2_color
    }
  }

  //endscreen
  strokeWeight(25)
  stroke(255)
  //(hij checkt elke speciefieke combinatie van vakjes)
  if (vakje1_state == 3 && vakje2_state == 3 && vakje3_state == 3) {
    line(310,210,710,210)
    endscreen_text =  "P1  "
    game_start = 1;
  }

  if (vakje4_state == 3 && vakje5_state == 3 && vakje6_state == 3) {
    line(310,410,710,410)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje7_state == 3 && vakje8_state == 3 && vakje9_state == 3) {
    line(310,610,710,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje1_state == 3 && vakje4_state == 3 && vakje7_state == 3) {
    line(310,210,310,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje1_state == 3 && vakje5_state == 3 && vakje9_state == 3) {
    line(310,210,710,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje3_state == 3 && vakje5_state == 3 && vakje7_state == 3) {
    line(710,210,310,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje2_state == 3 && vakje5_state == 3 && vakje8_state == 3) {

    line(510,210,510,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }

  if (vakje3_state == 3 && vakje6_state == 3 && vakje9_state == 3) {

    line(710,210,710,610)
    endscreen_text =  "P1 "
    game_start = 1;
  }


  if (vakje1_state == 4 && vakje2_state == 4 && vakje3_state == 4) {

    line(310,210,710,210)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje4_state == 4 && vakje5_state == 4 && vakje6_state == 4) {

    line(310,410,710,410)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje7_state == 4 && vakje8_state == 4 && vakje9_state == 4) {

    line(310,610,710,610)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje1_state == 4 && vakje4_state == 4 && vakje7_state == 4) {

    line(310,210,310,610)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje1_state == 4 && vakje5_state == 4 && vakje9_state == 4) {

    line(310,210,710,610)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje3_state == 4 && vakje5_state == 4 && vakje7_state == 4) {

    line(710,210,310,610)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje2_state == 4 && vakje5_state == 4 && vakje8_state == 4) {

    endscreen_text =  "P2 "
    game_start = 1;
  }

  if (vakje3_state == 4 && vakje6_state == 4 && vakje9_state == 4) {

    line(510,210,510,610)
    endscreen_text =  "P2 "
    game_start = 1;
  }

  //als alle vakje gevult zijn en er geen drie op een rij gedetecteerd word is het gelijk spel
  if (vakje1_state !== 1 && vakje2_state !== 1 && vakje3_state !== 1 && vakje4_state !== 1 && vakje5_state !== 1 && vakje6_state !== 1 && vakje7_state !== 1 && vakje8_state !== 1 && vakje9_state !== 1 && vakje1_state !== 2 && vakje2_state !== 2 && vakje3_state !== 2 && vakje4_state !== 2 && vakje5_state !== 2 && vakje6_state !== 2 && vakje7_state !== 2 && vakje8_state !== 2 && vakje9_state !== 2 && game_start == 2) {
    play_button_opac = 255
    endscreen_text = "Nobody "
    offset = 65
    game_start = 1
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

}

//muis input voor de verandering van de kleur
function mouseClicked() {

  if (game_start == 2) { //<-- zorgt ervoor dat de game niet meer werkt als de endscreen er is
    if (mouseButton === LEFT) {

      //vakje 1
      if (mouseX >= 220 && mouseX <= 400 && mouseY >= 120 && mouseY <= 300) {
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
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
        click_sound.play()
        game_start = 2
      }

      if (mouseX >= 10 && mouseX <= 110 && mouseY >= 200 && mouseY <= 300) {
        select_sound.play()
        p1_color = color(255,0,0)
        p1_color1_stroke = color(255)
        p1_color2_stroke = color(0)
        p1_color3_stroke = color(0)
        p1_color4_stroke = color(0)
        p1_color5_stroke = color(0)
        p1_color6_stroke = color(0)
      }

      if (mouseX >= 120 && mouseX <= 220 && mouseY >= 200 && mouseY <= 300) {
        select_sound.play()
        p1_color = color(255,105,227)
        p1_color2_stroke = color(255)
        p1_color1_stroke = color(0)
        p1_color3_stroke = color(0)
        p1_color4_stroke = color(0)
        p1_color5_stroke = color(0)
        p1_color6_stroke = color(0)
      }

      if (mouseX >= 10 && mouseX <= 110 && mouseY >= 310 && mouseY <= 410) {
        select_sound.play()
        p1_color = color(142,0,189)
        p1_color3_stroke = color(255)
        p1_color2_stroke = color(0)
        p1_color1_stroke = color(0)
        p1_color4_stroke = color(0)
        p1_color5_stroke = color(0)
        p1_color6_stroke = color(0)
      }

      if (mouseX >= 120 && mouseX <= 220 && mouseY >= 310 && mouseY <= 410) {
        select_sound.play()
        p1_color = color(255,123,0)
        p1_color4_stroke = color(255)
        p1_color2_stroke = color(0)
        p1_color3_stroke = color(0)
        p1_color1_stroke = color(0)
        p1_color5_stroke = color(0)
        p1_color6_stroke = color(0)
      }

      if (mouseX >= 10 && mouseX <= 110 && mouseY >= 420 && mouseY <= 520) {
        select_sound.play()
        p1_color = color(0,255,0)
        p1_color5_stroke = color(255)
        p1_color2_stroke = color(0)
        p1_color3_stroke = color(0)
        p1_color4_stroke = color(0)
        p1_color1_stroke = color(0)
        p1_color6_stroke = color(0)
      }

      if (mouseX >= 120 && mouseX <= 220 && mouseY >= 420 && mouseY <= 520) {
        select_sound.play()
        p1_color = color(0,89,10)
        p1_color6_stroke = color(255)
        p1_color2_stroke = color(0)
        p1_color3_stroke = color(0)
        p1_color4_stroke = color(0)
        p1_color5_stroke = color(0)
        p1_color1_stroke = color(0)
      }

      if (mouseX >= 910 && mouseX <= 1010 && mouseY >= 200 && mouseY <= 300) {
        select_sound.play()
        p2_color = color(0,0,255)
        p2_color1_stroke = color(255)
        p2_color2_stroke = color(0)
        p2_color3_stroke = color(0)
        p2_color4_stroke = color(0)
        p2_color5_stroke = color(0)
        p2_color6_stroke = color(0)
      }

      if (mouseX >= 800 && mouseX <= 900 && mouseY >= 200 && mouseY <= 300) {
        select_sound.play()
        p2_color = color(0,255,255)
        p2_color2_stroke = color(255)
        p2_color1_stroke = color(0)
        p2_color3_stroke = color(0)
        p2_color4_stroke = color(0)
        p2_color5_stroke = color(0)
        p2_color6_stroke = color(0)
      }

      if (mouseX >= 910 && mouseX <= 1010 && mouseY >= 310 && mouseY <= 410) {
        select_sound.play()
        p2_color = color(255,255,0)
        p2_color3_stroke = color(255)
        p2_color2_stroke = color(0)
        p2_color1_stroke = color(0)
        p2_color4_stroke = color(0)
        p2_color5_stroke = color(0)
        p2_color6_stroke = color(0)
      }

      if (mouseX >= 800 && mouseX <= 900 && mouseY >= 310 && mouseY <= 410) {
        select_sound.play()
        p2_color = color(197,110,225)
        p2_color4_stroke = color(255)
        p2_color2_stroke = color(0)
        p2_color3_stroke = color(0)
        p2_color1_stroke = color(0)
        p2_color5_stroke = color(0)
        p2_color6_stroke = color(0)
      }

      if (mouseX >= 910 && mouseX <= 1010 && mouseY >= 420 && mouseY <= 520) {
        select_sound.play()
        p2_color = color(255,0,85)
        p2_color5_stroke = color(255)
        p2_color2_stroke = color(0)
        p2_color3_stroke = color(0)
        p2_color4_stroke = color(0)
        p2_color1_stroke = color(0)
        p2_color6_stroke = color(0)
      }

      if (mouseX >= 800 && mouseX <= 900 && mouseY >= 420 && mouseY <= 520) {
        select_sound.play()
        p2_color = color(0,255,102)
        p2_color6_stroke = color(255)
        p2_color2_stroke = color(0)
        p2_color3_stroke = color(0)
        p2_color4_stroke = color(0)
        p2_color5_stroke = color(0)
        p2_color1_stroke = color(0)
      }
    }
  }
  
  //game reset
  if (game_start == 1 && mouseX >= 360 && mouseX <= 660 && mouseY >= 500 && mouseY <= 650) {
    if (mouseButton === LEFT) {
      click_sound.play()
      p1_color = color(255,0,0)
      p2_color = color(0,0,255)
      p1_color1_stroke = color(255)
      p1_color2_stroke = color(0)
      p1_color3_stroke = color(0)
      p1_color4_stroke = color(0)
      p1_color5_stroke = color(0)
      p1_color6_stroke = color(0)
      p2_color1_stroke = color(255)
      p2_color2_stroke = color(0)
      p2_color3_stroke = color(0)
      p2_color4_stroke = color(0)
      p2_color5_stroke = color(0)
      p2_color6_stroke = color(0)
      turn = 1
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