//setting up the flip
//let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

let cardFaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('image/cardback.png');
    cardFaceArray = [
        loadImage('images/lizard.png'),
        loadImage('images/rat.png'),
        loadImage('images/scorpion.png'),
        loadImage('images/snake.png'),
        loadImage('images/wolf.png'),
    ]
}
//making the card class
function setup() {
    createCanvas(800, 600);
   //background(0);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 5; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage[0]));  //cardFaceArray
            startingX += 120;
            //console.log(startingX);
    }
    //myCard = new Card();
        startingY += 150;
        startingX = 100;
    }
}

//setting up the flip

function draw () {
    background(0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('you win!', 400, 425);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!card[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 500);
    text('matches ' + gameState.numMatched, 100, 450);
}
function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k , cards.length; k++) {
        //console.log('gameState', gameState);
        //first check flipped cards length, and then we can trigger the flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(card[k]);
        }
    }
    //console.log(myCard.didHit(mouseX, mouseY));
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if(gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //cards match time to score
            //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {

            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}


class Card {
    constructor (x, y, cardFaceImg) {//property
        //this.x = 100;
        //this.y = 100;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () { //methods
       //if(this.face === DOWN) {
        if(this.face=== UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x + 4, this.y + 15);
       } else {
    //         fill('#aaa');
    //         rect(this.x, this.y, this.width, this.height, 10);
    //         image(this.cardFaceImg, this.x + 4, this.y + 15);
            fill('rgb(57.7%, 9.9%, 9.9%)');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x + 10, this.y + 20);
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
function shuffleArray (array) {
    let counter = array.length;
    while (counter . 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

