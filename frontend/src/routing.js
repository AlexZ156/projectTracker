'use strict';

import {
    connect
} from 'react-redux';
import {
    Route,
    Switch
} from 'react-router-dom';
import {
    ConnectedRouter
} from 'react-router-redux';
import Login from './components/login' ;
import Home from './components/home' ;
import Project from './components/projects' ;
import NoMatch from './components/404' ;

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/projects',
        component: Project
    },
    {
        path: '/projects/:projectId',
        component: Home
    }
];

const RotesWrap = route => (
    <Route 
        path={route.path} 
        {...(route.exact ? {exact: true} : {})}
        render={() => <route.component/>}
    />
);

const AppRouting = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            {routes.map(route => (
                <RotesWrap key={route.path} {...route}/>
            ))}
            <Route component={NoMatch}/>
        </Switch>
    </ConnectedRouter>
);

export default connect()(AppRouting);

