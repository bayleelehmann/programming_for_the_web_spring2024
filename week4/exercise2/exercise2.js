let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup(){
    createCanvas(500, 500);
    rectY  = random(height - rectHeight);
    speed = random(1, 3);
}

function draw() {
    background(17, 157, 164);
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text('WOW your score is ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('bong!', clickCount);
    }
}

function drawShape() {
    fill(41, 86, 137);
    rect(rectX, rectY, rectWidth, rectHeight);
}