import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import exerciseApp from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(exerciseApp, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers'); // eslint-disable-line global-require
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
