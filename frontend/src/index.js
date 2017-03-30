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
import { routerReducer } from 'react-router-redux';
import AppRouting from './routing';
import locaStorage from './local-storage';
import Login from './components/login' ;
import Home from './components/home' ;
import Project from './components/project' ;
import NoMatch from './components/404' ;

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
    compose(...middlewares)
);

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/projects',
        component: Project
    }/*,
    {
        path: '/login',
        component: Login
    }*/
];

const RotesWrap = (route, {history}) => {
    console.log()
    return (
        <Route path={route.path} {...(route.exact ? {exact: true} : {})} render={props => (
            !store.getState().login ?
                <div>
                    {props.match.path !== '/login' && <Redirect to="/login"/>}
                </div> :
                <route.component {...props} routes={route.routes}/>
        )}/>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <AppRouting/>
    </Provider>,
    document.getElementById('my-app')
);
