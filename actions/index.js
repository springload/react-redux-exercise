// Ok, let's say the user started typing something in the input of ExerciseZero
// The onClick function is triggered.
// This one comes from IntelligentExerciseZero
// and it dispatches an action
// This action (changeValue) is defined here
// Meet me in ../reducers/exercise0.js once you've understood this file
import actionTypes from './actionTypes';

// This is an action
// it get some params (here an event)
// and then returns an object with a type (mandatory)
// and some other params which will be used inside the reducer
export const changeValue = (event) => {
    return {
        type: actionTypes.CHANGE_VALUE,
        newValue: event.target.value,
    };
};

// TODO: IMPLEMENT ME
// I work with /reducers/exercise1.js
export const buttonClicked = () => {
};

export const boxTicked = (event) => {
    return {
        type: actionTypes.BOX_TICKED,
        hasTickedBox: event.target.value,
    };
};
