import Camelid from "./components/Camelid";
function App() {
  const camelData = [
    {name: "Llama", image: "image/llama.jpeg", desc: "Llama"},
    {name: "Alpaca", image: "image/alpaca.jpeg", desc: "Alpaca"},
    
  ]
  return (
    <div>
      <h2>Llama and Alpaca</h2>
      <Camelid name={camelData[0].name} image={camelData[0].image} desc={camelData[0].desc} />
      <Camelid name={camelData[1].name} image={camelData[1].image} desc={camelData[1].desc} />
    

    </div>
  )
}
 export default App;