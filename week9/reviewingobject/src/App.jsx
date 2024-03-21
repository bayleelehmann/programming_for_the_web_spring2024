import { useState } from 'react'

import './App.css'

function App() {
  const myNewObject = {
    foo: "bar",
    baz: "blarg"
  }
//console.log(myNewObject)
//destructuring 
const {foo, baz} = myNewObject;
console.log("this should be foo", foo);
console.log("this sholuld be baz", baz);
// spread operator...
//merge new propertities with another object 
//into a new object
const myOtherObject = {
  ...myNewObject,
  someKey: "this",
  someOtherKey: "that"
}
//overwrite existing values
const myLastObject = {
  ...myNewObject,
  foo: "banana"
}
//console.log(myLastObject);
//console.log(myOtherObject)
const myReallyLastObject ={
  ...myNewObject, ...myOtherObject, ...myLastObject
}
//array notation
const myFooVar = "foo";
console.log("array notation", myNewObject[myFooVar])


//console.log(myReallyLastObject)
  return (
    <>
      Hi Everyone!
    </>
  )
}

export default App
