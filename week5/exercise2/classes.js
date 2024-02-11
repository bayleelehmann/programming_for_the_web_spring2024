let bubble1;
let bubble2;
let bubble3;
//let bubble1, bubble2;


function setup () {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    //print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
}


class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = this.x + random(-5, 5); //wrong dont use bubble.
        this.y = this.y + random(-5, 5); //wrong?
    }
    show() {//wrong?
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}




// function draw () {
//     background(0);
//     ellipse(100, 100, 100, [100]);
//     bubble.move();
//     bubble.display();
// }

// function show() {
//     stroke(255);
//     strokeWeight(4);
// }

// class Bubble {
//     constructor() {
//         this.x=100;
//         this.y=100;
//     }
// }