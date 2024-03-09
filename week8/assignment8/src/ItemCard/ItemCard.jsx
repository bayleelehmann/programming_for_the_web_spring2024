import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
// import label from "../assets/Maison-Margiela-Logo.png";
import trash from "../assets/trash_icon.jpg";
import copy from "../assets/copy_icon.jpg";
//import TabiShoes from "../TabiShoes/TabiShoes";
export default function ItemCard({
    name, 
    image, 
    // desc, 
    // brand,
    color,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="tabiCard">
            {/* {<div className="labelLogo">
            <img src={label} alt="brand name"/>{label}</div>} */}
        {/* <div className="label"> <img src={label} title="brand label" /> {brand}</div> */}
           <div className="cardImg">
           <img src={image} alt={name} />
        </div>
            <div className="cardTitle">{name}</div>
            {/* {<div className="tabiDesc">{desc}</div>} */}
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy} /></a>
            </div>
            <div className={clsx([color])}>{color}</div>
            {/* {color.map((color) => {
                return <div key={color} className={clsx(["stripe", color])}/>
            })} */}

        </div>
    )
}
ItemCard.propTypes = {
    name: PropTypes.string, 
    image: PropTypes.string, 
    desc: PropTypes.string, 
    brand: PropTypes.string, 
    color: PropTypes.string, 
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}
