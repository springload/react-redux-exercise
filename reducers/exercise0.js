// Here is your reducer 
// It's "listening" for some actions to happen once a dispatch occurred.
// In this case this reducer is listening for "CHANGE_VALUE" action.
// But it could listen for many more actions.
// It just assigns/overwrites the new value to its state object in the app store
// reducers ALWAYS return the state (new or unchanged)
// The app store (or kind of root state if you prefer) contains the state of each reducers.
// For instance you will access to this one using 'state.exercise0.whatevervalue'
// Get started on Exercise 1 once you've understood this file :)

import { CHANGE_VALUE } from '../actions/';

const initialState = {
  value: 'Initial value',
};

const exercise = (state = initialState, action) => {
  // usually reducer core is just a switch on action.type
  // if you need to perform operations on values, create an external function and use it
  switch (action.type) {
    case CHANGE_VALUE:
      return Object.assign({}, state, {
        value: action.newValue,
      })
    default:
      return state
  }
}

export default exercise
