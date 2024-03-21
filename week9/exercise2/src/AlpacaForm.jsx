import { useState } from "react";
import "./AlpacaForm.css";

export function AlpacaForm () {
const initalFormData = {
    firstName: "",
    lastNamel: "",
    street: "",
    state: "California",
    country: "",
    colors: [],
}
const states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
];

const [formObject, setFormObject] = useState(initalFormData);
const [errorObject, setErrorObject] = useState({
    firstName: "",
    lastName: "",
    country: ""
})

function validateErrors () {
    let errors = {};
    if (!formObject.firstName.trim()) {
        errors.firstName = "First name is required";
    }
    if (!formObject.lastName.trim()) {
        errors.lastName = "Last name is required";
    }
    setErrorObject(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
}    
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
    } else {  // my check box isn't worrking... but the second "else" caused errors?
    

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
const isValid = validateErrors();
if (isValid) {
    // Form submission logic goes here
    console.log("Form submitted successfully!");
} else {
    console.log("Form submission failed due to validation errors.");
}
}

return (
    <>
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
        onBlur={validateErrors}
        />
        {errorObject.firstName && (
                    <>
                    <br />
                    <small>{errorObject.firstName}</small>
                    </>
                )}
        </div>
        <div className="formgroup">
            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={formObject.lastName} 
            onChange={changleHandler}
            onBlur={validateErrors}
            />
             {errorObject.lastName && (
                    <>
                    <br />
                    <small>{errorObject.lastName}</small>
                    </>
                )}
            </div>
            <div className="formgroup">
            <label htmlFor="street">Street Address</label>
            <input 
            type="text" 
            name="street" 
            id="street"
            value={formObject.street} 
            onChange={changleHandler}
            onBlur={validateErrors}
            />
              {errorObject.lastName && (
                    <>
                    <br />
                    <small>{errorObject.lastName}</small>
                    </>
                )}
            </div>
            <div className="formgroup">
            <label htmlFor="state">State</label>
            <select 
            name="state" 
            id="state"
            value={formObject.state}
            onChange={changleHandler}
            onBlur={validateErrors}
            >
            {states.map((singleState, index) => {
                return (
                    <option  key={index} value={singleState}>{singleState}</option>
                )
            })}
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

