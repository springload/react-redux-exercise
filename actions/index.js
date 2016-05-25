// it's considered good practice to have all the types sitting as constants.
export const CHANGE_VALUE = 'CHANGE_VALUE';

// This is an action
// it get some params (here an event)
// and then returns an object with a type (mandatory)
// and some other params which will be used inside the reducer
export const changeValue = (event) => {
  return {
    type: CHANGE_VALUE,
    newValue: event.target.value,
  }
}

// IMPLEMENT ME
// I work with /reducers/exercise1.js
export const buttonClicked = () => {
}
