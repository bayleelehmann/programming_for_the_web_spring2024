import "./styles.css";
function App() {
  const kenAge = "24";
  const paragraphStyleObj = {
    color: "green" , 
    fontsize: "36px",
    margin: "20px auto",
    width: "600px"
,  }
  return (
    <>
    <h1 className= {kenAge > 18 && "blue"}>Css Demo</h1>
    <h2 className= {paragraphStyleObj === "yes" ? "blue" : "red"}>Css Demo</h2>
    <p style = {{
      color: "green", 
      fontsize: "36px"
      }}>This is some random text</p>
    </>
  )
}

export default App
