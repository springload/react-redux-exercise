import actionTypes from '../actions/actionTypes';

const initialState = {
    name: '',
};

const buttonClicked = (state, action) => {
    return Object.assign({}, state, {
        name: action.payload.buttonWhoGotClickedName,
    });
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.BUTTON_CLICKED:
        return buttonClicked(state, action);
    default:
        return state;
    }
};

export default exercise;
