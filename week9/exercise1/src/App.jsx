import { useState } from 'react'

import './App.css'

function App() {
  const initalFormData = {
    firstName: "",
    lastNamel: "",
    street: "",
    state: "California",
    country: "",
    colors: [],
  }
  const [formObject, setFormObject] = useState(initalFormData);
  function changleHandler(event) {
    console.log(event.target.value);
    if(event.target.name === "colors") {
      const colorName = event.target.id;
      if(formObject.colors.includes(colorName)) {
        setFormObject({
          ...formObject,
          colors: formObject.colors.filter ((color) => color !== colorName)
        })
      }
    } else {
      

    //console.log("submit triggered");
    
    setFormObject((previousForm) => {
      console.log(event.target.name)
      //forObject["firstName"]
      //if(event.target.name === "firstName") {
        return {
          ...previousForm, 
          [event.target.name]: event.target.value
          //firstName: event.target.value
        }
      
      //else if (event.target.name === "lastName"){
        //return {
          //...previousForm, 
          //lastName: event.target.value
        
    })
  }
}
 function handleSubmit(event) {
  event.preventDefault();
  console.log("the whole form object", formObject);
  //console.log('submit triggered')
  //setFormObject({
    //firstName: event.target.value
  //})
 }

  return (
    <>
      <h1>Alpaca Fan Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formgroup">
            <label htmlFor="firstName">First Name</label>
          <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          value={formObject.firstName} 
          onChange={changleHandler}
          />
          </div>
          <div className="formgroup">
            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={formObject.lastName} 
            onChange={changleHandler}
            />
            </div>
            <div className="formgroup">
            <label htmlFor="street">Street Address</label>
            <input 
            type="text" 
            name="street" 
            id="street"
            value={formObject.street} 
            onChange={changleHandler}
            />
            </div>
            <div className="formgroup">
              <label htmlFor="state">State</label>
              <select 
              name="state" 
              id="state"
              value={formObject.state}
              onChange={changleHandler}
              >
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="New York">Arizona</option>
                <option value="New York">Kansas</option>
              </select>
              </div>

            <div className="formgroup">
            <label htmlFor="country">Country</label>
            <input 
            type="text" 
            name="country" 
            id="country"
            value={formObject.country} 
            onChange={changleHandler}
            />
            </div>              
        </fieldset>

        <fieldset>
          <legend>Tell us about your Alpaca Interests!</legend>
          <p>Favorite alpaca colors</p>
          <div className="formgroup">
            <label htmlFor="brown">Brown
                <input 
                type="checkbox" 
                name="colors" 
                id="brown"
                checked={formObject.colors.includes("brown")}
                onChange={changleHandler}
                />
                </label>
              <label htmlFor="black">Black
                 <input 
                 type="checkbox" 
                 name="colors"
                id="black" 
                checked={formObject.colors.includes("black")}
                onChange={changleHandler}
                />
                </label>
              <label htmlFor="red">Red
                  <input 
                  type="checkbox" 
                  name="colors" 
                  id="red" 
                  checked={formObject.colors.includes("red")}
                  onChange={changleHandler}
                  />
                  </label>
              <label htmlFor="purple">Purple
                <input 
                type="checkbox" 
                name="colors" 
                id="purple"
                checked={formObject.colors.includes("purple")}
                onChange={changleHandler} 
                />
                </label>
            </div>
        </fieldset>
        <button type="submit">
          Sign me up
        </button>
      </form>
    </>
  )
}

export default App
