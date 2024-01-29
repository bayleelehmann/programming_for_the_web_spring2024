function logOutGreeting (greeting) { //parameter declaration
    console.log(greeting); //has not been executed yet
}
logOutGreeting("hello"); //executes function
//function to get stuff
function getStuff (ingredient) {
    console.log("get " + ingredient);
}
//console.log("get bread");
//console.log("get peanut butter");
//console.log("get honey");

getStuff("bread");
getStuff("peanut butter");
getStuff("honey");

//const makeSandwich = function (ingredientArray) {
   //for (let i = 0; i < ingredientArray.length; i++) {
        //console.log("get" , ingredientArray[i]);
   // }
//}
//makeSandwich(["bread", "mayo", "tunafish"]);

let makeSandwich = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log("get " , ingredientArray[i]);
    }
}// ananomous function not giving it name
makeSandwich = (ingredientArray) => { //function expression
    console.log(ingredientArray.toString(" , "))
};

makeSandwich(["bread", "mayo", "tunafish"]);
makeSandwich(["this", "that", "thing"]); //has to occur after the function has been defined
// let allows to reassign
const output = 12;
//create a function that creates random number
function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    //return  Math.ceil(Math.random() * maxNumber);
    return output;
}
console.log(makeRand(100));
console.log(output);

function checkLegality (age) {
    return age >= 21;
}
const KensAge = 49;
if (checkLegality(KensAge)) {
    console.log("He is legal");
}
const myObject = {
    x: 200,
    y: 400,
    // old way getPosition: function () {
        //console.log("we are " + this.x + " from the left and " + this.y + " from the top");
   //}
  getPosition: () => {
    this.x = 35;
    this.y = 45;
    console.log("we are " + this.x + " from the left and " + this.y + " from the top");
   }//own scole
  // getPosition: function () {
   // this.x = 35;
   // this.y = 45;
   // console.log("we are " + this.x + " from the left and " + this.y + " from the top");
  // }//own scole
}
myObject.getPosition();
console.log(myObject.x, myObject.y);
//console.log(checkLegality(18));

//console.log(makeRand(100));//function being replaced with that number

//const randomOutput = makeRand(100);

//console.log(randomOutput);

//console.log(makeRand(100));