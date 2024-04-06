function setup() {
    createCanvas(1000, 1000);
    background(60, 94, 136);
}

function draw() {
    const coordX = random(0, 1000);
    const coordY = random(0, 1000);
    stroke(245, 212, 118);
    strokeWeight(2);
    fill(190, 216, 206);
    rect(coordX, coordY, 70);
    fill(192, 59, 55);
    stroke(57, 44, 34);
    strokeWeight(2);
    circle(coordX, coordY, 50);
}
