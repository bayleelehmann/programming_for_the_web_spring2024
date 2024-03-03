
import "./App.css";
import { TabiRow } from "./TabiRow";
// import Tabi from "./components/Tabi";
// import imageKneeHighBoots from "./assets/tabikneehighboots.jpeg";
// import imageBallerinas from "./assets/tabiballerinas.jpeg";
// import imageMaryJanes from "./assets/tabimaryjanes.jpeg";
// import imageLoafers from "./assets/tabiloafers.jpeg";
// import imagePumps from "./assets/tabipumps.jpeg";
// import imageSandals from "./assets/tabisandals.jpeg";

function App() {
  const tabiShoes = [
    {name: "Tabi Knee-High Boots", 
    // img: <img src={imageKneeHighBoots} alt="knee high boots" />,
    image: "/tabikneehighboots.jpeg",
    desc: ["Crafted in vintage soft leather, these block-heel knee-high boots feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989. 8cm heel"],
    brand: "Maison Margiela", 
    color: "Black"},

    {name: "Tabi ballerinas",
    //  img: <img src={imageBallerinas} alt="ballerinas" />,
    image: "/tabiballerinas.jpeg",
     desc: ["The Tabi ballerina shoes are crafted from soft nappa leather with a 3cm cylindrical heel. They feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
     brand: "Maison Margiela", 
     color: "Pale Blue"},

     {name: "Tabi Mary-Janes",
    //  img: <img src={imageMaryJanes} alt="mary janes" />,
     image: "/tabimaryjanes.jpeg",
     desc: ["In calf leather with an adjustable top strap, the Mary-Jane shoes feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
     brand: "Maison Margiela", 
     color: "Black"},

     {name: "Tabi loafers",
    //  img: <img src={imageLoafers} alt="loafers" />,
     image: "/tabiloafers.jpeg",
     desc: ["Crafted from brushed calfskin, the chunky cleated sole loafers feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
     brand: "Maison Margiela", 
     color: "Fir"},

     {name: "Tabi pumps",
    //  img: <img src={imagePumps} alt="pumps" />,
     image: "/tabipumps.jpeg",
     desc: ["In soft nappa leather with an adjustable ankle strap, the 8cm cylindrical heel pumps feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
     brand: "Maison Margiela", 
     color: "Dark Brown"},
     
     {name: "Tabi sandals",
    //  img: <img src={imageSandals} alt="sandals" />,
     image: "/tabisandals.jpeg",
     desc: ["With a double adjustable strap design, crafted in calf leather, the sandals feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989."],
     brand: "Maison Margiela", 
     color: "Black"},
    
  ];

  return (
    <>
      <h1>My Tabi Wish list</h1>
      <p>The most comfortable shoes, expensive but worth the investment</p>
      <table className="tabi-table">
        <thead>
            <tr>
              <th>Shoe Name</th>
              <th>Shoe Image</th>
              <th>Shoe Description</th>
              <th>Brand</th>
              <th>Color</th>
            </tr>
        </thead>
        <tbody>
         {tabiShoes.map((tabiShoes, index) => {
          return (
          <TabiRow 
          key={tabiShoes.image}
          odd={index % 2 === 0}
          name={tabiShoes.name} 
          image={tabiShoes.image}
          desc={tabiShoes.desc}
          brand={tabiShoes.brand}
          color={tabiShoes.color}
          />
          )
         })}
        </tbody>
      </table>
    </>
  )
}
export default App;
