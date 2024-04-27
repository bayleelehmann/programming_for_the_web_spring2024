/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./PortfolioRow.css";


export function PortfolioRow({name, image, desc, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td>{name}</td>
            <td><img src={image} alt={"item"} /></td>
            <td>{desc}</td>
          </tr>
    )
}