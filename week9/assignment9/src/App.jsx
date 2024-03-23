import { useState } from 'react'
import './App.css';
import TabiShoes from "./TabiShoes/TabiShoes";
import ItemCard from './ItemCard/ItemCard';
import { NewTabiForm } from './NewTabiForm/NewTabiForm';
import {nanoid} from "nanoid";

function App() {
  const [decks, setDecks] = useState([
    {
      name: "Tabi Knee-High Boots", 
      image: "./tabikneehighboots.jpeg",
      // desc: ["Crafted in vintage soft leather, these block-heel knee-high boots feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989. 8cm heel"],
      brand: "Maison Margiela", 
      color: "Black",
      id: "1"
    },
    {
      name: "Tabi ballerinas",
      image: "./tabiballerinas.jpeg",
      // desc: ["The Tabi ballerina shoes are crafted from soft nappa leather with a 3cm cylindrical heel. They feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
      brand: "Maison Margiela", 
      color: "Pale Blue",
      id: "2"
    },
    {
      name: "Tabi Mary-Janes",
      image: "./tabimaryjanes.jpeg",
      // desc: ["In calf leather with an adjustable top strap, the Mary-Jane shoes feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
      brand: "Maison Margiela", 
      color: "Black",
      id: "3"
    },
    {
      name: "Tabi loafers",
      image: "./tabiloafers.jpeg",
      // desc: ["Crafted from brushed calfskin, the chunky cleated sole loafers feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
      brand: "Maison Margiela", 
      color: "Fir",
      id: "4"
    },
    {
      name: "Tabi pumps",
      image: "./tabipumps.jpeg",
      // desc: ["In soft nappa leather with an adjustable ankle strap, the 8cm cylindrical heel pumps feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
      brand: "Maison Margiela", 
      color: "Dark Brown",
      id: "5"
    },
    {
      name: "Tabi sandals", 
      image: "./tabisandals.jpeg",
      // desc: ["With a double adjustable strap design, crafted in calf leather, the sandals feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
      brand: "Maison Margiela", 
      color: "Black",
      id: "6"
  },
    
  ]);

function deleteCard(id) {
  console.log("delete me", id);
  const updatedArray = decks.filter((tabiDeck) => {
    return tabiDeck.id !== id; // will skip item with matching id
  })
  setDecks(updatedArray)
}
function duplicateCard(id) {
  console.log("duplicate me", id)
  const matchingDeck = decks.find((tabiDeck) => {
    return tabiDeck.id === id
  });
  const updatedDeck = {...matchingDeck, id: nanoid()}
  setDecks([...decks, updatedDeck]);
}

function addCard(newCard) {
  const cardWidthId = {
    ...newCard,
    id: nanoid()
  }
  setDecks([...decks,cardWidthId])
 }

  return (
    <div className="page">
      {/*TabiShoes goes here*/}
      <TabiShoes />
      <div className="collection">
        {/* deck map goes here */}
        {/* use ItemCard component in loop */}
        {decks.map((tabiDeck) => {
          return (
            <ItemCard key=
            {tabiDeck.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...tabiDeck}/>
          )
        })}
      </div>
      <hr />
      <NewTabiForm addCardFn={addCard} />
    </div>
  )
}

export default App
