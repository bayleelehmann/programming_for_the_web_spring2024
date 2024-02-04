let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "blue");
let stroke2 = prompt("enter another basic color lower case", "navy");
function setup() {
    createCanvas(1000, 800);
    background("#C7D1EA");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    //background(grid);
      //mountains
      //stroke("#8E96A9");
      //strokeWeight(20);
      fill("#8E96A9");
      stroke("#898B92");
      strokeWeight(10);
      triangle(300, 150, 500, 500, 0, 500);
      triangle(600, 500, 800, 200, 1100, 500);
      //ground
      fill("#898B92");
      stroke("898B92");
      quad(0, 500, 0, 1000, 1100, 1000, 1100, 500);
      
      //
      //line(0, 700, 200, 500);
      //line(200, 500, 400, 600);
      //line(400, 600, 700, 500);
      //line(700, 500, 800, 350);
      //line(800, 350, 1100, 800);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    //bottom body
    ellipse(500, 650, 350, 350);
    //body
    ellipse(500, 400, 250, 250);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    //buttons
    stroke(0);
    strokeWeight(25);
    point(500, 250);
    point(500, 350);
    point(500, 450);


}