import { useState } from 'react'
import PortfolioItems from "./PortfolioItems/PortfolioItems";
import PortfolioCard from './PortfolioCard/PortfolioCard';
import { Link } from "react-router-dom";
import {nanoid} from "nanoid";
import deckData from "../assets/deck-data.json"

export function Home() {
    const [decks, setDecks] = useState(deckData);
    
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
  
   return(
    <div className="page">
      {/*PortfolioItems goes here*/}
      <PortfolioItems />
      <div className="collection">
        {/* deck map goes here */}
        {/* use ItemCard component in loop */}
        {decks.map((portfolioDeck) => {
          return (
            <PortfolioCard key=
            {portfolioDeck.id} 
            {...portfolioDeck}/>
          )
        })}
      </div>
      <hr />
    </div>
   );
}
