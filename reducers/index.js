import { combineReducers } from 'redux'
import exercise0 from './exercise0'
import exercise1 from './exercise1'
// import exercise2 from './exercise2'

// this is combining all the reducers we have in the app
// you can access each of them using state.exercise0, state.exercise1, etc...
const exerciseApp = combineReducers({
  exercise0,
  exercise1,
  // exercise2,
})

export default exerciseApp
