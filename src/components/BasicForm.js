import React from "react";
import useInput from "./use-input";

const BasicForm = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueInputChangeHandler: nameInputChangeHandler, 
    valueInputBlurHandler: nameInputBlurHandler, 
    clearInput: clearName,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredLastName, 
    isValid: enteredLastNameIsValid, 
    hasError: lastNameInputHasError, 
    valueInputChangeHandler: lastNameInputChangeHandler, 
    valueInputBlurHandler: lastNameInputBlurHandler, 
    clearInput: clearLastName,
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

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  function formSubmissionHandler(e) {
    e.preventDefault()

    if(!enteredNameIsValid && !enteredEmailIsValid && !enteredLastNameIsValid) {
      return;
    }

    console.log(enteredName)
    console.log(enteredEmail)
    console.log(enteredLastName)

    clearName();
    clearEmail();
    clearLastName();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className='error-text'>Please enter a valid name</p>}
        </div>

        <div className={lastNameInputHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
          type='text' 
          id='lastName' 
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
          value={enteredLastName}
          />
          {lastNameInputHasError && <p className='error-text'>Please enter a valid last name</p>}
        </div>
      </div>

      <div className={emailInputHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
        type='email' 
        id='email'
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail} 
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid e-mail</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm
