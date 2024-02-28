import ".index.css";
import "./components/Camel.css";
import Camelid from "./components/Camelid";
import imageLlama from "./assets/llama.jpeg";
import imageAlpaca from "./assets/alpaca.jpeg";


function App() {
  const camelData = [
    {name: "Llama", 
    fact: "A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.", 
    img: <img src={imageLlama} alt="llama" />, },
    
    {name: "Alpaca", 
    fact: "Like cows and sheep, alpacas are ruminants.", 
    img: <img src={imageAlpaca} alt="alpaca" />, },
    
  ]
  return (
    <div>
      <h2>Camelid facts</h2>
      <Camelid name={camelData[0].name} fact={camelData[0].fact} img={camelData[0].img} />
      <Camelid name={camelData[1].name} fact={camelData[1].fact} img={camelData[1].img} />
    

    </div>
  )
}
 export default App;