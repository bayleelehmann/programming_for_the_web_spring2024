//setting up the flip
//let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {

};
//making the card class
function setup() {
    createCanvas(800, 600);
    background(0);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            cards.push(new Card(startingX, startingY));
            startingX += 120;
            //console.log(startingX);
    }
    //myCard = new Card();
        startingY += 150;
        startingX = 100;
    }
}

//setting up the flip
function mousePressed() {
    for (let k = 0; k , cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
    //console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor (x, y) {//property
        //this.x = 100;
        //this.y = 100;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.show();
    }
    show () { //methods
       if(this.face === DOWN) {
        fill('rgb(57.9%, 9.9%, 9.9%');
        rect(this.x, this.y, this.width, this.height, 10);
       } else {
        fill('#aaa');
        rect(this.x, this.y, this.width, this.height, 10);
       }
           
    }
    
    //hit set up
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip () {
        if(this.face === DOWN) {
            this.face= UP;
        } else {
            this.face = DOWN;
        } 
        this.show();
    }
}

//setting up the flip

//making the grid and images
