import { useState } from 'react'

import './App.css'
import UsStateComponent from './UsStateComponent'

function App() {
 const [headline, setHeadline] = useState("List of American States");
 const [usStates, setUsStates] = useState([
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware"
 ]);
  function deleteState(stateName) {
    const updatedArray = usStates.filter((state) => {
      return state !== stateName
    })
    setUsStates(updatedArray);
  }
  function focusState(stateName) {
    setHeadline(stateName)
  }
  return (
    <>
      <h1>{`${headline} is the focus`}</h1>
      {usStates.map((myState) => {
        return <UsStateComponent 
        key={myState} 
        stateName={myState} 
        deleteFn={deleteState}
        focusFn={focusState}/>
      })}
    </>
  )
}

export default App
