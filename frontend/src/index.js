'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ReactDOM from 'react-dom';
import App from './components';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import filesRefreshMiddleware from './files-refresh-middleware';
import reducers from './reducers';

let middlewares = [
    applyMiddleware(
        filesRefreshMiddleware,
        thunk
    )
];

// if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
// }

export const store = createStore(
    combineReducers(reducers),
    // userLocalState,
    compose(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('my-app')
);
