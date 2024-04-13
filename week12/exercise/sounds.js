let song; 
let button;
let amp;

function setup() {
    createCanvas(400, 400);
    song = loadSound("bubbles_1.mp3", loaded);
    amp = new p5.Amplitude();
    background(0);
}


function loaded() {
    console.log("loaded");
    button = createButton("play");
    button.mousePressed(togglePlaying);
}


function draw () {
    background(192, 59, 55);
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.5, 50, 2000);
    stroke(245, 107, 109);
    strokeWeight(5);
    fill(60, 94, 136);
    ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.5);
        button.html("pause");
    } else {
        song.stop();
        button.html("play");
    }
    }
