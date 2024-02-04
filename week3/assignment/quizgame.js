let questionInput;
let currentQuestion;
let response;
let responseColor = "green";
let heading;
let submitAnswerButton;
let resetButton;
let incorrectCount = 0;
let incorrectResponse = 'Incorrect 0';
const statementDefault = [
    { question: 'what color are Ravens?', 
    answer: 'black'},
    { question: 'what color are Blue Jays?', 
    answer: 'blue'},
    { question: 'what color are male Cardinals?', 
    answer: 'red'},
    { question: 'what do Cardinals eat?', 
    answer: 'insects'},
    { question: 'what color are Robins eggs?', 
    answer: 'blue'},
    { question: 'what color are a Robins chest?', 
    answer: 'orange'},
    { question: 'what do Robins symbolize?', 
    answer: 'peace'},
    { question: 'what do Ravens symbolize?', 
    answer: 'loss'},
];

let statements = statementDefault;
function next() {
    if(statements.length < 1) {
    window.alert('you won');
    return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion () {
    if (currentQuestion.answer >= questionInput.value()) {
        //remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        //this is the correct condition
        response = 'correct! next question';
        responseColor = 'green';
    } else {
        // this is the wrong condition
        incorrectCount += 1;
        incorrectResponse= `Incorrect: ${incorrectCount}`
       if (incorrectCount >= 4) {
        response = 'Oh no! You Lost..';
        responseColor = 'red';
       } else {
        response = 'whoops, that was not right, try another';
        responseColor = 'red';
       }
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question || '';
    }
   
}

currentQuestion = next();
let message = currentQuestion.question;

function restart() {
    statements = statementDefault;
    incorrectCount = 0;
    incorrectResponse = 'Incorrect: 0';
    response = '';
    currentQuestion = next();
    message = currentQuestion.question;
    questionInput.value('');
  }

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Bird Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 18);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 250);
    resetButton = createButton('reset');
    resetButton.size(80, 24);
    resetButton.mousePressed(restart);
    resetButton.position(100, 285);
}

function draw() {
    background('lightblue');
    fill('navy');
    textSize(24);
    text(message, 90, 120);
    fill(responseColor);
    text(response, 100, 350);
    text(incorrectResponse, 400, 400);
}