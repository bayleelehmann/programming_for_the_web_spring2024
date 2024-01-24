//objects


//create
const kensCar = {
    color: 'black',  //color is key and black is value
    pistons: 4
};
console.log(kensCar);
//mutate: add data (properties)
kensCar.fuelInjection = true;
console.log(kensCar);
kensCar['4-wheel-drive'] = true;
// display single item with dot
console.log('kens car is', kensCar.color);
//display single item with array notation
console.log('is it 4 wheel dig?' , kensCar['4-wheel-drive']);
// using toString (works with arrays too)
console.log(kensCar.toString());
const myCars = ["rav", "pilot", "juke"],
console.log(myCars.to.string());
//mutate: remove property
delete kensCar.pistons;
console.log('kens car without pistons', kensCar);
// merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Nissan',
};
const newJuke = Object.assign({}, basicJuke, kensCar); //two curly empty, brand new object, kenscar overwrite, basicjuke-
console.log('new juke', newJuke);
// objects in arrays
const cars = [
    { make: "Nissan", model: "rogue", color: "orange" }, 
    { make: "Nissan", model: "altima", color: "blue" }, 
    { make: "Nissan", model: "ford", color: "black" } 
];
console.log("index 1 of cars color", cars[1]. color)