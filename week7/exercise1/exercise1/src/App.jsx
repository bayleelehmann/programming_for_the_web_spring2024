import Camelid from "./camel/Camelid";
import imageLlama from "./assets/llama.jpeg";
import image2 from "./image/alpaca.jpeg";

function App() {

  const camelData = [
    {name: "Llama", image: "llama.jpeg", desc: "Llama"},
    {name: "Alpaca", image: "alpaca.jpeg", desc: "Alpaca"},
    
  ]
  return (
    <div>
      <h2>Llama</h2>
      <Camelid name={camelData[0].name} image1={<img src={llama.jpg}/>} desc={camelData[0].desc} />

      <h2>Alpaca</h2>
      <Camelid name={camelData[1].name} image2={<img src={alpaca.jpg}/>} desc={camelData[1].desc} />
    

    </div>
  )
}
 export default App;