import PropTypes from "prop-types";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";
//import clsx from "clsx";
// import trash from "../assets/trash_icon.jpg";
// import copy from "../assets/copy_icon.jpg";
export default function PortfolioCard({
    //name, 
    image, 
    desc, 
    // id,
    // deleteFn,
    // duplicateFn
}) {
    return (
        <div className="portfolioCard">
            <div className="cardTitle">{desc}</div>
           <div className="cardImg">
           <img src={image} alt={desc} />
        </div>
            {/* <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy} /></a>
            </div> */}
            

        </div>
    )
}
PortfolioCard.propTypes = {
    //name: PropTypes.string, 
    image: PropTypes.string, 
    desc: PropTypes.string, 
    id: PropTypes.string,
    // duplicateFn: PropTypes.func,
    // deleteFn: PropTypes.func
}
