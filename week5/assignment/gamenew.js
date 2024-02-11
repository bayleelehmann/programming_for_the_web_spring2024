const circleDiameter = 150;
// let circleX = 200;
// let circleY = 300;
let startingX = 200;
let startingY = 150;
let myCircles = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            ellipse(startingX, startingY, circleDiameter);
            myCircles.push({ x: startingX, y: startingY, id: startingId });
            startingX += 200;
            startingId++;
        }
        startingY += 200;
        startingX = 200;
        let myCard = newCard (); 
        myCard.show();
    }
    
    console.log(myCircles);
}

function mousePressed() {
    for (let j = 0; j < myCircles.length; j++) {
        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
        if (distance < circleDiameter / 2) {
            console.log('circle has been clicked', myCircles[j].id);
        }
    }
}

//making the card class

class Card {
    //property
    constructor () { 
        this.x = 200; //variables specific to class
        this.y = 150;
        this.circleDiameter = 150;
        this.show();
    }
    //methods like functions specic to class
    show () {
        fill('rgb(210, 212, 136)');
        ellipse(this.x, this.y, this.circleDiameter);
    }
}