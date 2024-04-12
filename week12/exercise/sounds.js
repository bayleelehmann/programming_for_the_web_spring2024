let song; 
let button;
let amp;
//let sound, amplitude, p5;

function setup() {
    createCanvas(600, 600);
    //cnv.mouseClicked(togglePlay);
    //song = loadSound("bubbles_1.mp3", loaded); wrong
   // amplitude = new p5.Amplitude();
    amp = new p5.Amplitude();
    background(0);
}
// function preload() {
//     sound= loadSound('bubbles_1.mp3');
//     //console.log("loaded");
//     button = createButton("play");
// }

function loaded() {
    console.log("loaded");
    button = createButton("play");
    button.mousePressed(togglePlaying);
}


function draw () {
    background(255);
    //text('tap to play', 20, 20);
    //let level = amplitude.getLevel();
    //let size = map(level, 0, 1, 0, 200);
   // ellipse(width/2, height/2, size, size);
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.5, 50, 2000);
    // fill(190, 216, 206);
    // ellipse(width / 2, height / 2, diam, diam);


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

// function togglePlay() {
//     if (sound.isPlaying() ){
//       sound.pause();
//     } else {
//       sound.loop();
//           amplitude = new p5.Amplitude();
//           amplitude.setInput(sound);
//     }
//   }