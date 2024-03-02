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
  const superHeros = [
    {name: "Superman", colors: ["blue", "red"]},
    {name: "Batman", colors: ["black", "yellow"]},
    {name: "Spiderman", colors: ["red", "blue"]},
    {name: "Wonder Woman", colors: ["red", "blue", "gold"]},
  ];

  return (
    <div>
      <h1>Rendering Lists</h1>
      {
        superHeros.map((hero) => {
          return (
            <div key={hero.name}> 
              <h3>{hero.name} </h3>
              <ul>
                {hero.colors.map((color) => {
                  return (
                  <li key={color} style={{backgroundColor: color}} />)
                })}
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
