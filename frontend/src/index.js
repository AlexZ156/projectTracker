'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import filesRefreshMiddleware from './files-refresh-middleware';
import reducers from './reducers';
<<<<<<< HEAD
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

=======
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

const history = createHistory();
>>>>>>> 367091e862fe2f3c30f1a596e8263d0ea3342cd2

let middlewares = [
    applyMiddleware(
        filesRefreshMiddleware,
        routerMiddleware(history),
        thunk
    )
];

// if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
// }

console.log(11, history)
export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    // userLocalState,
    compose(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        </Router>
=======
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App}/>
          </div>
        </ConnectedRouter>
>>>>>>> 367091e862fe2f3c30f1a596e8263d0ea3342cd2
    </Provider>,
    document.getElementById('my-app')
);
