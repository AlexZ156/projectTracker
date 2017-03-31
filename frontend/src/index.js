'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import filesRefreshMiddleware from './files-refresh-middleware';
import reducers from './reducers';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect,
    Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'


import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import AppRouting from './routing';
import locaStorage from './local-storage';

const browserHistory = createBrowserHistory();
// const isLogined = locaStorage.getItem('isLogined');
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
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <AppRouting history={history}/>
    </Provider>,
    document.getElementById('my-app')
);
