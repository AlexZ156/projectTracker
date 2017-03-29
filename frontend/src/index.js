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
    Redirect
} from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import Routing from './routing';
import locaStorage from './local-storage';
import Login from './components/login' ;
import Home from './components/home' ;

// const isLogined = locaStorage.getItem('isLogined');


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
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('my-app')
);
