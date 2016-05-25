import { BUTTON_CLICKED } from '../actions/';

const initialState = {
  name: '',
};

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      return Object.assign({}, state, {
        name: action.buttonWhoGotClickedName,
      })
    default:
      return state
  }
}

export default exercise
