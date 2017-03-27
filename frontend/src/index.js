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
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

const history = createHistory();

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
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App}/>
          </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('my-app')
);
