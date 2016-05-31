import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const middleware = [
        thunkMiddleware,
        createLogger(),
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        // Useful for debugging, see: https://github.com/zalmoxisus/redux-devtools-extension
        window.devToolsExtension ? window.devToolsExtension() : func => func
    ));

    return store;
}
