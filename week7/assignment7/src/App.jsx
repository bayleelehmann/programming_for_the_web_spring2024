// import "./styles.css";  
// function App() {
//   const listOther = "no";
//   const paragraphStyleObj = {
//     color: "green",
//     fontSize: "36px",
//     margin: "15px auto",
//     width: "600px",
//   }
//   return (
//     <>
//      <h1 className={listOther === "yes" ? "blue" : "red"}>CSS Demo</h1>
//      <p style={paragraphStyleObj}>Some random text</p>
//     </>
   
//   )
// }

// export default App

import "./styles.css";
function App() {
  const tabiShoes = [
    {name: "Tabi Knee-High Boots", 
    desc: "Crafted in vintage soft leather, these block-heel knee-high boots feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989. 8cm heel" ,
    brand: "Maison Margiela", 
    color: "Black"},

    {name: "Tabi ballerinas",
     desc: "The Tabi ballerina shoes are crafted from soft nappa leather with a 3cm cylindrical heel. They feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989.",
     brand: "Maison Margiela", 
     color: "Pale Blue"},

     {name: "Tabi Mary-Janes",
     desc: "In calf leather with an adjustable top strap, the Mary-Jane shoes feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989.", 
     brand: "Maison Margiela", 
     color: "Black"},

     {name: "Tabi loafers",
     desc: "Crafted from brushed calfskin, the chunky cleated sole loafers feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989.", 
     brand: "Maison Margiela", 
     color: "Fir"},

     {name: "Tabi pumps",
     desc: "In soft nappa leather with an adjustable ankle strap, the 8cm cylindrical heel pumps feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989.", 
     brand: "Maison Margiela", 
     color: "Dark Brown"},
     
     {name: "Tabi sandals",
     desc: "With a double adjustable strap design, crafted in calf leather, the sandals feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989.", 
     brand: "Maison Margiela", 
     color: "Black"},
    
  ];

  return (
    <div>
      <h1>Maison Margiela Tabi Shoes I wish I owned</h1>
      { 
      tabiShoes.map((tabi) => {
        return(
          <div key={tabi.name}>
            <h3>{tabi.name}</h3>
            <ul>
              {/* {tabi.desc.map((desc) => {
                return (
                  <li key={desc} />)
              })} */}
             
            </ul>

            </div>
        )
      })}
    </div>
  )
}

export default App
