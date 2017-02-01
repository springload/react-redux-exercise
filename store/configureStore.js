import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [
    thunkMiddleware,
];

export default createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    // Expose store to Redux DevTools extension.
    global.devToolsExtension ? global.devToolsExtension() : fct => fct,
));
