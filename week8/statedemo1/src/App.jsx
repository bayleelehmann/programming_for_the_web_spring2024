
import './App.css'
import {useState} from "react";

function App() {
 const [scoreObj, setScoreObj] = useState({left: 0, right: 0})
function incrementRightScore () {
  const newScore = {
  left: scoreObj.left,
  right: scoreObj.right + 1
 }

setScoreObj(newScore);
}
  return (
    <>
   <h1>Solitare clicky game</h1>
   <div>
    left
      <button onClick={() => {
      setScoreObj((previousObject) =>{
        return {...previousObject, left: previousObject.left + 1} 
      });
    }}>Push Me</button>
    </div>
    <div>
    right
    <button onClick={incrementRightScore}> no Push Me</button>
    </div>
   

    <div>
      <h2>Score</h2>
      left score {scoreObj.left} | right score {scoreObj.right}
    </div>
    
    </>
  )
}

export default App
