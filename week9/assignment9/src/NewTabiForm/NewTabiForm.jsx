import { useState } from 'react';
import PropTypes from "prop-types";
import "./NewTabiForm.css";
import clsx from "clsx";

export function NewTabiForm({addCardFn}) {
    const initialCardSetting = {
        name: "", 
        image: "",
        color: [],
        made: false,
        notMade: false
    };
    const [newCard, setNewCard] = useState(initialCardSetting);
    const [errorObj, setErrorObj] = useState({
        tabi: "",
        image: "",
        color: ""
    });
    function validateForm(newCard) {
        console.log("triggering validation", !!newCard.name)
        let valid = true;
        if(!newCard.name) {
            console.log("setting error object")
            //set error object tabi prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    name: "The Tabi Name field is required"
                }
            });
            //return false;
            valid = false;
        }
        if(!newCard.image) {
            //set image prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    image: "The Tabi Image field is required"
                }
            });
            //return false;
            valid = false;
        }
        if(newCard.color.length === 0) {
            //set color message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                   color: "The Tabi Color field is required"
                }
            });
            //return false;
            valid = false;
        }
        console.log(valid)
        return valid;
    }


    function changeHandler(event) {
        console.log(event.target.value)
        if(event.target.name === "colors"){
            // figure out what color to add or remove
            const newColor = event.target.id;
            if(newCard.color.includes(newColor)) {
                const filteredArray = newCard.color.filter((color) => {
                    return color !== newColor
                })
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        color: filteredArray
                    }
              })
            } else {
                //we need to add the color
                const addedColors = [...newCard.color, newColor];
                setNewCard((prevCard) => {
                   return { 
                    ...prevCard,
                    color: addedColors
                }
                })
            }
        // } else if(event.target.name === "made" || event.target.name === "notMade"){


        } else {
            const needsBoolean =  ["made", "notMade"];
            const updatedTarget = needsBoolean.includes(event.target.id) ? 
            !!event.target.value : event.target.value;
            if(event)
            setNewCard((prevCard) => {
            return {
                ...prevCard,
                [event.target.name]: updatedTarget
                }
            })
        }

    }
    function submitHandler(event){
        event.preventDefault();
        console.log({newCard});
        if(validateForm(newCard)) {
            //send card to App
            addCardFn(newCard);
            //reset values
            setNewCard(initialCardSetting)
        }
    }
    return (
        <form className="new-tabi-form-wrapper" onSubmit={submitHandler}>
            <fieldset> 
                <legend>New Style Name</legend>
                <div className={{"form-group": true, "error": errorObj.name}}>
                    <label className="required" htmlFor="name">Name
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={newCard.name}
                    onChange={changeHandler}
                    onBlur={() => {
                        if(newCard.name) {
                            setErrorObj
                            ((prevErrorObj) => {
                                return {
                                    ...prevErrorObj,
                                    name: ""
                                }
                            })
                        }
                    }}
                    />
                     {errorObj.name && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.name}</small>
                        </>
                    )}
                    </label>
                    <br />
                    <label className="required" htmlFor="image">Image Url
                    <input 
                    type="text" 
                    name="image" 
                    id="image"  
                    onChange={changeHandler}
                    value={newCard.image}
                    onBlur={() => {
                        if(newCard.image) {
                            setErrorObj
                            ((prevErrorObj) => {
                                return {
                                    ...prevErrorObj,
                                    image: ""
                                }
                            })
                        }
                    }}
                    />
                    {errorObj.image && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.image}</small>
                        </>
                    )}
                    </label>   
                    <br />
            <fieldset>
                <legend>Colors</legend>
                {errorObj.color && (
                        <>
                        <br />
                        <small className="errorFeedback">{errorObj.color}</small>
                        </>
                    )}
                    <label className="required" htmlFor="color">Black
                    <input 
                    type="checkbox" 
                    name="color" 
                    id="black" 
                    onChange={changeHandler}
                    value={newCard.color.includes("black")}
                    onBlur={() => {
                        if(newCard.color.length> 0) {
                            setErrorObj({
                                ...errorObj,
                                color: ""
                            })
                        }
                    }}
                    />
                    </label>

                    <label htmlFor="color">Pale Blue
                    <input 
                    type="checkbox" 
                    name="color" 
                    id="pale-blue" 
                    onChange={changeHandler}
                    value={newCard.color.includes("pale-blue")}
                    onBlur={() => {
                        if(newCard.color.length> 0) {
                            setErrorObj({
                                ...errorObj,
                                color: ""
                            })
                        }
                    }}
                    />
                    </label>

                    <label htmlFor="color">Fir
                    <input 
                    type="checkbox" 
                    name="color" 
                    id="fir" 
                    onChange={changeHandler}
                    value={newCard.color.includes("fir")}
                    onBlur={() => {
                        if(newCard.color.length> 0) {
                            setErrorObj({
                                ...errorObj,
                                color: ""
                            })
                        }
                    }}
                    />
                    </label>

                    <label htmlFor="color">Dark Brown
                    <input 
                    type="checkbox" 
                    name="color" 
                    id="dark-brown" 
                    onChange={changeHandler}
                    value={newCard.color.includes("dark-brown")}
                    onBlur={() => {
                        if(newCard.color.length> 0) {
                            setErrorObj({
                                ...errorObj,
                                color: ""
                            })
                        }
                    }}
                    />
                    </label>
            </fieldset>
            </div>
            </fieldset>

            <fieldset>
                <legend>Collection Details</legend>

                <div className="form-group">
                    <label htmlFor="made">Produced</label>
                    <input 
                    type="checkbox" 
                    name="made" 
                    id="made" 
                    onChange={changeHandler}
                    value={newCard.made}
                    />

                    <label htmlFor="notMade">Not Produced</label>
                    <input 
                    type="checkbox" 
                    name="notMade" 
                    id="notMade" 
                    onChange={changeHandler}
                    value={newCard.notMade}
                    />
                    </div>
            </fieldset>
            <button type="submit" disabled={errorObj.name || errorObj.image || errorObj.color}> 
            Add Tabi</button>
        </form>
    )
}

NewTabiForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
}