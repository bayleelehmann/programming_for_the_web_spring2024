import { useState } from 'react'

import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  const [textInputs, setTextInputs] = useState({
    firstName: "",
    lastName: "",
    password: ""
  })
  function handleTextChange(evt) {
    console.log(evt.target.value);
    console.log(evt.target.name);
    setTextInputs((previousTextInputs) = => {
      return {
        ...previousTextInputs,
        [evt.target.name]: evt.target.value
      }
    })

  }
  const [pets, setPets] = useState(true);
  function handleSubmit(evt) {
  evt.preventDefault();
  //console.log ({firstName, lastName, password, pets})
}
  return (
    <>
    <h1>Forms in React</h1>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <div>
          <label htmlFor="firstName">
            First Name
          </label>
          <input
          id= "firstname"
          type= "text"
          name="firstname"
          //value={firstName}
          value={textInputs.firstName}
          // onChange={(event)=> {
          //   console.log("first name event", event.target.value)
          //   setFirstName(event.target.value)
          // }}
          onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name
          </label>
          <input
          id= "lastname"
          type= "text"
          name="lastname"
          // value={lastName}
          value={textInputs.lastName}
          // onChange={(event)=> {
          //   console.log("last name event", event.target.value)
          //   setLastName(event.target.value)
          // }}
          onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password" 
          id= "password" 
          // value={password}
          value={textInputs.password}
          // onChange={(event)=> {
          //   console.log("passwird event", event.target.value)
          //   setPassword(event.target.value)
          // }}
          onChange={handleTextChange}
        />
        </div>
        <div>
          <label htmlFor="likesPets">Likes Pets</label>
          <input type="checkbox" 
          name="likesPets" 
          id= "likesPets"
          checked={pets} 
          onChange= {
            (evt) => {
              //console.log(evt.target.checked, pets)
              setPets(!pets)
              // won't show pets as changed if console log
            }
          }
          />
        </div>
      </fieldset>
      <fieldset>
        <button type="submit"> Submit </button>
      </fieldset>
    </form>

      
    </>
  )
}

export default App
