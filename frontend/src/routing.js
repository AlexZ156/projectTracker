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
import App from './components';
import Login from './components/login' ;
import Home from './components/home' ;
const isLogined = false;
const routs = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home
    }
]

const stateToProps = () => ({

})

const getRoutes = () => {
    return routs.map((rout) => {

    })
};
export default connect()((...a) => {
    console.log(1111, isLogined)
    return(
        <Switch>
            {/*<Route render={() => (isLogined ? (<Redirect to="/"/>) : (<div>
                <Redirect to="/login"/>
                <Login/>
            </div>))} />*/}
            {/*<Route component={App}/>*/}
        </Switch>
    )
});
