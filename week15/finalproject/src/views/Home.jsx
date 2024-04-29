import { useState } from 'react'
import PortfolioItems from "../PortfolioItems/PortfolioItems";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import {nanoid} from "nanoid";
import deckData from "../assets/deck-data.json"

export function Home() {
    const [decks, setDecks] = useState(deckData);
  
  
  function deleteCard(id) {
  
    const updatedArray = decks.filter((portfolioDeck) => {
      return portfolioDeck.id !== id; // will skip item with matching id
    })
    setDecks(updatedArray)
  }
  function duplicateCard(id) {

    const matchingDeck = decks.find((portfolioDeck) => {
      return portfolioDeck.id === id
    });
    const updatedDeck = {...matchingDeck, id: nanoid()}
    setDecks([...decks, updatedDeck]);
  }
  
   return(
    <div className="page">
      {/*images goes here*/}
      <PortfolioItems />
      <div className="collection">
        {/* deck map goes here */}
        {/* use ItemCard component in loop */}
        {decks.map((portfolioDeck) => {
          return (
            <PortfolioCard key=
            {portfolioDeck.id} 
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...portfolioDeck}/>
          )
        })}
      </div>
      <hr />
     
    </div>
   );
}
