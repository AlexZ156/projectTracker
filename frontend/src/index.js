'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ReactDOM from 'react-dom';
import {
    compose,
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import filesRefreshMiddleware from './files-refresh-middleware';
import reducers from './reducers';
import AppRouting from './routing';

const browserHistory = createBrowserHistory();

let middlewares = [
    applyMiddleware(
        filesRefreshMiddleware,
        routerMiddleware(browserHistory),
        thunk
    )
];

// if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
// }

export const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    compose(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <AppRouting history={browserHistory}/>
    </Provider>,
    document.getElementById('my-app')
);
