// Define variables for the oscillator and amplitude
let osc;
let playing = false;

function setup() {
  createCanvas(400, 400);
  // Create an oscillator and an amplitude object
  osc = new p5.Oscillator();
  let amplitude = new p5.Amplitude();

  // Set the type of the oscillator to 'sine'
  osc.setType('sine');
  
  // Start the oscillator
  osc.start();
}

function draw() {
  background(220);

  // If the user is pressing the mouse, draw a circle and play a note
  if (mouseIsPressed) {
    let pitch = map(mouseY, 0, height, 400, 50); // Map mouseY to a pitch range
    playSound(pitch);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

// Function to play a sound of a specific pitch
function playSound(pitch) {
  // Set the frequency of the oscillator to the pitch value
  osc.freq(pitch);
  
  // If the oscillator is not currently playing, start it
  if (!playing) {
    osc.amp(0.5, 0.1); // Set amplitude and fade time
    playing = true;
  }
}

// Stop the sound when the mouse is released
function mouseReleased() {
  // Set the amplitude to 0 over a short duration to stop the sound smoothly
  osc.amp(0, 0.5);
  playing = false;
}
