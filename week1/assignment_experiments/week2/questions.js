const question1 = {
    question: 'Who played Kramer in Seinfeld',
    answer: 'Michael Richards',
};
const question2 = {
    question: 'Who played Danny in Beef',
    answer: 'Steven Yeun',
};
const question3 = {
    question: 'Who played Amy in Beef',
    answer: 'Ali Wong',
};
const question4 = {
    question: 'What was Kramers First name',
    answer: 'Cosmo',
};
const question5 = {
    question: 'Who plays Rue in Euphoria',
    answer: 'Zendaya',
};
const question6 = {
    question: 'Who plays Nate in Euphoria',
    answer: 'Jacob Elordi',
};
const question7 = {
    question: 'Who played Morpheus in Sandman',
    answer: 'Tom Sturridge',
};
const question8 = {
    question: 'Who played Lucifer in Sandman',
    answer: 'Gendoline Christie',
};
const question9 = {
    question: 'Who played DDanny Sullivan in The Crowded Room',
    answer: 'Tom Holland',
};
const question10 = {
    question: 'Who played Rya in The Crowded Room',
    answer: 'Amanda Seyfried',
};


const quizQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
console.log(quizQuestions)

const randomIdx = Math.round(Math.random() * quizQuestions.length - 1);

const userAnswer = window.prompt('Can you answer the following question about TV shows?: \n' + quizQuestions[randomIdx].question);
window.alert('You answered: \n' + userAnswer + '\nThe correct answer is: \n' + quizQuestions[randomIdx].answer)