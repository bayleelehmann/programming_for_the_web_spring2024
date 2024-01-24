//step 1 create an array with games
const myArray = ["Monopoly", "Sorry", "Life",];
console.log(myArray);

const camelCase = [
    { title: "Monopoly", numberOfPlayers: "3", shortDescription: "buying real estate" }, 
    { title: "Sorry", numberOfPlayers: "3", shortDescription: "competition of space" }, 
    { title: "Life", numberOfPlayers: "3", shortDescription: "travels through life" }, 
];

console.log(camelCase);
const userGame = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");
console.log("user input game", userGame);
const promptResponse = ("You selected" + myArray[promptResponse -1 ].title + " which is a " + myArray[promptResponse - 1].type);
console.log(promptResponse);