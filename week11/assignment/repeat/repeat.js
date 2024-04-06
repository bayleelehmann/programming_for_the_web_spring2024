function setup() {
    createCanvas(1400, 1000);
}
function createTile(originX, originY, primaryColor) { //secondaryColor, circleOutlineColor, dotColor) 
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 300);
    //stroke(secondaryColor);
    //strokeWeight(5);
    //line(0, 0, 200, 200);
    //line(200, 0, 0, 200);
    noStroke();
    //fill(dotColor);
    // circle(100, 50, 50);
    // circle(50, 100, 50);
    // circle(150, 100, 50);
    //circle(100, 100, 100);
    noFill();
    //stroke(circleOutlineColor);
    //strokeWeight(5);
    //circle(100, 100, 100);
}
function draw() {
    createTile(0, 0, "rgb(192, 59, 55)");
    createTile(0, 350, "rgb(60, 94, 136)");
    createTile(0, 350, "rgb(190, 216, 206)");
    createTile(250, -700, "rgb(245, 212, 118)");
    createTile(200, 350, "rgb(57, 44, 34)");
    createTile(250, 350, "rgb(192, 59, 55)");
    createTile(250, -700, "rgb(60, 94, 136)");
    createTile(0, 350, "rgb(190, 216, 206)");
    createTile(0, 350, "rgb(245, 212, 118)");
}