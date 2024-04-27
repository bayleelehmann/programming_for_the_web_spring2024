import lineBoilImg from "../assets/bayleelehmannlineboil_3.gif";
import "./PortfolioItems.css";
export default function PortfolioItems() {
    return (
        <div className="portfolioitems">
            <div className="lineBoilImg">
            <img src={lineBoilImg} alt="Baylee's items"/>
            </div>
        </div>
    )
}