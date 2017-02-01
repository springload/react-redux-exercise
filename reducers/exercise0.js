// Here is one of the reducers.
// A reducer is a function that receives actions and changes the store state accordingly.
// It's "listening" for some actions to happen once a `dispatch` occurred.
// In this case this reducer is listening for "CHANGE_VALUE" action.
// But it could listen for many more actions.

// When an action occures, it changes the store's state to reflect what that action conveys.
// The store state needs to be immutable: a new state is re-created from the old one, hence why we use `assign`.
// Reducers ALWAYS return the state (new or unchanged).

// An application can be composed of multiple reducers, each of them acting on a separate part of the overall state.
// The global application state within the Redux store can be created by
// combining the sub-states retuned by all of the reducers.
// Here, this reducer works on the "exercise0" part of the state, available
// in `state.exercise0.whatevervalue`
// Get started on Exercise 1 once you've understood this file :)

import actionTypes from '../actions/actionTypes';

// Each reducer must define the initial state it works on.
const initialState = {
    value: 'Initial value',
};

const changeValue = (state, action) => {
    return Object.assign({}, state, {
        value: action.payload.newValue,
    });
};

const exercise0 = (state = initialState, action) => {
    // usually reducer core is just a switch on action.type
    // if you need to perform operations on values, create an external function and use it
    switch (action.type) {
    case actionTypes.CHANGE_VALUE:
        return changeValue(state, action);
    default:
        return state;
    }
};

export default exercise0;
