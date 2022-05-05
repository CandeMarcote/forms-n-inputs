import React, {useState} from "react";
import useInput from "./use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueInputChangeHandler: nameInputChangeHandler, 
    valueInputBlurHandler: nameInputBlurHandler, 
    clearInput: clearName,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueInputChangeHandler: emailInputChangeHandler, 
    valueInputBlurHandler: emailInputBlurHandler, 
    clearInput: clearEmail,
  } = useInput(value => value.includes('@'))

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  function formSubmissionHandler(e) {
    e.preventDefault()

    if(!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName)
    console.log(enteredEmail)

    clearName();
    clearEmail();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputHasError? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Please enter a valid name</p>}
      </div>

      <div className={emailInputHasError? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>Your E-mail</label>
        <input 
        type='text' 
        id='email' 
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid e-mail</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
