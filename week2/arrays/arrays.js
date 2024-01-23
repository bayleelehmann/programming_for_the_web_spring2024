// variable but has multiple slots
const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
myOtherArray.push('star war'); // push to add to end
myOtherArray.push('raiders of the lost arch');
//myArr.pop(); // remove last item
//myArr.shift(); //remove first item
myArr.unshift('james'); //add to first

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); //interested in the first slot-- read single item
console.log(myArr[1]); //interested in second item--
console.log(myArr.indexOf('betty')); //betty is at index two 
const bettyIdx = myArr.indexOf('betty');
console.log(bettyIdx); //if not found -1 if found real index number

if (bettyIdx > -1){
    console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, 'robert');
console.log(myArr);
console.log(myArr.length); //outputs number of slots in the array //console is object... log is the poperity
//push properity of array type. on the object to do an action two it
//length is just a property- tells more about object
//pop considered a method.  array is an object 
const randomNumber = Math.round(Math.random() * (myArr.length -1)); 
//Math.random() for random 0-1
//Math.round(n) rounds to nearest whole number
//myArr.length - 1 to get the last index number of an array
console.log(myArr[randomNumber]);