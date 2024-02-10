
//function setup() {
//     createCanvas(600, 600);
//     background("gray");
// }

// function draw () {
//     fill("white");
//     rect(150, 150, 50, 50);
//     noLoop();
//     for( let x = 50; x)
// }

// let imageCard = {
//     width: 100,
//     height: 100,
//     x: 200,
//     y: 200,
// }

const imageCard = {
        width: 100,
        height: 100,
        x: 200,
        y: 200,}
        
let startingX = 200;
let startingY = 100;
let imageCard = [];
let startingId = 0;
function setup () {
    createCanvas(1000, 500);
    background (0);
    //ellipse (circleX, circleY, circleDiameter);
    for (let k= 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, circleDiameter);
            imageCard.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150; 
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    console.log(imageCard);
}


function draw() {
    fill('white');
    // rect(imageCard.x, imageCard.y, imageCard.width, imageCard.height);
    // imageCard.x = imageCard.x + 1;
    noLoop();
    for(let x = 100; x < 900; x+= 100) {
        for(let y = 100; y < 900; y+= 100) {
            rect(x, y, 100, 100);
        }
    }
}

// function mousePressed() {
//     for (let j = 0; j < myCircles.length; j++) {
//        // let distance = dist(mouseX, mouseY, myCirlces[j].x myCircles[j].y);
//        let distance = dist(mouseX, mouseY, myCircles[j].x, myCircles[j].y);
//         if (distance , circleDiameter / 2) {
//             console.log('circle has been clicked', myCircles[j].id);
//         }
//     }
// }
