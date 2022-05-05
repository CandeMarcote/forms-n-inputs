import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputWasTouched, setInputWasTouched] = useState(false);
  
    const valueIsValid = validateValue(enteredValue);
    const hasError= !valueIsValid && inputWasTouched;
  
    function valueInputChangeHandler(e) {
      setEnteredValue(e.target.value)
    }
  
    function valueInputBlurHandler() {
      setInputWasTouched(true)
    }
  
    function clearInput() {
        setEnteredValue('') 
        setInputWasTouched(false)
    }

    return(
        {
            value: enteredValue,
            isValid: valueIsValid, 
            hasError, 
            valueInputChangeHandler, 
            valueInputBlurHandler, 
            clearInput,
        }
    )
}

export default useInput