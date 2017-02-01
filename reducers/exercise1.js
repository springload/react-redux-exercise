import actionTypes from '../actions/actionTypes';

const initialState = {
    name: '',
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.BUTTON_CLICKED:
        return Object.assign({}, state, {
            name: action.payload.buttonWhoGotClickedName,
        });
    default:
        return state;
    }
};

export default exercise;
