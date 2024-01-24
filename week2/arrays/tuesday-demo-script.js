//array are data type that stores a collection of whatever
//                  0       1       2               3
let myArray = ['john', 'jacob'. 'jingleheimer', 'schmitt']; //populated
//const myOtherArray = new Array(); //empty
//const yetAnotherArray = [myArray, "smith", 9];

//formating- use a numeric index
console.log(myArray[1]);
myArray.push("phil");
myArray[1] = "bob";

console.log("my array is this long", myArray.length) //length property blue box
//figuring out which item is the index you want phil
const philIndex = myArray.indexOf("phil");
console.log("you can find phil at index". philIndex);


// methods for manipulation or mutation
//// push, pop slice splice  shift unshift
//myArray.push("alice");
const whatWasPopped = myArray.pop();
console.log("array after pop", myArray);
console.log('this was popped', whatWasPopped);
//myArray.splice(3, 0, "gary", "kevin");  
//splice detle or add item // intdex to start, how many to remove, 3 plus items to add
//console.log("spliced array", myArray);
//myArray.shift();
myArray.unshift("charlotte");  //like push but puts in begin
console.log("shifted array", myArray);

const myEmails = "ken@kenkorth.com, kkorth@mcad.edu, kkorth@spscommerce.com";
const myEmailArray = myEmails.split(",");
console.log("email array", myEmailArray);

const myCarArray = ["chevy", "subaru", "ford", "hyundai", "tesla"];
console.log(myCarArray.join(", "));

//object

//describe a car
myObject = {
    color: "red"
}; //using square brackets with the key in quotes is a array notation
//using a dot with no quotes is dot notation
console.log("what is the object color", myObject.color);

const myCar = {
    color: "red",
    make: "honda",
    wheels: "4",
    model: "accord",
};
console.log("my car", myCar)