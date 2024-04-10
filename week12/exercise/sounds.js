//var song; 
var button;
//var amp;
let sound, amplitude;

function setup() {
    createCanvas (600, 600);
    cnv.mouseClicked(togglePlay);
    //song = loadSound("bubbles_1.mp3", loaded);
    amplitude = new p5.Amplitude();
    background(133, 168, 189);
}
function preload() {
    sound= loadSound('bubbles_1.mp3');
}

function loaded() {
    console.log("loaded");
    button = createButton("play");
    //button.mousePressed(togglePlaying);
}

function draw () {
    background(255);
    text('tap to play', 20, 20);

    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);
    ellipse(width/2, height/2, size, size);
    // var vol = amp.getLevel();
    // var diam = map(vol, 0, 0.5, 10, 200);
    // fill(190, 216, 206);
    // ellipse(width / 2, height / 2, diam, diam);


}

// function togglePlaying() {
//     if (!sound.isPlaying()) {
//         sound.play();
//         sound.setVolume(0.5);
//         button.html("pause");
//     } else {
//         sound.stop();
//         button.html("play");
//     }
// }

function togglePlay() {
    if (sound.isPlaying() ){
      sound.pause();
    } else {
      sound.loop();
          amplitude = new p5.Amplitude();
          amplitude.setInput(sound);
    }
  }