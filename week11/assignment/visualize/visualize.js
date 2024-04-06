let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
//let bubble1, bubble2;


function setup () {
    createCanvas(800, 800);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();
    bubble5 = new Bubble();
    bubble6 = new Bubble();
    //print(bubble.x, bubble.y);
}

function draw() {
    background(60, 94, 136);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
    bubble5.move();
    bubble5.show();
    bubble6.move();
    bubble6.show();
}




class Bubble {
    constructor() {
        this.x = 200;
        this.y = 300;
    }
    move() {
        this.x = this.x + random(-10, 11); 
        this.y = this.y + random(-10, 10); 
    }
    show() {
        stroke(190, 216, 206);
        strokeWeight(4);
        fill(133, 168, 189);
        ellipse(this.x, this.y, 100, 100);
    }
}



