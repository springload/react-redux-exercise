import { CHANGE_VALUE } from '../actions/';

const initialState = {
  value: 'Initial value',
};

// This is a reducer
// It's call at every dispatch and scan the action.type
// to see if it can manage it or not
// In this case, this reducer is in charge of the type CHANGE_VALUE
// it just assigns/overwrites the new value to the state object in the store
// reducers ALWAYS return the state (new or unchanged)
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
