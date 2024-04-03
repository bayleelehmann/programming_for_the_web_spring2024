
let rotateBy = 5;


function setup() {
    createCanvas(1000, 800);
    background(11, 64, 79);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(156, 125, 57);
    strokeWeight(1);
    ellipse(250, 250, 250);

}

function draw() {
    translate(450, 450);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
    
    //second one
    translate(120, 120);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 3;

    //third one
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy -= 2;
}


function mousePressed() {
    noLoop();
}
