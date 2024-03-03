/* eslint-disable no-unused-vars */
import "./TabiRow.css"
export function TabiRow(name, image, desc, brand, color, odd) {
    return (
        <tr className={odd && "odd"}>
            <td>{name}</td>
            <td><img src={image} alt={"shoe"} /></td>
            <td>{desc}</td>
            <td>{brand}</td>
            <td>{color}</td>
          </tr>
    )
}