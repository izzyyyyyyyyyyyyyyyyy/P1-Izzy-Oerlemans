const vert = `
precision highp float;
attribute vec3 aPosition;
void main() {
  vec4 p = vec4(aPosition, 1.0);
  p.xy = p.xy * 2.0 - 1.0;   // rect(0,0,w,h) arrives in 0..1 -> clip space
  gl_Position = p;
}
`;

const frag = `
precision highp float;

uniform vec2 iResolution;
uniform float iTime;

vec3 hash32(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

mat2 rot(float angle) {
    return mat2(cos(angle), sin(angle), -sin(angle), cos(angle));
}

#define LAYERS 16.0

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 w = iResolution.xy;
    vec2 f2xyG = fragCoord / w - vec2(0.5);

    vec2 o = f2xyG * 2.0;
    float e = length(o);
    float k = o.y + o.x;

    // aspect ratio correction
    f2xyG.y /= w.x / w.y;
    f2xyG *= 2.0;

    vec3 f3TotalCol = vec3(0.0);

    for (float i = 0.0; i < LAYERS; ++i) {
        vec2 f2xy = f2xyG;

        // random offset
        f2xy = f2xy * rot(i * 2.0) + vec2(0.03, 0.04) * i;

        // starfield style zoomer
        float fDuration = LAYERS;
        float fTick = mod(iTime * 0.5 + i, fDuration);
        float fDistance = (fDuration - fTick) * 0.25;
        float fVisualSize = 1.0 / fDistance;
        f2xy /= fVisualSize;

        float fLumaFactor = 0.5 / (fDistance * fDistance);

        // fade in bubbles
        float fFadeIn = smoothstep(0.0, 1.5, fTick);
        fLumaFactor *= fFadeIn;

        float allscale = 1.0;
        f2xy *= allscale;
        vec2 f2Id = floor(f2xy + allscale);
        f2xy = fract(f2xy);
        f2xy = f2xy * 2.0 - 1.0;

        // random noise
        vec3 f3Noise = 2.0 * hash32(f2Id * 0.5 / allscale + i * 0.01) - 1.0;
        vec2 f2Offset = f3Noise.xy * 0.8;
        f2xy += f2Offset;

        vec2 f2ScaleLimit = vec2(1.0) - abs(f2Offset);
        float fMaxScale = min(f2ScaleLimit.x, f2ScaleLimit.y);
        float fScale = mix(0.2, fMaxScale, f3Noise.z * 0.5 + 0.5);
        f2xy /= fScale;

        // bubble shape
        float l = length(f2xy);
        float r = fract(abs(f3Noise.x) * 9.7) * 0.8 + 0.2;

        float ring = pow(max(1.0 - abs(l - r + e * 0.2), 0.0), 25.0) * 0.2;
        float filled = smoothstep(r, r - e * 0.2, l);
        float fSignal = clamp(ring + filled, 0.0, 1.0);

        // bubble color
        float colorMix = fract((i / LAYERS) + f3Noise.y);
        vec3 baseColor = mix(
            vec3(0.6, 0.46, 0.4),
            vec3(0.25, 0.15, 0.3) + vec3(0.0, k, k) * 0.25,
            colorMix
        );

        f3TotalCol += fSignal * pow(baseColor, vec3(3.0)) * fLumaFactor;
    }

    gl_FragColor = vec4(sqrt(f3TotalCol) * 2.0, 1.0);
}
`;

let rainbow = 0;
let game_state = 0;
let bg, bubbleShader;
let buttons = []
let sounds = ["shot","reload","gun-ready"]
let loadedSounds = []
let images = ["Dylan", "Dylan-van-Marcus", "Mo", "cat", "barra", "mo-light", "ice-cream", "Dylano", "Dihlano", "pocky", "toad", "rico", "Izzy", "jumper-cat", "Kyo", "potentie", "callum", "thomas", "uncle-wang", "meno", "mo-light-shh", "broken-laptop", "barry", "gruncle", "clubstep", "ice-cream","office","gun","gun-icon"]
let loadedImages = []
let aiLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let pointValue = 0;
let charDescriptions = [
    "Dylan - once he disappears from the cam right next to your right door, close it",
    "Dylan Van Markus - same as Dylan but the left door",
    "mo - a phone will randomly show up once per night, you have to find the off button before it explodes",
    "cat - he'll be on your desk with his happiness slowly going down, click him to squeeze him and make him happier",
    "the barra will randomly cover parts of your screen, there is no stopping this",
    "mo light - he's streaming clash in cam 3, watch it to keep his watch-bar up. if it hits zero u lose",
    "icecream - if you hear it in your right ear close the right door and the other way around. if he gets in he will cause distraction",
    "Dylano - he will appear in your office at 4 random points in the night asking you where his glaceon plushie is, find it in the camera's and click it to get him to go away",
    "Dihlano - he will be visible on the camera's, making his way to your office's toilet. once he gets there you have to quickly flush it when he shows up",
    "Pocky's - dylano will show up in your right door, buy pockys in the shop and click him to feed him and make him go away.",
    "plush toad - he'll randomly fly at your camera, punch him back to prevent your screen from being covered",
    "Rico - you'll hear his car coming closer and closer, once its loudest your front vent needs to be closed to make him leave, otherwise he'll jumpscare you",
    "Izzy - wind the box in cam 4",
    "Jumpercat - the video will randomly start playing on your laptop in the office draining your oxygen, shoot it",
    "Kyo - he'll randomly drop from your top vent, shoot him quickly before he jumpscares you",
    "the 'potential' gang -  their vibecoding will cause random glitches in the camera, making it hard to see",
    "Callum - you'll get notifications on the laptop where he asks if he can join the group, decline them before he KILLS you",
    "he will appear in your office, which means you need to go appreciate the gravity in a random cam. if you dont watch the gravity enough he'll jumpscare you",
    "uncle Wang - catch the fish with 'c' when his minigame appears",
    "Meno - he'll appear in a random camera, taking up your power to play beat saber. shock him to get rid of him",
    "Rico BFDI - check cam 3 frequently, if he is angry and awake you need to shock him.",
    "Dylano's kapotte laptop - your camera's will randomly bluescreen",
    "Barry - his stream will randomly appear on ur laptop, dislike it to make him go away",
    "gruncle - dont leave your fan on too long",
    "frieg monster - stalemate will get louder as he gets closer, you can see him in your vent radar. turn on the heater once he gets too close"
]
let leftDoor = {
    state: 0,
    height: 114,
    height2: 195
}
let rightDoor = {
    state: 0,
    height: 116,
    height2: 195
}
let vent = {
    state: 0,
    height: 0,
}
let gunActive = false
let gunBoxColor = 150

function setup() {
    createCanvas(1280, 720);
    bg = createGraphics(width, height, WEBGL);
    bg.pixelDensity(1);
    bg.noStroke();
    bubbleShader = bg.createShader(vert, frag);
    for (let i = 0; i < 60; i++) {
        let button = createButton("+")
        button.size(60, 20)
        buttons.push(button)
    }
}

function preload() {
    for (let i = 0; i < 29; i++) {
        let img = loadImage(images[i] + ".png")
        loadedImages.push(img)
    }
    for (let i = 0; i < 3; i++) {
        let sound = loadSound(sounds[i] + ".mp3")
        loadedSounds.push(sound)
    }
}

function draw() {
    background(0, 100, 0);
    //button settings
    buttons[50].size(200, 100)
    buttons[50].position(900, 20)
    buttons[50].style("font-size", "50px")
    buttons[50].html("set all 0")
    buttons[50].mousePressed(setAll0)
    buttons[51].size(200, 100)
    buttons[51].position(900, 130)
    buttons[51].style("font-size", "45px")
    buttons[51].html("set all 20")
    buttons[51].mousePressed(setAll20)
    buttons[52].size(170, 80)
    buttons[52].position(1110, 20)
    buttons[52].style("font-size", "40px")
    buttons[52].html("og gang")
    buttons[52].mousePressed(ogGang)
    buttons[53].size(170, 80)
    buttons[53].position(1110, 110)
    buttons[53].style("font-size", "40px")
    buttons[53].html("ng gang")
    buttons[53].mousePressed(ngGang)
    buttons[54].size(170, 80)
    buttons[54].position(1110, 200)
    buttons[54].style("font-size", "37px")
    buttons[54].html("distracted")
    buttons[54].mousePressed(distracted)
    buttons[55].size(170, 80)
    buttons[55].position(1110, 290)
    buttons[55].style("font-size", "35px")
    buttons[55].html("reaction speed")
    buttons[55].mousePressed(reaction)
    buttons[56].size(170, 80)
    buttons[56].position(1110, 380)
    buttons[56].style("font-size", "35px")
    buttons[56].html("good luck")
    buttons[56].mousePressed(setAll20)
    buttons[57].size(200, 100)
    buttons[57].position(900, 240)
    buttons[57].style("font-size", "45px")
    buttons[57].html("+1 to all")
    buttons[57].mousePressed(add1All)
    buttons[58].size(200, 100)
    buttons[58].position(900, 350)
    buttons[58].style("font-size", "45px")
    buttons[58].html("-1 to all")
    buttons[58].mousePressed(minus1All)
    buttons[59].html("GO!")
    buttons[59].size(390,100)
    buttons[59].position(880,610)
    buttons[59].style("font-size","70px")
    buttons[59].style('font-family','Tiny5 Duo')
    buttons[59].style('background-color','lime')
    buttons[59].style('color', 'white');
    buttons[59].style('outline', 'none');
    buttons[59].mousePressed(enterGame)
    pointValue = aiLevels.reduce((sum, value) => sum + value, 0);
    if (game_state == 0) {
        buttons[50].show()
        buttons[51].show()
        buttons[52].show()
        buttons[53].show()
        buttons[54].show()
        buttons[55].show()
        buttons[56].show()
        buttons[57].show()
        buttons[58].show()
        buttons[59].show()
        bg.shader(bubbleShader);
        bubbleShader.setUniform('iResolution', [bg.width, bg.height]);
        bubbleShader.setUniform('iTime', millis() / 1000.0);
        bg.rect(0, 0, bg.width, bg.height);
        image(bg, 0, 0, width, height);
        rainbow++
        colorMode(RGB)
        fill(0, 0)
        strokeWeight(4)
        stroke(255)
        fill(255)
        textSize(60)
        textFont('aharoni')
        colorMode(HSB)
        drawingContext.shadowBlur = 30
        drawingContext.shadowColor = color(rainbow, 100, 100)
        if (rainbow > 360) {
            rainbow = 0
        }
        stroke(rainbow, 50, 100)
        text("ULTIMATE KYO NIGHT", 10, 65)
        textAlign(CENTER)
        textSize(70)
        text(pointValue * 100, 1180, 550)
        textAlign(LEFT)
        textSize(40)
        text("POINT\nVALUE", 870, 520)
        colorMode(RGB)
        stroke(0)
        drawingContext.shadowBlur = 0
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                rect(10 + j * 170, 80 + i * 130, 160, 115)
                image(loadedImages[i * 5 + j], 10 + j * 170, 80 + i * 130, 160, 115)
                fill(255)
                strokeWeight(3)
                textSize(30)
                textAlign(CENTER)
                fill(255)
                text(aiLevels[i * 5 + j], 150 + j * 170, 105 + i * 130)
                buttons[i * 5 + j].show()
                buttons[25 + (i * 5 + j)].show()
                buttons[i * 5 + j].position(115 + j * 170, 160 + i * 130)
                buttons[i * 5 + j + 25].html("-")
                buttons[i * 5 + j + 25].position(115 + j * 170, 180 + i * 130)
                if (aiLevels[i * 5 + j] == 0) {
                    strokeWeight(0)
                    fill(0, 70)
                    rect(10 + j * 170, 80 + i * 130, 160, 115)
                } else if (aiLevels[i * 5 + j] == 20) {
                    strokeWeight(0)
                    fill(255, 0, 0, 40)
                    rect(10 + j * 170, 80 + i * 130, 160, 115)
                }
                strokeWeight(5)
                textAlign(LEFT)
            }
        }
        for (let i = 0; i < 25; i++) {
            buttons[i].mousePressed(() => aiUp(i))
        }

        for (let i = 25; i < 50; i++) {
            buttons[i].mousePressed(() => aiDown(i))
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (mouseX >= 10 + j * 170 && mouseX <= 180 + j * 170 && mouseY >= 80 + i * 130 && mouseY <= 210 + i * 130) {
                    strokeWeight(3)
                    stroke(0)
                    fill(255)
                    rect(180 + j * 170, 80 + i * 130, 200, 150)
                    textSize(17)
                    text(charDescriptions[i * 5 + j],190 + j * 170, 90 + i * 130,200,140)
                    if (mouseX <= 690) {
                        buttons[i * 5 + j + 1].hide()
                        buttons[25 + (i * 5 + j + 1)].hide()
                    } else {
                        buttons[50].hide()
                        buttons[51].hide()
                        buttons[57].hide()
                        buttons[58].hide()
                        buttons[59].hide()
                    }
                    
                }
            }
        }
    }

    if (game_state == 1) {
        background(200)
        for (let i = 0; i < 60; i++) {
            buttons[i].hide()
        }
        image(loadedImages[26],0,0,1280,720)
        fill(255)
        text(mouseX,mouseX,mouseY)
        text(mouseY,mouseX,mouseY + 20)
        strokeWeight(0)
        fill(100)
        quad(32,197,145,112,144,leftDoor.height,34,leftDoor.height2)
        if (leftDoor.state == 1) {
            leftDoor.height = leftDoor.height + 100
            leftDoor.height2 = leftDoor.height2 + 100
        }
        if (leftDoor.height >= 563) {
            leftDoor.height = 563
        }
        if (leftDoor.height2 >= 690 && leftDoor.state == 1) {
            leftDoor.height2 = 690
            leftDoor.state = 2
        }
        if (leftDoor.state == 3) {
            leftDoor.height = leftDoor.height - 100
            leftDoor.height2 = leftDoor.height2 - 100
        }
        if (leftDoor.height <= 114) {
            leftDoor.height = 114
        }
        if (leftDoor.height2 <= 195 && leftDoor.state == 3) {
            leftDoor.height2 = 195
            leftDoor.state = 0
        }

        quad(1140,119,1246,195,1246,rightDoor.height2,1140,rightDoor.height)
        if (rightDoor.state == 1) {
            rightDoor.height = rightDoor.height + 100
            rightDoor.height2 = rightDoor.height2 + 100
        }
        if (rightDoor.height >= 563) {
            rightDoor.height = 563
        }
        if (rightDoor.height2 >= 690 && rightDoor.state == 1) {
            rightDoor.height2 = 690
            rightDoor.state = 2
        }
        if (rightDoor.state == 3) {
            rightDoor.height = rightDoor.height - 100
            rightDoor.height2 = rightDoor.height2 - 100
        }
        if (rightDoor.height <= 114) {
            rightDoor.height = 114
        }
        if (rightDoor.height2 <= 195 && rightDoor.state == 3) {
            rightDoor.height2 = 195
            rightDoor.state = 0
        }

        rect(284,80,215,vent.height)
        if (vent.state == 1) {
            vent.height = vent.height + 60
        }
        if (vent.height >= 122 && vent.state == 1) {
            vent.height = 122
            vent.state = 2
        }
        if (vent.state == 3) {
            vent.height = vent.height - 60
        }
        if (vent.height <= 0 && vent.state == 3) {
            vent.height = 0
            vent.state = 0
        }

        //gun
        if (mouseX >= 1060 && mouseX <= 1260 && mouseY >= 440 && mouseY <= 640) {
            gunBoxColor = 100
        } else {
            gunBoxColor = 150
        }
        fill(gunBoxColor,200)
        stroke(gunBoxColor - 50,200)
        strokeWeight(5)
        square(1060,440,200)
        image(loadedImages[28],1080,470,150,150)
        if (gunActive == true) {
            image(loadedImages[27],0,350,600,400)
        }
    }
}

function keyPressed() {
    if (game_state == 1) {
        if (keyCode === 65) {
            if (leftDoor.state == 0) {
                leftDoor.state = 1
            } else if (leftDoor.state == 2) {
                leftDoor.state = 3
            }
        }
        if (keyCode === 68) {
            if (rightDoor.state == 0) {
                rightDoor.state = 1
            } else if (rightDoor.state == 2) {
                rightDoor.state = 3
            }
        }
        if (keyCode === 87) {
            if (vent.state == 0) {
                vent.state = 1
            } else if (vent.state == 2) {
                vent.state = 3
            }
        }

    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        if (mouseX >= 1060 && mouseX <= 1260 && mouseY >= 440 && mouseY <= 640) {
            if (gunActive == true) {
                gunActive = false
                loadedSounds[1].play()
            } else if (gunActive == false) {
                gunActive = true
                loadedSounds[2].play()
            }
        } else if (gunActive == true) {
            loadedSounds[0].play()
            gunActive = false
        }
    }
}

function aiUp(i) {
    if (aiLevels[i] < 20) {
        aiLevels[i]++
    }
}

function aiDown(i) {
    if (aiLevels[i - 25] > 0) {
        aiLevels[i - 25]--
    }
}

function add1All() {
    for (let i = 0; i < 25; i++) {
        if (aiLevels[i] < 20) {
            aiLevels[i]++
        }
    }
}

function minus1All() {
    for (let i = 0; i < 25; i++) {
        if (aiLevels[i] > 0) {
            aiLevels[i]--
        }
    }
}

function setAll0() {
    aiLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

function setAll20() {
    aiLevels = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
}

function ogGang() {
    aiLevels = [0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 19, 0, 0, 0, 0, 5, 0, 0, 20, 0, 0]
}

function ngGang() {
    aiLevels = [15, 0, 15, 0, 0, 0, 0, 20, 0, 0, 0, 10, 20, 0, 20, 0, 1, 0, 0, 15, 0, 0, 20, 0, 0]
}

function distracted() {
    aiLevels = [10, 10, 0, 0, 20, 0, 20, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 20, 20, 0, 0, 20, 20, 0, 0]
}

function reaction() {
    aiLevels = [0, 0, 12, 0, 0, 0, 4, 18, 0, 0, 20, 10, 0, 20, 20, 0, 3, 5, 0, 0, 0, 0, 20, 0, 0]
}
function enterGame() {
    game_state = 1
}