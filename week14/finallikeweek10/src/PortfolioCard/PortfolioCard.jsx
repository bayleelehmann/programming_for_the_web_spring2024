import PropTypes from "prop-types";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";
//import clsx from "clsx";
export default function PortfolioCard({
    name, 
    image, 
    desc, 
    id,

}) {
    return (
        <div className="portfolioCard">
            <div className="cardTitle">
            <Link to={`${id}`}>{name}</Link>
         </div>
           <div className="cardImg">
           <img src={image} alt={desc} />
           <div className="carddesc">{desc}</div>
        </div>
        </div>
    )
}
PortfolioCard.propTypes = {
    name: PropTypes.string, 
    image: PropTypes.string, 
    desc: PropTypes.string, 
    id: PropTypes.string,
}
