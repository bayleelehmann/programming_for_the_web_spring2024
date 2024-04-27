import { useState } from 'react'
import "./App.css";
import PortfolioItems from "./PortfolioItems/PortfolioItems";
import PortfolioCard from './PortfolioCard/PortfolioCard';
import { nanoid } from "nanoid";
//import { PortfolioRow } from "./PortfolioRow";

function App() {
  const [decks, setDecks] = useState([
    {
      name: "Self Portrait",
      image:"./Baylee_Self Portrait1.jpg",
      desc: ["Self Portrait using Procreate"],
      id: "1"
    },

    {
      name: "Drop Cap",
      image:"./DropCap_A.jpg",
      desc: ["Drop Cap Letter A"],
      id: "2"
    },

    {
      name: "Flower Illustration",
      image:"./FlowerIllustration.jpg",
      desc: ["Flower Illustration using Procreate"],
      id: "3"
    },

    {
      name: "Friendly Spider",
      image:"./FriendlySpider_web.png",
      desc: ["Animation in Procreate"],
      id: "4"
    },

    {
      name: "Smoking Shroom",
      image:"./Smoking shroom smaller.gif",
      desc: ["Animation using Procreate"],
      id: "5"
    },

    {
      name: "Hierarchy Poster",
      image:"./HierarchyPoser_1.jpg",
      desc: ["Hierarchy Poser"],
      id: "6"
    },

    {
      name: "archive Masthead",
      image:"./Masthead_1.jpg",
      desc: ["Masthead Assignment"],
      id: "7"
    },

    {
      name: "archive Masthead",
      image:"./Masthead_2.jpg",
      desc: ["Masthead Assignment"],
      id: "8"
    },

    {
      name: "Grid Poster",
      image:"./TypographicGridFormsPoster.jpg",
      desc: ["Typographic GridForms Poster"],
      id: "9"  
    },
  ]);

  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = decks.filter((portfolioDeck) => {
      return portfolioDeck.id !== id; // will skip item with matching id
    })
    setDecks(updatedArray)
  }
  function duplicateCard(id) {
    console.log("duplicate me", id)
    const matchingDeck = decks.find((portfolioDeck) => {
      return portfolioDeck.id === id
    });
    const updatedDeck = {...matchingDeck, id: nanoid()}
    setDecks([...decks, updatedDeck]);
  }

  return (
    <div className="page">
    {/*TabiShoes goes here*/}
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
  </div>
)
}

export default App