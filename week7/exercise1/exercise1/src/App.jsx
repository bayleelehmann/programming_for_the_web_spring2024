import Camelid from "./camel/Camelid";
import imageName from "./image/llama.jpeg";
import imageName from "./image/alpaca.jpeg";
function App() {
  const camelData = [
    {name: "Llama", imageName: "llama.jpeg", desc: "Llama"},
    {name: "Alpaca", imageName: "alpaca.jpeg", desc: "Alpaca"},
    
  ]
  return (
    <div>
      <h2>Llama and Alpaca</h2>
      <Camelid name={camelData[0].name} image={imageName[0].image} desc={camelData[0].desc} />
      <Camelid name={camelData[1].name} image={imageName[1].image} desc={camelData[1].desc} />
    

    </div>
  )
}
 export default App;