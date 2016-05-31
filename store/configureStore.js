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
        window.devToolsExtension ? window.devToolsExtension() : func => func
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers'); // eslint-disable-line global-require
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
