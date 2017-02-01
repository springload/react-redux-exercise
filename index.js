import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/configureStore';

// This is the "root" of your React App
// The render function bootstraps React onto the page, in a specific element (#root).
// A Redux Provider component is wrapping <App /> to provide access to the Redux store.
// Meet me in /components/App.js
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
