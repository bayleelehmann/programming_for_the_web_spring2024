import PropTypes from "prop-types";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";
//import clsx from "clsx";
// import trash from "../assets/trash_icon.jpg";
// import copy from "../assets/copy_icon.jpg";
export default function PortfolioCard({
    name, 
    image, 
    desc, 
    id,
    // deleteFn,
    // duplicateFn
}) {
    return (
        <div className="portfolioCard">
            <div className="cardTitle">
            <Link to={`${id}`}>{name}</Link>
         </div>
           <div className="cardImg">
           <img src={image} alt={desc} />
           <div className="cardTitle">{desc}</div>
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
