function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(dotColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke(circleOutlineColor);
    strokeWeight(5);
    circle(100, 100, 100);
}
function draw() {
    createTile(0, 0, "darkblue", "white", "navy", "blue");
    createTile(0, 200, "lightblue", "black", "blue", "black");
    createTile(0, 200, "darkblue", "white", "navy", "blue");
    createTile(200, -400, "lightblue", "black", "blue", "black");
    createTile(0, 200, "darkblue", "white", "navy", "blue");
    createTile(0, 200, "lightblue", "black", "blue", "black");
    createTile(200, -400, "darkblue", "white", "navy", "blue");
    createTile(0, 200, "lightblue", "black", "blue", "black");
    createTile(0, 200, "darkblue", "white", "navy", "blue");
}