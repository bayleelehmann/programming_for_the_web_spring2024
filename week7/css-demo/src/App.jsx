import "./styles.css";
function App() {
  const isKenOld = "yes";

  return (
    //<h1 className= "blue">Css Demo</h1>
    <h2 className= {isKenOld === "yes" ? "blue" : "red"}>Css Demo</h2>
  )
}

export default App
