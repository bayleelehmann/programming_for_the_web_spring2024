import './App.css'

function App() {
  const fact1 = "Llamas are in the camel family";
  const fact2 = "Llamas are tall";
  const fact3 = "Llamas are strong";
  const fact4 = "Llamas spit";
  const fact5 = "Llamas are social";
  const fact6 = "Llamas are pack animals";
  const fact7 = "Llamas are smart";
  const fact8 = "Llamas do not bite";
  const fact9 = "Llamas are vegetarians";
  const fact10 = "Baby Llamas are called 'cria'";

  return (
   <div>
    {fact1 === "llamas are in the camel family" ? <div>{fact1}</div> : <div>{fact2}</div>}
    {fact2 === "llamas are tall" ? <div>{fact2}</div> : <div>{fact3}</div>}
    {fact3 === "llamas are strong" ? <div>{fact3}</div> : <div>{fact4}</div>}
    {fact4 === "llamas spit" ? <div>{fact4}</div> : <div>{fact5}</div>}
    {fact5 === "llamas are social" ? <div>{fact5}</div> : <div>{fact6}</div>}
    {fact6 === "llamas are pack animals" ? <div>{fact6}</div> : <div>{fact7}</div>}
    {fact7 === "llamas are smart" ? <div>{fact7}</div> : <div>{fact8}</div>}
    {fact8 === "llamas do not bite" ? <div>{fact8}</div> : <div>{fact9}</div>}
    {fact9 === "llamas are vegetarians" ? <div>{fact9}</div> : <div>{fact10}</div>}
    {fact10 === "baby llamas are called cria" ? <div>{fact10}</div> : <div>{fact1}</div>}
   </div>
      
  )
}

export default App
