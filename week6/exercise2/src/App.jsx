import header from "./header"
function App() {
  const myString = "Hello, World";
  const myArray = ["not sure", "I am not good at this", "send help"]
  return (
    <div>
      <header></header> {/* why didn't this work? */}
    <h1>Hello, is this right? I am kind of lost.</h1>
    {myString}
    <br />
    {myArray[1]}
    </div>
      
  )
}

export default App
