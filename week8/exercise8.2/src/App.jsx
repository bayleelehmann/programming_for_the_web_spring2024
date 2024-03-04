import { useState } from 'react'

import './App.css'
import ListAnimalComponent from './ListAnimalComponent';

function App() {
  const [headline, setHeadline] = useState("List of Animals");
  const [animalType, setAnimalType] = useState([
    "Horse",
    "Cow",
    "Camel",
    "Sheep",
    "Goat",
    "Elephant",
    "Cat",
    "Bird",
    "Rabbit",
    "Dog",
    "Pig",
  ]);
function deleteAnimal(animalName) {
  const updatedArray = animalType.filter((animal) =>
  {return animal !== animalName})
  setAnimalType(updatedArray);
}
function focusAnimal(animalName) {
  setHeadline(animalName)
}

  return (
    <>
     <h1>{`${headline} is the focus`}</h1>
     {animalType.map((myAnimal) => {
      return <ListAnimalComponent
      key={myAnimal}
      animalName={myAnimal}
      deleteFn={deleteAnimal}
      focusFn={focusAnimal}/>
     })}
    </>
  )
}

export default App
