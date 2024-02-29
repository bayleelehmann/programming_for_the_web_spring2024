
function App() {
  // const cars = [
  //   "Honda",
  //   "Chevy",
  //   "Kia",
  //   "Ford",
  // ];
  const superHeros = [
    {name: "Superman", colors: ["blue", "red"]},
    {name: "Batman", colors: ["black", "yellow"]},
    {name: "Spiderman", colors: ["red", "blue"]},
    {name: "Wonder Woman", colors: ["red", "blue", "gold"]},
  ]

  return (
  // <div>
  //   <h1>Rendering Lists</h1>
  //   {cars.map((car)=> {
  //     return (<div key={car}>{car}</div>)
  //   })}
  // </div>
  // <div>
  //   <h1>Rendering Lists</h1>
  //   {cars.map((car) =>{ 
  //     return (<div key={car}>{car} </div>)
  //   })}
  // </div>
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
    })}
    </div>
  )
}

export default App
