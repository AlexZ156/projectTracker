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

/*const RotesWrap = (route) => {
    return (
        <Route path={route.path} {...(route.exact ? {exact: true} : {})} render={props => {
            return (
                !route.props.login ?
                    <div>
                        {props.match.path !== '/login' && <Redirect to="/login"/>}
                    </div> :
                    <route.component {...props} routes={route.routes}/>
            )
        }}/>
    )
}

const stateToProps = ({login}) => {
    return {
        login
    }
}

class AppRouting extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    {routes.map((route, i) => (
                        <RotesWrap key={i} {...route} props={this.props}/>
                    ))}
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        )
    }
}*/

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
            <Router history={{...this.props.history}}>
                <Switch>
                    {routes.map((route, i) => (
                        <RotesWrap key={i} {...route} props={this.props}/>
                    ))}
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        )
    }
}

export default connect(/*stateToProps*/)(AppRouting);

