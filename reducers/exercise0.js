const initialState = {
  value: 'Initial value',
};

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return Object.assign({}, state, {
        value: action.newValue,
      })
    default:
      return state
  }
}

export default exercise
