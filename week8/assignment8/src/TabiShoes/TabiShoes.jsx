import tabiImg from "../assets/tabishoe.jpeg";
import "./TabiShoes.css";
export default function TabiShoes() {
    return (
        <div className="tabishoes">
            <div className="tabiimg">
            <img src={tabiImg} alt="Baylee's Tabi Shoe Decks"/>
            </div>
            <h1>Baylee&apos;s Tabi Shoe Deck</h1>
        </div>
    )
}