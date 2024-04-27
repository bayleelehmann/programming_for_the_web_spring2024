import PropTypes from "prop-types";
import "./DeckDetail.css";
import { Link, useParams } from "react-router-dom";
export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id ===id);
    console.log("deck", selectedDeck);
    return (
        <>
             <nav>
                <Link to="/">Return Home</Link>
            </nav>
            <div className="deck-detail">
                <h1>{selectedDeck.desc}</h1>
                <img src={selectedDeck.image} alt={selectedDeck.name} />
             </div>
        </>

    )
}
DeckDetail.propTypes = { 
    data: PropTypes.array
};