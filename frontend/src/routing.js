'use strict';

import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
    Link 
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
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
    }/*,
    {
        path: '/projects/:projectId',
        component: Home
    }*/
];

console.log('ConnectedRouter', ConnectedRouter)

const RotesWrap = (route) => {
    return (
        <Route path={route.path} {...(route.exact ? {exact: true} : {})} render={props => {
            return <route.component {...props} routes={route.routes}/>
        }}/>
    )
}

class AppRouting extends React.Component {
    render() {
        console.log(this.props.history)
        return (
            <ConnectedRouter history={{...this.props.history}}>
                <div>
                    {routes.map((route, i) => (
                        <RotesWrap key={i} {...route} props={this.props}/>
                    ))}
                </div>
            </ConnectedRouter>
        )
    }
}

export default connect(/*stateToProps*/)(AppRouting);

