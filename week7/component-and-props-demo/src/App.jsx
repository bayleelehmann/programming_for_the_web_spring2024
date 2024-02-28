import './App.css'
import Nav from './Nav';
function App() {
  const navigationArray = [
    {label: "About", link: "https://google.com"},
    {label: "Portfolio", link: "https://disney.com"},
    {label: "Contact", link: "https://mpr.com"},
  ]

  return (
    <>
      <Nav navArray={navigationArray} />
    <div>Hi</div>
    </>
  )
}

export default App
